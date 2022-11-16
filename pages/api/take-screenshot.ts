import { isDev } from './../../util/IsDev';
import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import fs from 'fs';
import Jimp from 'jimp';

let puppeteer;
let chrome = {
	args: [],
	executablePath: '',
};
let screenshotUrl;

if (isDev()) {
	puppeteer = require('puppeteer');
	screenshotUrl = process.env.SCREENSHOT_URL;
}
else {
	puppeteer = require('puppeteer-core');
	chrome = require('chrome-aws-lambda');
	screenshotUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL || process.env.PUBLIC_VERCEL_URL}/fun`;
}

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['GET', ],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run the middleware
  await runMiddleware(req, res, cors)

  const browser = await puppeteer.launch({ 
		args: ['--no-sandbox', '--disable-setuid-sandbox', ...chrome.args] ,
		executablePath: await chrome.executablePath,
		headless: true,
	});
	const page = await browser.newPage();
	await page.setViewport({ width: 600, height: 800 });
	await page.goto(screenshotUrl);

	// Make sure content has loaded before we take a screenshot
	await page.waitForSelector('.top-tracks-list');

	await page.screenshot({
		path: '/tmp/screenshot.png',
	});

	await browser.close();

	await convert('/tmp/screenshot.png');
	const screenshot = fs.readFileSync('/tmp/screenshot.png');

	res.writeHead(200, {
		'Content-Type': 'image/png',
		'Content-Length': screenshot.length,
	});
	return res.end(screenshot);
}

function convert(filename: string) {
	Jimp.read(filename)
		.then(img => {
			img
				.resize(600, 800)
				.quality(60)
				.greyscale()
				.write(filename);
		})
		.catch(err => {
			throw err;
		});
}

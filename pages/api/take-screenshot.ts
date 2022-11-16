import { isDev } from './../../util/IsDev';
import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import fs from 'fs';
import Jimp from 'jimp';

const SCREENSHOT_URL_POSTFIX = "kindle";

let puppeteer;
let chrome = {
	args: [],
	executablePath: '',
};

let screenshotBaseUrl;
if (isDev()) {
	puppeteer = require('puppeteer');
	screenshotBaseUrl = process.env.SCREENSHOT_BASE_URL;
}
else {
	puppeteer = require('puppeteer-core');
	chrome = require('chrome-aws-lambda');
	screenshotBaseUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL || process.env.PUBLIC_VERCEL_URL}`;
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
	await page.goto(`${screenshotBaseUrl}/${SCREENSHOT_URL_POSTFIX}`);

	// Make sure content has loaded before we take a screenshot
	await page.waitForSelector('.top-tracks-list');

	const screenshotStoragePath = '/tmp/screenshot.png';
	await page.screenshot({
		path: screenshotStoragePath,
	});

	await browser.close();

	await convert(screenshotStoragePath);
	const screenshot = fs.readFileSync(screenshotStoragePath);

	res.writeHead(200, {
		'Content-Type': 'image/png',
		'Content-Length': screenshot.length,
	});
	return res.end(screenshot);
}

async function convert(filename: string) {
	const img = await Jimp.read(filename);
	return img
		.resize(600, 800)
		.greyscale()
		.writeAsync(filename);
}

const github_token = process.env.GITHUB_TOKEN;

export default async function getGithubRepos() {
  let headers = new Headers();
  headers.set('Authorization', 'Basic ' + Buffer.from("lwpulsifer:" + github_token, "base64").toString("base64"));

  const fetchResult = await fetch("https://api.github.com/users/lwpulsifer/repos", { headers });
  return fetchResult.json();
}



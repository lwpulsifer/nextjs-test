import { createTokenAuth } from "@octokit/auth-token";
import { Octokit } from 'octokit';

const github_token = process.env.GITHUB_TOKEN;
const octo = new Octokit({ auth: github_token });

export const printLogin = async () => {
  const {
    data: { login },
  } = await octo.rest.users.getAuthenticated();
  console.log("Hello, %s", login);
}

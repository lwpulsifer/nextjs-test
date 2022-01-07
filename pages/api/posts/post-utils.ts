import { Post } from "../../../lib/markdown/api";

export type FetchPostError = { error: string };
export type FetchPostSuccess = { posts: Post[] };
export type FetchPostResponse = FetchPostError | FetchPostSuccess;

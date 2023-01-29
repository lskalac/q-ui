import { Post } from "../types/post.types";
import { baseApi } from "./base.api"

const BASE_URL = 'posts';

export const getPosts = async (): Promise<Post[]> => {
   return (await baseApi.get<Post[]>(BASE_URL)).data;
}
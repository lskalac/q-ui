import { Post } from "../types/post.types";
import { baseApi } from "./base.api"

const BASE_URL = 'posts';

export const getPosts = async (userId: string): Promise<Post[]> => {
   const params = userId ? {
      userId
   } : undefined;
   return (await baseApi.get<Post[]>(BASE_URL, {
      params
   })).data;
}
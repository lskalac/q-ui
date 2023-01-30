import {Post, PostComment} from '../types/post.types';
import {baseApi} from './base.api';

const BASE_URL = 'posts';

export const getPosts = async (userId: string): Promise<Post[]> => {
	const params = userId
		? {
				userId,
		  }
		: undefined;
	return (
		await baseApi.get<Post[]>(BASE_URL, {
			params,
		})
	).data;
};

export const getPost = async (id: number): Promise<Post> => {
	return (await baseApi.get<Post>(`${BASE_URL}/${id}`)).data;
};

export const getPostComments = async (id: number): Promise<PostComment[]> => {
	return (await baseApi.get<PostComment[]>(`${BASE_URL}/${id}/comments`))
		.data;
};

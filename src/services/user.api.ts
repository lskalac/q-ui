import {User} from '../types/user.types';
import {baseApi} from './base.api';

const BASE_URL = 'users';

export const getUsers = async (): Promise<User[]> => {
	return (await baseApi.get<User[]>(BASE_URL)).data;
};

export const getUser = async (id: number): Promise<User> => {
	return (await baseApi.get<User>(`${BASE_URL}/${id}`)).data;
};

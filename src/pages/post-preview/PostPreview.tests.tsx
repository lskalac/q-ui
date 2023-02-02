import {describe, expect, it, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import PostPreview from './PostPreview';
import {User} from '../../types/user.types';
import {Post, PostComment} from '../../types/post.types';

const mockedUser: User = {
	id: 1,
	name: 'Jane',
	username: 'jane',
	email: 'jane@maill.com',
	address: {
		street: 'street 29',
		suite: 'apt2',
		city: 'new york',
		zipcode: '23020',
		geo: {
			lat: '2',
			lng: '2',
		},
	},
	phone: '23920',
	website: 'jane.com',
	company: {
		name: 'janeco',
		catchPhrase: 'phrase',
		bs: 'bs',
	},
};

const mockedPost: Post = {
	id: 1,
	userId: 2,
	title: 'You must read this post',
	body: 'Do you know that... This is just intro to the next post :)',
};

const mockedPostComments: PostComment[] = [
	{
		postId: 1,
		id: 1,
		name: 'argh..',
		email: 'joe@mail.com',
		body: 'this post is ugly and boring',
	},
	{
		postId: 1,
		id: 2,
		name: 'thumbs up',
		email: 'lucy@mail.com',
		body: 'this post very delightful',
	},
];

const mockPostData = () => {
	vi.mock('./../../services/post.api', () => {
		const getPost = vi.fn();
		getPost.mockResolvedValue(mockedPost);
		const getPostComments = vi.fn();
		getPostComments.mockResolvedValue(mockedPostComments);
		return {
			getPost,
			getPostComments,
		};
	});
};

const mockUser = (resolved: boolean = true) => {
	vi.mock('./../../user.api', () => {
		const getUser = vi.fn();
		resolved
			? getUser.mockResolvedValue(mockedUser)
			: getUser.mockResolvedValue(new Promise(() => {}));
		return {
			getUser,
		};
	});
};

describe('PostPreview', () => {
	it('should display data', () => {
		mockPostData();
		mockUser();

		render(<PostPreview />);

		expect(screen.getByRole('heading')).toBeDefined();
		expect(screen.getByText(mockedPost.title)).toBeDefined();
	});

	it('should display loader', () => {
		mockPostData();
		mockUser(false);

		render(<PostPreview />);

		expect(screen.getByTestId('loader')).toBeDefined();
	});
});

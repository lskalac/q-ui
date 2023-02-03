import {beforeEach, describe, expect, it, vi} from 'vitest';
import {render, screen, waitFor} from '@testing-library/react';
import PostPreview from './PostPreview';

const mockPostData = () => {
	vi.mock('../../services/post.api', () => {
		const getPost = vi.fn();
		getPost.mockResolvedValue(
			Promise.resolve({
				id: 1,
				userId: 2,
				title: 'You must read this post',
				body: 'Do you know that... This is just intro to the next post :)',
			})
		);

		const getPostComments = vi.fn();
		getPostComments.mockResolvedValue(
			Promise.resolve([
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
			])
		);

		return {
			getPost,
			getPostComments,
		};
	});
};

const mockUser = (resolved: boolean = true) => {
	vi.mock('../../user.api', () => {
		const getUser = vi.fn();
		resolved
			? getUser.mockResolvedValue(
					Promise.resolve({
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
					})
			  )
			: getUser.mockResolvedValue(new Promise(() => {}));
		return {
			getUser,
		};
	});
};

describe('PostPreview', () => {
	beforeEach(() => {
		vi.mock('react-router-dom', () => ({
			useParams: vi.fn(() => 1),
		}));
	});

	it('should display data', async () => {
		mockPostData();
		mockUser();

		render(<PostPreview />);

		await waitFor(() =>
			expect(screen.getByText('You must read this post')).toBeDefined()
		);
	});

	it('should display loader', () => {
		mockPostData();
		mockUser(false);

		render(<PostPreview />);

		expect(screen.getByTestId('loader')).toBeDefined();
	});
});

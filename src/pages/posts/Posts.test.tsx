import {render, screen, waitFor} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';
import {Post} from '../../types/post.types';
import {User} from '../../types/user.types';
import Posts from './Posts';

const mockPostList = () => {
	vi.mock('../../posts.api', () => {
		const getPosts = vi.fn();
		getPosts.mockResolvedValue(
			Promise.resolve([
				{
					id: 1,
					userId: 2,
					title: 'You must read this post',
					body: 'Do you know that... This is just intro to the next post :)',
				} as Post,
			])
		);

		return {
			getPosts,
		};
	});
};

const mockUserList = (resolved = true) => {
	vi.mock('../../user.api', () => {
		const getUsers = vi.fn();
		getUsers.mockResolvedValue(
			resolved
				? Promise.resolve([
						{
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
						} as User,
				  ])
				: new Promise(() => {})
		);

		return {
			getUsers,
		};
	});
};

describe('Post', () => {
	vi.mock('react-router-dom', () => ({
		useNavigate: vi.fn(),
	}));

	it('should display data', async () => {
		mockPostList();
		mockUserList();

		render(<Posts />);

		await waitFor(() => expect(screen.getByText('Posts')).toBeDefined());
	});

	it('should display loader', () => {
		mockPostList();
		mockUserList(false);

		render(<Posts />);

		expect(screen.getByTestId('loader')).toBeDefined();
	});
});

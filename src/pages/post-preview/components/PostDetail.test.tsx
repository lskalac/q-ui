import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import PostDetail from './PostDetail';

describe('PostDetails', () => {
	it('should display post data', () => {
		const author = 'Jane';
		const body = 'some text';

		render(<PostDetail author={author} body={body} />);

		expect(screen.getByText(/Jane/i)).toBeDefined();
		expect(screen.getByText(body)).toBeDefined();
	});
});

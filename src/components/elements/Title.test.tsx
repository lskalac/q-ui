import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import Title from './Title';

describe('Title', () => {
	it('should display title', () => {
		const title = 'Test title';
		render(<Title text={title} />);

		expect(screen.getByText(title)).toBeDefined();
	});
});

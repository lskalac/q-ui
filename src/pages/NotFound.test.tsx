import {describe, expect, it} from 'vitest';
import {screen, render} from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound', () => {
	it('should be defined', () => {
		render(<NotFound />);
		expect(screen.getByTestId('not-found')).toBeDefined();
	});
});

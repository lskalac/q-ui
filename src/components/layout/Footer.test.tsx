import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
	it('should display footer', () => {
		render(<Footer />);

		expect(screen.getByTestId('footer')).toBeDefined();
	});
});

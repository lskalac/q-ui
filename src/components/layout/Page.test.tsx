import {beforeEach, describe, expect, it, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import Page from './Page';

describe('Page', () => {
	beforeEach(() => {
		vi.mock('react-router-dom', () => ({
			useNavigate: vi.fn(),
			Link: () => {},
		}));

		render(
			<Page>
				<p>Child component</p>
			</Page>
		);
	});

	it('should render header', () => {
		expect(screen.getByTestId('header')).toBeDefined();
	});

	it('should render children', () => {
		expect(screen.getByText('Child component')).toBeDefined();
	});

	it('should render footer', () => {
		expect(screen.getByTestId('footer')).toBeDefined();
	});
});

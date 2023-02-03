import {beforeEach, describe, expect, it, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
	beforeEach(() => {
		vi.mock('react-router-dom', () => ({
			useNavigate: vi.fn(),
			Link: () => {},
		}));

		render(<Header />);
	});

	it('should display header', () => {
		expect(screen.getByTestId('header')).toBeDefined();
	});
});

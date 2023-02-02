import {screen, render} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import HomePage from './HomePage';

describe('HomePage', () => {
	it('shoud be defined', () => {
		render(<HomePage />);
		expect(screen.getByTestId('home-page')).toBeDefined();
	});
});

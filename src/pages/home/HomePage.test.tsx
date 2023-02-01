import {screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';

describe('HomePage', () => {
	it('shoud be defined', () => {
		expect(screen.getByTestId('home-page')).toBeDefined();
	});
});

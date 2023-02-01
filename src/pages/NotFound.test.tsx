import {describe, expect, it} from 'vitest';
import {screen} from '@testing-library/react';

describe('NotFound', () => {
	it('should be defined', () => {
		expect(screen.getByTestId('not-found')).toBeDefined();
	});
});

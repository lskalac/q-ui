import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
	it('should display loader', () => {
		render(<Loader />);

		expect(screen.getByTestId('loader')).toBeDefined();
	});
});

import {beforeEach, describe, expect, it, vi} from 'vitest';
import SearchFilter from './SearchFilter';
import {render, screen, fireEvent} from '@testing-library/react';

describe('SearchFilter', () => {
	beforeEach(() => {
		render(<SearchFilter onChange={(val: string) => console.log(val)} />);
	});

	it('should display search input', () => {
		expect(screen.getByTestId('search-filter')).toBeDefined();
	});

	it('should call on change', () => {
		const logSpy = vi.spyOn(global.console, 'log');

		fireEvent.change(screen.getByTestId('search-filter'), {
			target: {value: 'test'},
		});

		expect(logSpy).toHaveBeenCalled();
		expect(logSpy).toHaveBeenCalledWith('test');
	});
});

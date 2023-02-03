import {describe, expect, it, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import {withComponentInfoLog} from './withComponentInfoLog';

const TestComponent = () => {
	return <p>Test</p>;
};

const Component = withComponentInfoLog(TestComponent);

describe('withComponentInfoLog', () => {
	it('should display component', () => {
		render(<Component />);

		expect(screen.getByText('Test')).toBeDefined();
	});

	it('should display component', () => {
		const logSpy = vi.spyOn(global.console, 'log');

		render(<Component />);

		expect(logSpy).toHaveBeenCalled();
		expect(logSpy).toHaveBeenCalledWith('Hello from TestComponent');
	});
});

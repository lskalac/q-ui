import {withComponentInfoLog} from '../withComponentInfoLog';

export const Loader = () => {
	return (
		<div data-testid="loader" className="loader">
			<span className="loader__spinner"></span>
		</div>
	);
};

export default withComponentInfoLog(Loader);

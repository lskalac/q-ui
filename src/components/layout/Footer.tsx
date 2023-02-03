import {withComponentInfoLog} from '../withComponentInfoLog';

export const Footer = () => {
	return (
		<div data-testid="footer" className="footer">
			Lorena@2023
		</div>
	);
};

export default withComponentInfoLog(Footer);

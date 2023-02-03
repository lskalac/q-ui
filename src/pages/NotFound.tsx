import Title from '../components/elements/Title';
import {withComponentInfoLog} from '../components/withComponentInfoLog';

export const NotFound = () => {
	return (
		<div className="page" data-testid="not-found">
			<Title text="404" />
			<p> Ooops! Page you are looking for is not found.</p>
		</div>
	);
};

export default withComponentInfoLog(NotFound);

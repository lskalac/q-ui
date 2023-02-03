import Title from '../../components/elements/Title';
import {withComponentInfoLog} from '../../components/withComponentInfoLog';

export const HomePage = () => {
	return (
		<div data-testid="home-page">
			<Title text="Home Page" />
			<p>Welcome to extra super Posts website!!!</p>
		</div>
	);
};

export default withComponentInfoLog(HomePage);

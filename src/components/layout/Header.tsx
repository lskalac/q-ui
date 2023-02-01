import {Link, useNavigate} from 'react-router-dom';
import {RoutePath} from '../../routes';
import {withComponentInfoLog} from '../withComponentInfoLog';

export const Header = () => {
	const navigate = useNavigate();
	return (
		<div data-testid="header" className="header">
			<img
				className="header__logo"
				src="/img-logo.svg"
				alt=""
				onClick={() => navigate(RoutePath.LANDING)}
			/>
			<ul className="header__nav">
				<li>
					<Link to={RoutePath.POSTS}>POSTS</Link>
				</li>
			</ul>
		</div>
	);
};

export default withComponentInfoLog(Header);

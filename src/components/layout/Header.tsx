import {Link, useNavigate} from 'react-router-dom';
import {RoutePath} from '../../routes';

export const Header = () => {
	const navigate = useNavigate();
	return (
		<div className="header">
			<img
				className="header__logo"
				src="/img-logo.svg"
				alt=""
				onClick={() => navigate(RoutePath.LANDING)}
			/>
			<ul className="header__nav">
				<li>
					<Link to={RoutePath.LANDING}>POSTS</Link>
				</li>
			</ul>
		</div>
	);
};

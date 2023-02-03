import {FC, PropsWithChildren} from 'react';
import {withComponentInfoLog} from '../withComponentInfoLog';
import Footer from './Footer';
import Header from './Header';

export const Page: FC<PropsWithChildren> = ({children}) => {
	return (
		<div className="page">
			<Header />
			<div className="page__content">{children}</div>
			<Footer />
		</div>
	);
};

export default withComponentInfoLog(Page);

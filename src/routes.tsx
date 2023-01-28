import {FC, PropsWithChildren} from 'react';
import {Page} from './components/layout/Page';
import {HomePage} from './pages/home/HomePage';

export enum RoutePath {
	LANDING = '/',
}

interface RouteItem {
	path: RoutePath;
	Component: React.FC;
	Layout: React.FC<PropsWithChildren>;
}

export const routes: RouteItem[] = [
	{
		path: RoutePath.LANDING,
		Component: HomePage,
		Layout: Page,
	},
];

export const LayoutWrapper: FC<RouteItem> = ({Component, Layout}) => {
	return (
		<Layout>
			<Component />
		</Layout>
	);
};

import {FC, PropsWithChildren} from 'react';
import Page from './components/layout/Page';
import HomePage from './pages/home/HomePage';
import PostPreview from './pages/post-preview/PostPreview';
import Posts from './pages/posts/Posts';

export enum RoutePath {
	LANDING = '/',
	POSTS = '/posts',
	POST_PREVIEW = '/posts/:id',
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
	{
		path: RoutePath.POSTS,
		Component: Posts,
		Layout: Page,
	},
	{
		path: RoutePath.POST_PREVIEW,
		Component: PostPreview,
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

import {useMemo, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Loader from '../../components/elements/Loader';
import Table, {TableAction, TableColumn} from '../../components/elements/Table';
import Title from '../../components/elements/Title';
import {withComponentInfoLog} from '../../components/withComponentInfoLog';
import {useFetch} from '../../hooks/useFetch';
import {RightArrowSVG} from '../../icons';
import {RoutePath} from '../../routes';
import {getPosts} from '../../services/post.api';
import {getUsers} from '../../services/user.api';
import {Post, PostBase} from '../../types/post.types';
import {User} from '../../types/user.types';
import {replacePatternWithValue} from '../../util/string';
import SearchFilter from '../../components/filters/SearchFilter';

export const Posts = () => {
	const isComponentMounted = useRef(true);
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState<string>('');

	const {data: posts, isLoading} = useFetch<Post[]>(
		() => getPosts(),
		isComponentMounted
	);
	const {data: users, isLoading: isUsersLoading} = useFetch<User[]>(
		() => getUsers(),
		isComponentMounted
	);

	const mapData = (): PostBase[] => {
		if (!posts || !users) return [];

		return posts
			.map((x) => {
				return {
					id: x.id,
					title: x.title,
					userFullName:
						users.find((u) => u.id === x.userId)?.name || '',
				} as PostBase;
			})
			.filter(
				(x) =>
					!searchTerm ||
					x.userFullName
						.toLowerCase()
						.includes(searchTerm.toLowerCase())
			);
	};

	const listData = useMemo(() => {
		return mapData();
	}, [posts, searchTerm, mapData]);

	if (isLoading || isUsersLoading) return <Loader />;

	const columns: TableColumn<Post>[] = [
		{
			key: 'id',
			label: 'PostID',
		},
		{
			key: 'title',
			label: 'Title',
		},
	];

	const actions: TableAction<Post>[] = [
		{
			Component: (props) => (
				<div
					className="cursor-pointer"
					onClick={() =>
						navigate(
							replacePatternWithValue(
								RoutePath.POST_PREVIEW,
								':id',
								props.data.id
							)
						)
					}>
					<RightArrowSVG />
				</div>
			),
		},
	];

	return (
		<div>
			<div className="title_wrapper">
				<Title text="Posts" />
				<SearchFilter onChange={setSearchTerm} />
			</div>
			<Table data={listData} columns={columns} actions={actions} />
		</div>
	);
};

export default withComponentInfoLog(Posts);

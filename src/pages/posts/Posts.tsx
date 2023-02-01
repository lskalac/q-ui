import {useMemo, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Loader from '../../components/elements/Loader';
import Title from '../../components/elements/Title';
import { withComponentInfoLog } from '../../components/withComponentInfoLog';
import {useFetch} from '../../hooks/useFetch';
import {RightArrowSVG} from '../../icons';
import {RoutePath} from '../../routes';
import {getPosts} from '../../services/post.api';
import {getUsers} from '../../services/user.api';
import {Post, PostBase} from '../../types/post.types';
import {User} from '../../types/user.types';
import {replacePatternWithValue} from '../../util/string';

export const Posts = () => {
	console.log('posts')
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

	const onSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	if (isLoading || isUsersLoading) return <Loader />;

	return (
		<div>
			<div className="title_wrapper">
				<Title text="Posts" />
				<input
					placeholder="Search by..."
					value={searchTerm}
					onChange={onSearchTermChange}
					className="input"
				/>
			</div>
			<div className="table">
				<table>
					<thead>
						<tr>
							<th>PostID</th>
							<th>Title</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{listData.map((x, i) => (
							<tr key={i}>
								<td>{x.id}</td>
								<td>{x.title}</td>
								<td
									className="cursor-pointer"
									onClick={() =>
										navigate(
											replacePatternWithValue(
												RoutePath.POST_PREVIEW,
												':id',
												x.id
											)
										)
									}>
									<RightArrowSVG />
								</td>
							</tr>
						))}
						{listData.length === 0 && (
							<tr aria-colspan={3}>
								<td>No data found.</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default withComponentInfoLog(Posts);

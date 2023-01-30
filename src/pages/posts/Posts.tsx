import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Loader} from '../../components/elements/Loader';
import {Title} from '../../components/elements/Title';
import {useFetch} from '../../hooks/useFetch';
import {RightArrowSVG} from '../../icons';
import {RoutePath} from '../../routes';
import {getPosts} from '../../services/post.api';
import {Post} from '../../types/post.types';
import {replacePatternWithValue} from '../../util/string';

export const Posts = () => {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState<string>('');
	const {
		data: posts,
		isLoading,
		refetch,
	} = useFetch<Post[]>(() => getPosts(searchTerm));

	useEffect(() => {
		refetch();
	}, [searchTerm]);

	if (isLoading) return <Loader />;

	const onSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

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
						<th>PostID</th>
						<th>Title</th>
						<th>Actions</th>
					</thead>
					<tbody>
						{(posts || []).map((x, i) => (
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
						{(posts || []).length === 0 && (
							<tr aria-colspan={3}>No data found.</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

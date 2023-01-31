import {useCallback, useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Loader} from '../../components/elements/Loader';
import {Title} from '../../components/elements/Title';
import {useFetch} from '../../hooks/useFetch';
import {getPost, getPostComments} from '../../services/post.api';
import {getUser} from '../../services/user.api';
import {Post, PostComment} from '../../types/post.types';
import {User} from '../../types/user.types';

export const PostPreview = () => {
	console.log('post')
	const {id} = useParams<{id: string}>();
	const [isUserLoading, setIsUserLoading] = useState<boolean>(true);
	const [user, setUser] = useState<User>();
	const isComponentMounted = useRef(true);
	const {data: post, isLoading: isPostLoading} = useFetch<Post>(
		() => getPost(Number(id)),
		isComponentMounted
	);
	const {data: postComments, isLoading: isPostCommentsLoading} = useFetch<
		PostComment[]
	>(() => getPostComments(Number(id)), isComponentMounted);

	const fetchUser = useCallback(async () => {
		setIsUserLoading(true);
		setUser(await getUser(Number(post?.userId)));
		setIsUserLoading(false);
	}, [post?.userId]);

	useEffect(() => {
		if (post) fetchUser();
	}, [post, fetchUser]);

	if (isPostLoading || isPostCommentsLoading || isUserLoading)
		return <Loader />;

	return (
		<div>
			<Title text={post?.title || ''} />
			<div className="post">
				<p>{post?.body}</p>
				<i className="post__signature">- {user?.username}</i>
			</div>
			<div className="comment">
				<h3>Comments</h3>
				{postComments?.map((x, i) => {
					return (
						<div key={i} className="comment__item">
							<p className="comment__item__title">{x.name}</p>
							<p className="comment__item__body">{x.body}</p>
							<p className="comment__item__signature">
								{x.email}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

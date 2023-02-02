import {useCallback, useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import Loader from '../../components/elements/Loader';
import {useFetch} from '../../hooks/useFetch';
import {getPost, getPostComments} from '../../services/post.api';
import {getUser} from '../../services/user.api';
import {Post, PostComment} from '../../types/post.types';
import {User} from '../../types/user.types';
import Title from '../../components/elements/Title';
import {withComponentInfoLog} from '../../components/withComponentInfoLog';
import {PostDetail} from './components/PostDetail';
import { CommentList } from './components/CommentList';

export const PostPreview = () => {
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
			<PostDetail author={user?.name || ''} body={post?.body || ''} />
			<div className="comment">
				<h3>Comments</h3>
				<CommentList comments={postComments || []} />
			</div>
		</div>
	);
};

export default withComponentInfoLog(PostPreview);

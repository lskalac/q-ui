import {FC} from 'react';
import {withComponentInfoLog} from '../../../components/withComponentInfoLog';

interface PostProps {
	author: string;
	body: string;
}

export const PostDetail: FC<PostProps> = ({author, body}) => {
	return (
		<div className="post">
			<p>{body}</p>
			<i className="post__signature">- {author}</i>
		</div>
	);
};

export default withComponentInfoLog(PostDetail);

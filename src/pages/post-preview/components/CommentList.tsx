import { FC } from "react";
import { withComponentInfoLog } from "../../../components/withComponentInfoLog";
import { PostComment } from "../../../types/post.types";

interface CommentListProps {
    comments: PostComment[];
}
export const CommentList: FC<CommentListProps> = ({
    comments
}) => {
    return <>
        {comments.map((x, i) => {
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
        {comments.length === 0 && (
                <div data-testid="no-data" className="comment__item">
                    No comments at this time
                </div>
        )}
    </>
}

export default withComponentInfoLog(CommentList);
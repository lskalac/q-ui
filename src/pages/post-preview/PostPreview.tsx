import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Loader } from "../../components/elements/Loader";
import { Title } from "../../components/elements/Title"
import { getPost, getPostComments } from "../../services/post.api";
import { getUser } from "../../services/user.api";
import { Post, PostComment } from "../../types/post.types";
import { User } from "../../types/user.types";

export const PostPreview = () => {
    const {id} = useParams<{id: string}>();
    const [loading, setLoading] = useState<boolean>(true);
    const [post, setPost] = useState<Post>();
    const [postComments, setPostComments] = useState<PostComment[]>();
    const [user, setUser] = useState<User>();

    const fetch = async () => {
        setLoading(true);
        const postRes = await getPost(Number(id));
        setPost(postRes);
        setPostComments(await getPostComments(Number(id)));
        setUser(await(getUser(Number(postRes?.userId))));
        setLoading(false);
    }

    useEffect(() => {
        fetch();
    }, [])

    if(loading)
        return <Loader />;

    return <div>
        <Title text={post?.title || ''} />
        <div className="post">
            <p>{post?.body}</p>
            <i className="post__signature">- {user?.username}</i>
        </div>
        <div className="comment">
            <h3>Comments</h3>
            {postComments?.map((x,i) => {
                return <div key={i} className="comment__item">
                    <p className="comment__item__title">{x.name}</p>
                    <p className="comment__item__body">{x.body}</p>
                    <p className="comment__item__signature">{x.email}</p>
                </div>
            })}
        </div>
    </div>
}
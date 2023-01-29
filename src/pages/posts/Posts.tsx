import { useEffect, useState } from "react"
import { Loader } from "../../components/elements/Loader";
import { Title } from "../../components/elements/Title"
import { RightArrowSVG } from "../../icons";
import { getPosts } from "../../services/post.api";
import { Post } from "../../types/post.types"

export const Posts = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [posts, setPosts] = useState<Post[]>([]);

    const fetch = async () => {
        setPosts(await getPosts());
        setLoading(false);
    }

    useEffect(() => {
        fetch();
    }, [])

    if(loading)
        return <Loader />

    return <div>
        <Title text="Posts" />
        <div className="table">
            <table>
                <thead>
                    <th>PostID</th>
                    <th>Title</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {posts.map((x, i) => <tr key={i}>
                        <td>{x.id}</td>
                        <td>{x.title}</td>
                        <td>
                            <RightArrowSVG/>
                        </td>
                    </tr>)}
                    {posts.length === 0 && <tr aria-colspan={3}>No data found.</tr>}
                </tbody>
            </table>
        </div>
    </div>
}
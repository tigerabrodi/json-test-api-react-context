import React, {useState, useEffect} from 'react';
import axios from "axios";
import Spinner from "../layout/Spinner";

const PostItem = props => {
    const [post,
        setPost] = useState({});

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
            .then(res => {
                let post = res.data;
                setPost(post)
            })
            .catch(err => {
                console.log(err);
            })
    }, [props.match.params.id])

    if (post === undefined || Object.keys(post).length === 0) {
        return <Spinner/>;
    } else {
        return (
            <>
            <article className="message">
            <div className="message-header">
            <p>post.title</p>
            </div>
            <div className="message-body">
                {post.body}
            </div>
            </article>
            </>
        );
    }

}

export default PostItem;

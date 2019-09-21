import React, {useContext} from 'react';
import {Context} from "../../context";
import Spinner from "../layout/Spinner";
import Post from "./Post";

const Posts = () => {
    const [state] = useContext(Context);
    const {posts, heading} = state;

    if (posts === undefined || posts.length === 0) {
        return <Spinner/>
    } else {
        return (
            <>
                <h3 className="title has-text-centered is-spaced is-capitalized has-text-weight-normal is-family-sans-serif has-text-dark is-size-2"> {heading} </h3>
                <div className="columns is-variable is-2 is-centered is-multiline">
                {posts.map(post => (
                    <div className="column is-one-quarter">
                    <Post key={post.id} post={post} />
                    </div>
                ))}
                </div>
            </>
        );
    }

}

export default Posts;

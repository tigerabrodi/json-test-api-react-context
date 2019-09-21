import React from 'react';
import {Link} from "react-router-dom";

const Post = props => {

    const {post} = props;

    return (
        <div className="card">
            <div className="card-content">
                <p className="title">{post.title}
                </p>
                <footer className="card-footer">
                <p className="card-footer-item">
                <Link exact to={`post/${post.id}`} className="button">More..</Link>
                </p>
                </footer>
            </div>
        </div>
    );
}

export default Post;

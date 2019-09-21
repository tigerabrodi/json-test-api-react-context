import React, {useContext, useState, useEffect} from 'react';
import axios from "axios";
import {Context} from "../../context";

const Search = () => {
    const [state,
        setState] = useContext(Context);
    const [postTitle,
        setPostTitle] = useState("");
    const [userInput,
        setUserInput] = useState("");

        const {posts} = state;

    useEffect(() => {
        
        setState({posts: posts.filter((item) => {
            return item.title.indexOf(postTitle) !== -1;
        })})

    }, [postTitle]);

    const onChange = e => {
        setUserInput(e.target.value);
        setPostTitle(userInput)
    }

    return (

        <div class="field">
            <label class="label has-text-centered">Search</label>
            <div class="control">
                <input 
                class="input" 
                type="text" 
                onChange={onChange}
                value={userInput}
                name="postTitle"
                placeholder="Post Title..."/>
            </div>
            <p class="help">Search for Post Title</p>
        </div>

    )

};

export default Search;
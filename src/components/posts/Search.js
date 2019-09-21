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

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts?title=${postTitle}`)
            .then(res => {
                let post = res.data;
                setState({posts: post, heading: "Search Results"})
            })
            .catch(err => {
                console.log(err);
            })
    }, [postTitle]);

    const findTrack = e => {
        e.preventDefault();
        setPostTitle(userInput);
    }

    const onChange = e => {
        setUserInput(e.target.value);
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
                <button onClick={findTrack} style={{margin: "15px auto"}} type="submit" className="button is-primary is-outlined has-text-centered">Submit</button>
            </div>
            <p class="help">Search for Post Title</p>
        </div>

    )

};

export default Search;
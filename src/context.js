import React, {useState, useEffect} from 'react'
import axios from "axios";

export const Context = React.createContext();

export function ContextController({children}) {
    let intialState = {
        posts: [],
        heading: ""
    }

    const [state,
        setState] = useState(intialState);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                // console.log(res.data)
                setState((prevState) => ({heading: "Posts", posts: res.data}))
            })
            .catch(err => {
                console.log(err);
            })

    }, [])

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );

}

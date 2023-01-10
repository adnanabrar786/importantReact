//  fetch data in mutiple state is worst practice best practice is useReducer Hooks

import axios from 'axios';
import React, { useState, useEffect } from 'react';

const FetchdataUseState = () => {

    const [loading, setloading] = useState(false);
    const [Post, setPost] = useState({});
    // const [error, setError] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => {
                setloading(true)
                setPost(response.data)
                // setError("")
            })
            .catch(error => {
                setloading(true)
                setPost({})
                // setError("something went wrong !!!")
            })
    }, []);

    return (
        <>

            <label>{loading  ? Post.title : "something went wrong !!!" }</label>
            {/* <label>{error ? error : null}</label> */}

        </>
    );
};

export default FetchdataUseState;

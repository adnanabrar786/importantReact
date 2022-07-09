import axios from 'axios';
import React, { useEffect , useReducer } from 'react';

const FetchDataUseReducer = () => {

    const initialState = {
        loading: true,
        Post: {},
        error: ""
    }

    
    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCESS':
                return {
                    loading: false,
                    Post: action.payload,
                    error: ""
                }
            case 'FETCH_ERROR':
                return {
                    loading: false,
                    Post: {},
                    error: "something went wrong"
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get("https://jsonplaceholde.typicode.com/posts/1")
            .then(response => {
                dispatch({ type: 'FETCH_SUCESS', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, []);

    return (
        <>
            <label>{state.loading ? "loading" : state.Post.title}</label>
            <label>{state.error ? state.error : null}</label>
        </>
    );
};

export default FetchDataUseReducer;

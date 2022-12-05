import React, {memo} from 'react'

const Todo = ({ todos, addTodods }) => {

    console.log("child render");

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <div>
                    {
                        todos.map((todo, index) => {
                            return <div key={index}> {todo + index} </div>
                        })
                    }
                </div>
                <button onClick={addTodods}>Add Todo</button>
            </div>
        </div>
    )
}

export default memo(Todo)

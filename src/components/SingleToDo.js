import React from 'react';

const SingleToDo = (props) => {
    const todo = props.todo;
    // "userId": 1,
    //     "id": 1,
    //     "title": "delectus aut autem",
    //     "completed": false
    return (
        <span className="" style={{display: 'inline-box'}}>
            <table border="1">
                <tr>
                    <td>Id</td>
                    <td>{todo.id}</td>
                </tr>
                <tr>
                    <td>Title</td>
                    <td>{todo.title}</td>
                </tr>
                <tr>
                    <td>Completed</td>
                    <td>{todo.completed ? 'Yes' : 'No'}</td>
                </tr>
            </table>
        </span>
    );
};

export default SingleToDo;

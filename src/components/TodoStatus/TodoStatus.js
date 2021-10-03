import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TodoStatus = () => {
    const [status, setStatus] =useState({});
    const {statusId} = useParams();
    useEffect( ()=>{
        const url = `https://jsonplaceholder.typicode.com/todos/${statusId}`;
            fetch(url)
                .then(res=>res.json())
                .then(data=>setStatus(data))
    } , [])
    return (
        <div>
            <h2>ToDo Status ID is: {statusId}</h2>
            <h4>Title: {status.title}</h4>

        </div>
    );
};

export default TodoStatus;
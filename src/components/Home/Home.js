import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import Tasks from '../Tasks/Tasks';
import './Home.css';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res =>res.json())
            .then(data=>setTasks(data))
    },[])
    return (
        <div className="my-3">
            <h2>ToDo List From Json Placeholder</h2>
            <Row xs={1} md={3} className="g-4">
            {
                tasks.map(task=> <Tasks
                key={task.id}
                task={task}
                ></Tasks>)
            }
            
        </Row> 
        </div>
    );
};

export default Home;
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tasks = (props) => {
    const {id, title, completed}=props.task;

    return (
        <div>
            <Col>
      <Card>
        <Card.Body>
          <Card.Title>ID is: {id}</Card.Title>
          <Card.Title>Title: {title}</Card.Title>
          <Card.Title>
              <Link to ={`/home/${id}`}>
                <button>Status</button>
              </Link>
              
              </Card.Title>
           
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Tasks;
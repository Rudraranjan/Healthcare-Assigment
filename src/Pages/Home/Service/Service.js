import React from 'react';
import { Button, Card, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {

    const{id, name, img, description} = service;
    return (
        <div>
 
                        <Col data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="700">
                        <Card className='p-2 rounded-3 shadow'>
                            <div className='mt-2'>
                            <Card.Img variant="top" className='w-50 rounded-3 border border-2 border-primary shadow' src={img} />
                            </div>   
                            <Card.Body>
                            <div className='bg-color p-2 rounded-3 shadow my-3'>
                            <Card.Title className='fw-bold'><h2>{name}</h2></Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            </div>
                            <Link to={`/servics/${id}`}><Button className='button-color border-none fw-bold w-100'>View Doctor</Button></Link>
                            </Card.Body>
                        </Card>
                        </Col>   
 
        </div>
    );
};

export default Service;
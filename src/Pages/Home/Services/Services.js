import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch ('./data.json')
        .then(res => res.json())
        .then (data => setServices(data))
    },[])
    return (
        <div className='container mt-5' id='services'>
            <h2 className='mb-4'>Our Services</h2>
            <Row xs={1} md={3} className="g-4">
            {
                services.map(service => <Service
                key ={service.id}
                service={service}
                ></Service>)
            }
            </Row> 
            
        </div>
    );
};

export default Services;
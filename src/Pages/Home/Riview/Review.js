import React from 'react';
import { Carousel } from 'react-bootstrap';

const Review = ({review}) => {

    const {name, description, rating,img} = review;


    return (
        <div>
            
                    <div>
                    <img
                    className="d-block w-25"
                    src={img}
                    alt="First slide"
                    />
                    <Carousel.Caption className='w-25'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>{rating}</p>
                    </Carousel.Caption>
                    </div>
                   
               
        </div>
    );
};

export default Review;
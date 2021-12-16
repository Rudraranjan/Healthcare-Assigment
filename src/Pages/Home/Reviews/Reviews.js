import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';


import Review from '../Riview/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch ('./review.json')
        .then(res => res.json())
        .then (data => setReviews(data))
    },[])

    return (
        <div className=''>
               <Carousel>
                    <Carousel.Item>
                {
                    reviews.map(review => <Review
                    key={review.id}
                    review={review}
                    ></Review>)
                }
          </Carousel.Item>
             </Carousel>
        </div>
    );
};

export default Reviews;
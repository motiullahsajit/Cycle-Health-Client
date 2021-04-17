import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios('https://cycle-health-server.herokuapp.com/reviews')
            return data;
        }
        fetchData().then(data => setReviews(data.data))
    }, [])

    return (
        <div className='my-5 container'>
            <h1 className='text-brand text-center'>What Clients Say!!!</h1>
            <div className="row d-flex justify-content-around">
                {
                    reviews.map(review => <Review key={review.name} reviewItem={review} />)
                }
            </div>
        </div>
    );
};

export default Reviews;
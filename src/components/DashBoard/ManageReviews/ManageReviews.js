import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Review from '../../Home/Main/Review/Review';
import ReviewList from '../ReviewList/ReviewList';

const ManageReviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios('https://cycle-health-server.herokuapp.com/reviews')
            return data;
        }
        fetchData().then(data => setReviews(data.data))
    }, [])

    return (
        <>
            <div className='col-md-7 m-2 text-seconday border border-secondary d-flex justify-content-around align-items-center bg-white rounded'>
                <div className='col-3 mx-1 fs-3'> <h5>Person Name</h5></div>
                <div className='col-1 mx-1 fs-3'> <h5>Rating</h5></div>
                <div className='col-6 mx-1 fs-3'> <h5>Review</h5></div>
                <div className='col-2 mx-1 fs-3'> <h5>Remove</h5></div>
            </div >
            {
                reviews.map(review => <ReviewList key={review._id} reviewItem={review} />)
            }
        </>
    );
};

export default ManageReviews;
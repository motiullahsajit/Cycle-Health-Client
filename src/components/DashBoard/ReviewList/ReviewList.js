import React from 'react';

const ReviewList = ({ reviewItem }) => {
    const { name, rating, review ,_id} = reviewItem;

    const removeReview = () => {
        fetch(`https://cycle-health-server.herokuapp.com/removeReview/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Review deleted successfully')
                }
            })
    };

    return (
        <div className='col-md-7 m-2 text-seconday border border-secondary d-flex justify-content-around align-items-center bg-white rounded'>
            <div className='col-3 mx-1 fs-3'> <h5>{name}</h5></div>
            <div className='col-1 mx-1 fs-3'> <h5>{rating}</h5></div>
            <div className='col-6 mx-1 fs-3'> <h5>{review}</h5></div>
            <div className='col-2 mx-1 fs-3'><button onClick={removeReview} className="btn btn-danger">Remove</button></div>
        </div >
    );
};

export default ReviewList;
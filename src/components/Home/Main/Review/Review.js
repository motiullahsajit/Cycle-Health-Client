import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = ({ reviewItem }) => {
    const { name, review, imageURL, companyName, rating } = reviewItem;
    return (
        <div className='tranfrom-hover col-lg-4 col-md-6 col-sm-12 my-2'>
                <div className="card border border-secondary">
                <div className="row p-2">
                    <div className="col-md-3">
                        <img src={imageURL} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-8">
                        <h6>{name}</h6>
                        <h6>{companyName}</h6>
                    </div>
                </div>
                <div className='p-2'>
                    <h6>{rating} <FontAwesomeIcon icon={faStar} /></h6>
                    <p>{review}</p>
                </div>
                </div>
        </div>
    );
};

export default Review;
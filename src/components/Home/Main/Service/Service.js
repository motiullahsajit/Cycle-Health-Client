import React from 'react';
import { useHistory } from 'react-router';

const Service = ({ service }) => {
    const { imageURL, name, description, price ,_id} = service;
    const history = useHistory()
    const handleBooking = () => {
        history.push(`dashboard/booking/${_id}`);
    }
    return (
        <div className="col-md-4 my-2">
            <div className="card h-100">
                <img src={imageURL} style={{height:'13.5rem'}} className="card-img-top p-3 w-50 mx-auto img-fuild" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <div className="d-flex justify-content-between">
                        <p className="card-text">Price: {price} $</p>
                        <button onClick={handleBooking} className="btn btn-brand-filled">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
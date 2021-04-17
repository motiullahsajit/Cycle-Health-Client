import React from 'react';

const BookedItem = ({ booked }) => {
    const { name, description, imageURL } = booked.service;
    const status = booked.status;
    return (
        <div className='col-md-3 my-2'>
            <div className="card h-100 border border-secondary">
                <div className="d-flex justify-content-between align-items-center text-center p-2">
                    <div className="col-md-3">
                        <img src={imageURL} className='img-fluid' alt="" />
                    </div>
                    {
                        status === 'Pending' && <div className="col-md-4 py-1 rounded text-light bg-danger">
                            <h5>{status}</h5>
                        </div>
                    }
                    {
                        status === 'On going' && <div className="col-md-4 py-1 rounded text-light bg-warning">
                            <h5>{status}</h5>
                        </div>
                    }
                    {
                        status === 'Done' && <div className="col-md-4 py-1 rounded text-light bg-success">
                            <h5>{status}</h5>
                        </div>
                    }
                </div>
                <div className='p-2'>
                    <h5>{name}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookedItem;
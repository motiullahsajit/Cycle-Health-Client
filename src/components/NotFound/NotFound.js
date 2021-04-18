import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/404error.jpg'

const NotFound = () => {
    return (
            <div className='container d-flex justify-content-center'>
                <div className="mt-5">
                    <img className='mt-5' src={error} alt="" />
                    <br/>
                    <Link to="/" className='btn btn-brand-filled'>Back Home</Link>
                </div>
            </div>
    );
};

export default NotFound;
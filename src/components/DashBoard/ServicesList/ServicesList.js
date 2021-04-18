import React from 'react';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

const ServicesList = ({ service }) => {
    const { name, price, _id, } = service;
    const removeService = id => {
        fetch(`https://cycle-health-server.herokuapp.com/removeService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Your product deleted successfully')
                }
            })
    };
    return (
        <div className='col-md-6 m-2 text-dark row align-items-center bg-white rounded'>
            <div className='col-6'> <h5>{name}</h5></div>
            <div className='col-3'> <h5>{price} $</h5></div>
            <div className="col-3 row">
                <div className='col-6'> <Link to={`/dashboard/updateService/${_id}`}><span className="fas fa-trash px-4 text-success"><FontAwesomeIcon icon={faPen} /></span></Link></div>
                <div className='col-6'> <span className="fas fa-trash text-danger" onClick={() => removeService(_id)}><FontAwesomeIcon icon={faTrash} />
                </span></div>
            </div>
        </div >
    );
};

export default ServicesList;
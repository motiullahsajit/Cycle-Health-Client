import React from 'react';
import './CustomerCare.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

const CustomerCare = () => {
    return (
        <section className='customer-care mb-5'>
            <div className="container">
                <div className="d-flex align-items-center customer-inner text-light">
                    <div className="col-md-6">
                        <h3>CUSTOMER CARE 24 HOURS</h3>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                    </div>
                    <div className="col-md-6 d-flex justify-content-between">
                        <div className="col-md-2">
                            <FontAwesomeIcon className='contact-icon' icon={faPhoneSquare} />
                        </div>
                        <div className="col">
                            <h6>Contact Phone</h6>
                            <h3>+6236 114 045</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerCare;
import React from 'react';
import './WorkSample.css'
import sample1 from '../../../../images/sample1.jpg'
import sample2 from '../../../../images/sample2.jpg'
import sample3 from '../../../../images/sample3.jpg'
import sample4 from '../../../../images/sample4.jpg'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WorkSample = () => {
    return (
        <section className='container my-5'>
            <div className="row">
                <div className="col-md-7">
                    <div className="row my-3">
                        <div className="col-md-8 my-1">
                            <img className='work-img' src={sample1} alt="" />
                        </div>
                        <div className="col-md-4 my-1">
                            <img className='work-img' src={sample2} alt="" />
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-5 my-1">
                            <img className='work-img' src={sample3} alt="" />
                        </div>
                        <div className="col-md-7 my-1">
                            <img className='work-img' src={sample4} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-5 my-3 px-3 py-3">
                    <h2 className='text-brand'>HOW WE WORK</h2>
                    <h2 className='text-dark'>BOOK APPOINTMENT,<br />
                    AND WE WILL SOLVE ALL YOUR <br />
                    PROBLEMS</h2>
                    <p className='work-text' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="list-items row">
                        <div className="col-md-6">
                            <li><FontAwesomeIcon className='list-icon' icon={faCheckCircle} />FRONT END</li>
                            <li><FontAwesomeIcon className='list-icon' icon={faCheckCircle} />BEARINGS</li>
                            <li><FontAwesomeIcon className='list-icon' icon={faCheckCircle} />FITTING</li>
                        </div>
                        <div className="col-md-6">
                            <li><FontAwesomeIcon className='list-icon' icon={faCheckCircle} />WHEELS</li>
                            <li><FontAwesomeIcon className='list-icon' icon={faCheckCircle} />BRAKES</li>
                            <li><FontAwesomeIcon className='list-icon' icon={faCheckCircle} />DRIVETRAIN</li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSample;
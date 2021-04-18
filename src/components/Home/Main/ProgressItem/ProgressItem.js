import React from 'react';
import './ProgressItem.css'

const ProgressItem = ({ progressItem }) => {
    const { subject, percentage, description } = progressItem;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 tranfrom-hover">
            <div className="card">
                <div className="progress mx-auto"> <span className="progress-left"> <span className="progress-bar"></span> </span> <span className="progress-right"> <span className="progress-bar"></span> </span>
                    <div className="progress-value">{percentage}%</div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{subject}</h5>
                    <p className="card-text text-secondary">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProgressItem;
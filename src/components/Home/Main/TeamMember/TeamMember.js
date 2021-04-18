import React from 'react';

const TeamMember = ({ member }) => {
    const { name, postion, email, imageURL } = member;
    return (
        <div className="tranfrom-hover col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100">
                <img src={imageURL} className="card-img-top w-100 p-3 mx-auto img-fuild" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{postion}</p>
                    <p className="card-text">{email}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;
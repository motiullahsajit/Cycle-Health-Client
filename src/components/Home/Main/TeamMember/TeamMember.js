import React from 'react';

const TeamMember = ({ member }) => {
    const { name, postion, email, image } = member;
    return (
        <div className="col-md-4">
            <div className="card h-100">
                <img src={image} className="card-img-top p-3 mx-auto img-fuild" alt="..." />
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
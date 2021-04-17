import React from 'react';

const AdminsList = ({ admin }) => {
    const { name, email, _id } = admin;
    const handleRemove = () => {
        fetch(`https://cycle-health-server.herokuapp.com/removeAdmin/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Admin deleted successfully')
                }
            })
    };

    return (
        <div className='row'>
            <div className="col my-2">{name}</div>
            <div className="col my-2">{email}</div>
            <div className="col my-2"><button onClick={handleRemove} className="btn btn-danger">Remove</button></div>
        </div>
    );
};

export default AdminsList;
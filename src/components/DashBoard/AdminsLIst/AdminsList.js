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
        <div className='row bg-white my-2'>
            <div className="col-4"><h5>{name}</h5></div>
            <div className="col-6"><h5>{email}</h5></div>
            <div className="col-2"><button onClick={handleRemove} className="btn btn-danger">Remove</button></div>
        </div>
    );
};

export default AdminsList;
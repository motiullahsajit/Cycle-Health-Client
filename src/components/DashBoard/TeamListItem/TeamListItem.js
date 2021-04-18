import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const TeamListItem = ({ member }) => {
    const { name, email, _id, postion } = member;
    const history = useHistory()
    const handleRemove = () => {
        fetch(`https://cycle-health-server.herokuapp.com/removeMember/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Member deleted successfully')
                }
            })
    }

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://cycle-health-server.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [email])


    const makeAdmin = () => {
        const newAdminData = {
            name: name,
            email: email
        }
        fetch('https://cycle-health-server.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAdminData)
        })
        history.push(`/dashboard/admins`);
    }

    return (
        <div className='row bg-white text-dark my-2 align-items-center'>
            <div className="col-3 my-2"><h5>{name}</h5></div>
            <div className="col-3 my-2"><h5>{email}</h5></div>
            <div className="col-2 my-2"><h5>{postion}</h5></div>
            {
                isAdmin ? <div className="col-2 mt-3 mb-2"><h5 className='badge py-2 bg-success text-white'>Already Admin</h5></div> : <div className="col-2 my-2"><button onClick={makeAdmin} className="btn btn-warning">Make Admin</button></div>
            }
            <div className="col-2 my-2"><button onClick={handleRemove} className="btn btn-danger">Remove</button></div>
        </div>
    );
};

export default TeamListItem;
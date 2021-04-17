import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const TeamListItem = ({ member }) => {
    const { name, email, _id } = member;
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
        <div className='row'>
            <div className="col my-2">{name}</div>
            <div className="col my-2">{email}</div>
            {
                isAdmin ? <div className="col my-2"><span className='badge bg-success'>Already Admin</span></div> : <div className="col my-2"><button onClick={makeAdmin} className="btn btn-success">Make Admin</button></div>
            }
            <div className="col my-2"><button onClick={handleRemove} className="btn btn-danger">Remove</button></div>
                </div>
    );
};

export default TeamListItem;
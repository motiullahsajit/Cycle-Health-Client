import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminsList from '../AdminsLIst/AdminsList';

const Admins = () => {
    document.title = 'Admins';
    const [admins, setAdmins] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios('https://cycle-health-server.herokuapp.com/admins');
            return data;
        }
        fetchData().then(data => setAdmins(data?.data))
    }, [])


    return (
        <div className='col-md-6 mt-5'>
            <div className="row bg-white my-3 py-3">
                <div className="col-4"><h5>Name</h5></div>
                <div className="col-6"><h5>Email</h5></div>
                <div className="col-2"><h5>Action</h5></div>
            </div>
            {
                admins.map(admin => <AdminsList key={admin._id} admin={admin} />)
            }
        </div>
    );
};

export default Admins;
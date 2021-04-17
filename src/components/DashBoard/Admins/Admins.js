import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminsList from '../AdminsLIst/AdminsList';

const Admins = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios('https://cycle-health-server.herokuapp.com/admins');
            return data;
        }
        fetchData().then(data => setAdmins(data?.data))
    }, [])


    return (
        <div className='col-md-6 text-center mt-5'>
            <div className="row my-3">
                <div className="col">Name</div>
                <div className="col">Email</div>
                <div className="col">Action</div>
            </div>
            {
                admins.map(admin => <AdminsList admin={admin} />)
            }
        </div>
    );
};

export default Admins;
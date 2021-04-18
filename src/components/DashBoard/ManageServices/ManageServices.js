import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServicesList from '../ServicesList/ServicesList';

const ManageServices = () => {
    document.title = 'Manage Services';
    const [servicesList, setServicesList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios('https://cycle-health-server.herokuapp.com/services');
            return data;
        }
        fetchData().then(data => setServicesList(data?.data))
    }, [])
    return (
        <>
            <div className='col-md-6 m-2 text-dark border py-3 row align-items-center bg-white rounded'>
                < div className='col-6'> <h5>Service Name</h5></div>
                < div className='col-3'> <h5>Price</h5></div>
                < div className='col-3'> <h5>Update or Delete</h5></div>
            </div >
            {
                servicesList.map(service => <ServicesList key={service._id} service={service} />)
            }
        </>
    );
};

export default ManageServices;
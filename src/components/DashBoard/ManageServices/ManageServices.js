import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServicesList from '../ServicesList/ServicesList';

const ManageServices = () => {
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
            <div className='col-md-6 m-2 text-seconday border border-secondary d-flex justify-content-around align-items-center bg-white rounded'>
                < div className='col-6 fs-3'> <h5>Service Name</h5></div>
                < div className='col-2 fs-3'> <h5>Price</h5></div>
                < div className='col-2 fs-3'> <h5>Action</h5></div>
            </div >
            {
                servicesList.map(service => <ServicesList key={service._id} service={service} />)
            }
        </>
    );
};

export default ManageServices;
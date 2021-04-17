import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios('https://cycle-health-server.herokuapp.com/services')
            return data;
        }
        fetchData().then(data => setServices(data.data))
    }
        , [])

    return (
        <section className='container-fuild py-5 bg-dark my-5'>
            <div className="container">
                <div className="row">
                    {
                        services?.map(service => <Service service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
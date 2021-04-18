import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OrdersList from '../OrdersList/OrdersList';


const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const data = await axios('https://cycle-health-server.herokuapp.com/bookings');
            setLoading(false)
            return data;
        }
        fetchData().then(data => setOrders(data?.data))
    }, [])

    return (
        <>
            <div className='m-2 text-dark d-flex justify-content-around align-items-center bg-white py-3 rounded'>
                < div className='col-2'> <h5> Name</h5></div>
                < div className='col-2'> <h5>Email</h5></div>
                < div className='col-2'> <h5>Service</h5></div>
                < div className='col-2'> <h5>Status</h5></div>
                < div className='col-2 text-center'> <h5>Action</h5></div>
            </div >
            {
                loading && <div className="row my-5">
                    <div className="spinner-border text-brand mx-auto" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>
            }
            {
                orders.map(order => <OrdersList key={order._id} order={order} />)
            }
        </>
    );
};

export default Orders;
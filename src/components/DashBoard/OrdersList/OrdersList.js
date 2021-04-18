import axios from 'axios';
import React, { useEffect, useState } from 'react';

const OrdersList = ({ order }) => {
    document.title = 'Order List';
    const { name, email, serviceName, status, _id } = order;
    const [updateItem, setUpdateItem] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios(`https://cycle-health-server.herokuapp.com/order/${_id}`);
            return data;
        }
        fetchData().then(data => setUpdateItem(data?.data))
    }, [_id])

    const handleStatus = status => {
        const UpdateData = {
            status: status
        }
        fetch(`https://cycle-health-server.herokuapp.com/updateStatus/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateData)
        })
    };

    return (
        <section className='m-2 text-dark d-flex justify-content-around align-items-center py-3 bg-white rounded'>
            <div className='col-2'> <h5>{name}</h5></div>
            <div className='col-2'> <h5> {email}</h5></div>
            <div className='col-2'> <h5>{serviceName}</h5></div>
            <div className='col-2'> <h5>{status}</h5></div>
            <div className="col-2 d-flex justify-content-between">
                {
                    updateItem?.status !== 'Done' && <div className='col'>
                        <button onClick={() => handleStatus(`Done`)} className="btn btn-success w-100">Done</button>
                    </div>
                }
                {
                    updateItem?.status !== 'Pending' && <div className='col'>
                        <button onClick={() => handleStatus(`Pending`)} className="btn btn-danger w-100">Pending</button>
                    </div>
                }
                {
                    updateItem?.status !== 'On going' && <div className='col'>
                        <button onClick={() => handleStatus(`On going`)} className="btn btn-warning text-light w-100">Ongoing</button>
                    </div>
                }
            </div >
        </section>
    );
};

export default OrdersList;
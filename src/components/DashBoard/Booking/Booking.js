import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from './ProcessPayment/ProcessPayment';

const Booking = () => {
    const { id } = useParams();
    const [loggedInUser] = useContext(UserContext);
    const [bookingItem, setBookingItem] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {

        const fetchData = async () => {
            const data = await axios(`https://cycle-health-server.herokuapp.com/service/${id}`);
            return data;
        }
        fetchData().then(data => setBookingItem(data?.data))
    }, [id])

    const history = useHistory();
    const [bookingData, setBookingData] = useState(null);
    const onSubmit = data => {
        data.status = 'Pending'
        data.service = bookingItem
        data.created = new Date();
        setBookingData(data)
    };

    const handlePaymentSuccess = paymentId => {
        bookingData.paymentId = paymentId;
        fetch('https://cycle-health-server.herokuapp.com/addBooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Booking added successfully')
                }
            })
        history.push('/dashboard/bookingList')
    }


    return (
        <>
            <div className='col-md-4'>
                <h2 className='text-brand'>Booking Details</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='w-100 py-2 my-2' name='name' placeholder='Your name' defaultValue={loggedInUser.displayName} {...register("name", { required: true })} />
                    <input className='w-100 py-2 my-2' name='email' placeholder='Your email' defaultValue={loggedInUser.email} {...register("email", { required: true })} />
                    <input className='w-100 py-2 my-2' name='serviceName' placeholder='service' defaultValue={bookingItem.name} {...register("serviceName", { required: true })} />
                    <input className='w-100 py-2 my-2' name='address' placeholder='Your address'  {...register("address", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    {
                        bookingData ? <><button className="btn btn-brand-filled" onClick={() => setBookingData(null)}>Change Info</button></> : <div className='my-3'> <p className='text-brand'>Your Service Charge is {bookingItem.price}$</p> <input className='btn btn-brand-filled' type="submit" value='Confirm' /></div>
                    }
                </form>
            </div>
            {
                bookingData &&
                <div className="col-md-4 my-4">
                    <h3 className='text-brand'>Please pay here</h3>
                    <ProcessPayment handlePaymentSuccess={handlePaymentSuccess} />
                </div>

            }
        </>
    );
};

export default Booking;
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookedItem from '../BookedItem/BookedItem';

const BookingList = () => {
    document.title = 'Booking List';
    const [loggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const data = await axios(`https://cycle-health-server.herokuapp.com/userBookings?email=${loggedInUser.email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${sessionStorage.getItem('token')}`,
                }
            });
            setLoading(false);
            return data;
        }
        fetchData().then(data => setBookings(data?.data))
    }, [loggedInUser.email])

    return (
        <>
            {
                loading && <div className="row my-5">
                    <div className="spinner-border text-brand mx-auto" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>
            }
            <section className='row mt-5'>

                {
                    bookings.map(booked => <BookedItem key={booked._id} booked={booked} />)
                }
            </section>
        </>
    );
};

export default BookingList;
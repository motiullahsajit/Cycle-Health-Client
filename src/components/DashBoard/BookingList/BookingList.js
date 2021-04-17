import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookedItem from '../BookedItem/BookedItem';


const BookingList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios(`https://cycle-health-server.herokuapp.com/userBookings?email=${loggedInUser.email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${sessionStorage.getItem('token')}`,
                }
            })
            return data;
        }
        fetchData().then(data => setBookings(data.data))
    }, [loggedInUser.email])

    return (
        <section className='row mt-5'>
            {
                bookings.map(booked => <BookedItem booked={booked} />)
            }
        </section>
    );
};

export default BookingList;
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardForm = ({ handlePaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentSuccess(`Your Payment Was Successful`);
            setPaymentError(null)
            handlePaymentSuccess(paymentMethod.id);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement className='my-3' />
                <button className='btn btn-brand-filled px-5' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            <p className='text-danger'>{paymentError}</p>
            <p className='text-success'>{paymentSuccess}</p>
        </>
    );
};

export default SimpleCardForm;
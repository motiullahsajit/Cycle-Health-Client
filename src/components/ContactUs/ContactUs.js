import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import './ContactUs.css'
const ContactUs = () => {
    return (
        <>
            <section className="contact">
                <Navbar />
                <div className="container mt-5">
                    <div className="section-header text-center text-white mb-5">
                        <h1 className="text-brand">Stay Connected !!</h1>
                    </div>
                    <div className="col-md-9 mx-auto">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email Address *" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject *" />
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                            </div>
                            <div className="form-group text-center">
                                <button type="button" className="btn btn-brand-filled w-50"> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
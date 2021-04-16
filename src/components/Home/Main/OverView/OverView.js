import React from 'react';
import overViewIcon from '../../../../images/overViewIcon.png'
const OverView = () => {
    return (
        <section className="container my-5">
            <div className='row'>
                <div className="col-md-6">
                    <div className="col my-2"><img src={overViewIcon} className='w-25' alt="" /></div>
                    <div className="col my-2 text-brand border-bottom border-secondary">
                        <h2>PROFESSIONAL MOBILE BICYCLE CARE, RIGHT ON YOUR <br/> DOORSTEP</h2>
                    </div>
                    <div className="col my-2 border-bottom border-secondary">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col my-3">
                        <button className="btn btn-brand">READ MORE</button>
                    </div>
                </div>
                <div className="col-md-6 bg-dark p-4">
                    <h2 className='text-light my-2'>EVERYTHING YOU NEED FOR MILES OF ENJOYABLE CYCLING</h2>
                    <p className='text-secondary my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="d-flex justify-content-between my-3">
                        <div className="col">
                            <h1 className='text-light'>500+</h1>
                            <h4 className='text-secondary'>CLIENT</h4>
                        </div>
                        <div className="col">
                            <h1 className='text-light'>30+</h1>
                            <h4 className='text-secondary'>MECHANIC</h4>
                        </div>
                    </div>
                    <div className="col my-3">
                        <button className="btn btn-brand-filled">READ MORE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OverView;
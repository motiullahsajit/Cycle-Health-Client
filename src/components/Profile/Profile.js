import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Navbar from '../common/Navbar/Navbar';

const Profile = ({ signOut }) => {
    const [loggedInUser] = useContext(UserContext)
    return (
        <>
            <Navbar />
            <div className='container mt-5'>
                <h2 className='text-brand text-center my-5'>Your Profile</h2>
                <div className="row d-flex align-items-center">
                    <div className="col-md-2">
                        <img className='rounded' src={loggedInUser.photoURL} alt="" />
                    </div>
                    <div className="col-md-8">
                        <h4>Name: {loggedInUser.displayName}</h4>
                        <h4>Email: {loggedInUser.email}</h4>
                    </div>
                    <div className="col-md-2"> <button className='btn btn-brand text-white w-100 rounded-0' onClick={signOut}>Sign Out</button></div>
                </div>
            </div>
        </>
    );
};

export default Profile;
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import Profile from '../Profile/Profile';
import { createUserWithEmailAndPassword, googleSingIn, initializeLoginFramework, signInWithEmailAndPassword, handleSignOut, facebookSingIn, } from './LoginManager';
import './Login.css'
import Navbar from '../common/Navbar/Navbar';

const Login = () => {
    document.title = 'Login';
    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [option, setOption] = useState('signUp');
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({});
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard" } };
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfrimPassword] = useState('')

    const onChangeHandler = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length >= 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber
            setPassword(e.target.value)
        }
        if (e.target.name === 'confirmPassword') {
            const isPasswordValid = e.target.value.length >= 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber
            setConfrimPassword(e.target.value)
        }
        if (isFieldValid) {
            const key = e.target.name
            setFormData({ ...formData, [key]: e.target.value })
            setError('')
        }
        else {
            setError('Please check your Email format or Password (password should have more then six character and a number in it)')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (option === 'signUp') {
            if (password === confirmPassword) {
                createUserWithEmailAndPassword(formData.name, formData.email, formData.password).then(res => {
                    handleResponse(res, true)
                }).catch(error => { setError(error) })
                setError('')
            }
            else {
                setError('Your passwords didnot matched')
            }
        }
        if (option === 'login') {
            signInWithEmailAndPassword(formData.email, formData.password).then(res => {
                handleResponse(res, true)
            }).catch(error => { setError(error) })
        }
    }

    const signOut = (e) => {
        handleSignOut().then(res => {
            handleResponse(res, false)
        }).catch(error => { setError(error) })
    }

    const handleGoogleSingIn = () => {
        googleSingIn().then(res => {
            handleResponse(res, true)
        }).catch(error => { setError(error) })
    }
    const handleFacebookSingIn = () => {
        facebookSingIn().then(res => {
            handleResponse(res, true)
        }).catch(error => { setError(error) })
    }

    const handleResponse = (res, redirect) => {
        setLoggedInUser(res)
        redirect && history.replace(from);
    }

    return (
        <main className='login-bg'>  {
            loggedInUser.email ?
                <Profile signOut={signOut} />
                :
                <>
                    <Navbar />
                    <section className="col-md-3 container">
                        <form onSubmit={handleSubmit} className="form mb-2 mt-5">
                            {
                                option === 'signUp' ? <h1 className='text-brand text-center my-3'>Create an account</h1> : <h1 className='text-brand text-center my-3'>Login</h1>
                            }
                            {
                                option === 'signUp' && <div className="mb-3">
                                    <input name="name" type="text" onChange={(e) => onChangeHandler(e)} placeholder="Name" className="form-control" required />
                                </div>
                            }
                            <div className="mb-3">
                                <input name="email" onChange={(e) => onChangeHandler(e)} type="email" placeholder="Email" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <input name="password" onChange={(e) => onChangeHandler(e)} type="password" placeholder="Password" className="form-control" required />
                            </div>
                            {
                                option === 'signUp' && <div className="mb-3">
                                    <input name="confirmPassword" onChange={(e) => onChangeHandler(e)} type="password" placeholder="Confirm Password" className="form-control" required />
                                </div>
                            }
                            <p className='text-danger'>{error}</p>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label text-white">Remember me</label>
                            </div>
                            <div className="mb-2 d-grid">
                                {
                                    option === 'signUp' ?
                                        <button type="submit" className="btn btn-brand-filled w-100">Create an account</button>
                                        :
                                        <button type="submit" className="btn btn-brand-filled w-100">Login</button>
                                }
                            </div>
                            {
                                option === 'signUp' ? <> <p className='text-white'>Already have an account? <span className='text-brand' onClick={() => setOption('login')}>Login</span></p></> :
                                    <> <p className='text-white'>Don't have an account? <span className='text-brand' onClick={() => setOption('signUp')}>Create an account</span></p></>
                            }
                        </form>
                        {
                            option === 'signUp' && <>  <h3 className='text-brand text-center'>Or</h3>
                                <button type="submit" onClick={handleGoogleSingIn} className="btn btn-brand-filled my-1 w-100">With Google</button>
                                <button type="submit" onClick={handleFacebookSingIn} className="btn btn-brand-filled my-1 w-100">With Facebook</button>
                            </>
                        }
                    </section>
                </>
        } </main>
    );
};

export default Login;
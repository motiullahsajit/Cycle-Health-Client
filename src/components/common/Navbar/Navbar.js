import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png'
import './Navbar.css'

const Navbar = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="" to='/'><img className='w-25' src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto mr-5 d-flex align-items-center">
                        <li className="nav-item mx-1">
                            <Link className="nav-link mx-1" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-1" to='/contactUs'>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-1" to='/dashboard'>Dashboard</Link>
                        </li>
                        {
                            loggedInUser.email && loggedInUser.displayName ? <Link to='/login' className='nav-link mx-1' >
                                {loggedInUser.photoURL ? <img src={loggedInUser.photoURL} style={{ width: "50%", borderRadius: "50%" }} alt="..." /> : <li>{loggedInUser.displayName}</li>}
                            </Link> : <li className="nav-item"><Link className="nav-link mx-1" to='/login'>Login</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
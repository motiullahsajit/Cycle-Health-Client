import React, { useContext, useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserPlus, faList, faUsersCog, faTasks, faUsers, faCommentAlt, faShoppingCart, faShoppingBag, faComments } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://cycle-health-server.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [loggedInUser.email])

    let { url } = useRouteMatch();
    return (
        <aside className="sidebar d-flex flex-column justify-content-between col py-5 px-4">
            <ul className="list-unstyled">
                <li>
                    <Link to='/' className="text-white">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Booking</span>
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/bookingList`} className="text-white">
                        <FontAwesomeIcon icon={faShoppingBag} /> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/addReview`} className="text-white">
                        <FontAwesomeIcon icon={faComments} /> <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/manageReviews`} className="text-white">
                        <FontAwesomeIcon icon={faCommentAlt} /> <span>Manage Review</span>
                    </Link>
                </li>
                {
                    isAdmin && <>
                        <li>
                            <Link to={`${url}/orderList`} className="text-white">
                                <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${url}/addService`} className="text-white">
                                <FontAwesomeIcon icon={faPlusSquare} /> <span>Add service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${url}/manageServices`} className="text-white" >
                                <FontAwesomeIcon icon={faTasks} /> <span>Mange Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${url}/makeAdmin`} className="text-white" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${url}/admins`} className="text-white" >
                                <FontAwesomeIcon icon={faUsersCog} /> <span>Admins</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${url}/team`} className="text-white" >
                                <FontAwesomeIcon icon={faUsers} /> <span>Team</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${url}/addMember`} className="text-white" >
                                <FontAwesomeIcon icon={faUsers} /> <span>Add Team Member</span>
                            </Link>
                        </li>
                    </>
                }
            </ul>
            <div>
                <span onClick={() => setLoggedInUser({})} className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</span>
            </div>
        </aside>
    );
};

export default Sidebar;
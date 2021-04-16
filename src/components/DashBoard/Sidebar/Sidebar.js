import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUserPlus, faList, faUsersCog, faTasks, faUsers, faCommentAlt, faShoppingCart, faShoppingBag, faComments } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {
    const [setLoggedInUser] = useContext(UserContext);
    let { url } = useRouteMatch();
    return (
        <aside className="sidebar d-flex flex-column justify-content-between col py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/orderList" className="text-white">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orderList" className="text-white">
                        <FontAwesomeIcon icon={faShoppingBag} /> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/addReview`}  className="text-white">
                        <FontAwesomeIcon icon={faComments} /> <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orderList" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/addService`} className="text-white">
                        <FontAwesomeIcon icon={faPlusSquare} /> <span>Add service</span>
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/addDoctor`} className="text-white" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/settings`} className="text-white" >
                        <FontAwesomeIcon icon={faUsersCog} /> <span>Admins</span>
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/settings`} className="text-white" >
                        <FontAwesomeIcon icon={faTasks} /> <span>Mange Services</span>
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/settings`} className="text-white" >
                        <FontAwesomeIcon icon={faUsers} /> <span>Team</span>
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/settings`} className="text-white" >
                        <FontAwesomeIcon icon={faCommentAlt} /> <span>Reviews</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" onClick={() => setLoggedInUser({})} className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </aside>
    );
};

export default Sidebar;
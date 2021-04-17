import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Navbar from '../common/Navbar/Navbar';
import AddMember from './AddMember/AddMember';
import AddReview from './AddReview/AddReview';
import AddService from './AddService/AddService';
import Admins from './Admins/Admins';
import Booking from './Booking/Booking';
import BookingList from './BookingList/BookingList';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageReviews from './ManageReviews/ManageReviews';
import ManageServices from './ManageServices/ManageServices';
import Orders from './Orders/Orders';
import Sidebar from './Sidebar/Sidebar';
import TeamList from './TeamList/TeamList';
import UpdateService from './UpdateService/UpdateService';

const DashBoard = () => {
    let { path } = useRouteMatch();
    return (
        <main>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <Navbar />
                    <Switch>
                        <Route exact path={path}>
                            <BookingList />
                        </Route>
                        <Route path={`${path}/booking/:id`}>
                            <Booking />
                        </Route>
                        <Route path={`${path}/addService`}>
                            <AddService />
                        </Route>
                        <Route path={`${path}/manageReviews`}>
                            <ManageReviews />
                        </Route>
                        <Route path={`${path}/updateService/:id`}>
                            <UpdateService />
                        </Route>
                        <Route path={`${path}/manageServices`}>
                            <ManageServices />
                        </Route>
                        <Route path={`${path}/addReview`}>
                            <AddReview />
                        </Route>
                        <Route path={`${path}/bookingList`}>
                            <BookingList />
                        </Route>
                        <Route path={`${path}/orderList`}>
                            <Orders />
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin />
                        </Route>
                        <Route path={`${path}/admins`}>
                            <Admins />
                        </Route>
                        <Route path={`${path}/team`}>
                            <TeamList />
                        </Route>
                        <Route path={`${path}/addMember`}>
                            <AddMember />
                        </Route>
                    </Switch>
                </div>
            </div>
        </main>
    );
};

export default DashBoard;
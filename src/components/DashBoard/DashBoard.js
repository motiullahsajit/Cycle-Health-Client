import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Navbar from '../common/Navbar/Navbar';
import AddReview from './AddReview/AddReview';
import AddService from './AddService/AddService';
import Sidebar from './Sidebar/Sidebar';

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
                            {/* <AppointmentDash selectedDate={selectedDate} /> */}
                        </Route>
                        <Route path={`${path}/addService`}>
                            <AddService/>
                        </Route>
                        <Route path={`${path}/addReview`}>
                         <AddReview/>
                        </Route>
                        <Route path={`${path}/settings`}>
                            {/* <Settings /> */}
                        </Route>
                    </Switch>
                </div>
            </div>
        </main>
    );
};

export default DashBoard;
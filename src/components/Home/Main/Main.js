import React from 'react';
import CustomerCare from './CustomerCare/CustomerCare';
import OverView from './OverView/OverView';
import Progress from './Progress/Progress';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import Team from './Team/Team';
import WorkSample from './WorkSample/WorkSample';

const Main = () => {
    return (
        <main className='bg-main py-5'>
            <OverView />
            <Services />
            <WorkSample />
            <CustomerCare />
            <Reviews/>
            <Progress/>
            <Team/>
        </main>
    );
};

export default Main;
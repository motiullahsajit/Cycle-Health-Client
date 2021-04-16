import React from 'react';
import ProgressItem from '../ProgressItem/ProgressItem';

const progressItems = [
    {
        subject: 'SERVICE',
        percentage: '85',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        subject: 'VALUE',
        percentage: '90',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        subject: 'INTEGRITY',
        percentage: '95',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

const Progress = () => {
    return (
        <section className='container text-center'>
            <h1 className='text-dark'>HOW WE PERSUE PERFECTION</h1>
            <p className='text-secondary my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="row">
                {
                    progressItems.map(progressItem => <ProgressItem progressItem={progressItem} />)
                }
            </div>
        </section>
    );
};

export default Progress;
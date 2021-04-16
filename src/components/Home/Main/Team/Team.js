import React from 'react';
import member1 from '../../../../images/member1.jpg'
import member2 from '../../../../images/member2.jpg'
import member3 from '../../../../images/member3.jpg'
import TeamMember from '../TeamMember/TeamMember';

const teamMembers = [
    {
        name: 'Thomas J. White',
        postion: 'Operations Manager',
        email: 'abe@gmail.com',
        image: member1
    },
    {
        name: 'Thomas J. White',
        postion: 'Operations Manager',
        email: 'abe@gmail.com',
        image: member2
    },
    {
        name: 'Thomas J. White',
        postion: 'Operations Manager',
        email: 'abe@gmail.com',
        image: member3
    }
]

const Team = () => {
    return (
        <section className='container text-center my-5'>
            <h1 className='text-brand my-3'>MEET THE TEAM</h1>
            <h4>We're passionate about our work</h4>
            <div className="row">
                {
                    teamMembers.map(member => <TeamMember member={member} />)
                }
            </div>
        </section>
    );
};

export default Team;
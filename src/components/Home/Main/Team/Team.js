import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TeamMember from '../TeamMember/TeamMember';

const Team = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios('https://cycle-health-server.herokuapp.com/team')
            return data;
        }
        fetchData().then(data => setMembers(data?.data))
    }, [])

    return (
        <section className='container text-center mt-5'>
            <h1 className='text-brand my-3'>MEET THE TEAM</h1>
            <h4 className='mb-5'>We're passionate about our work</h4>
            <div className="row">
                {
                    members.map(member => <TeamMember key={member._id} member={member} />)
                }
            </div>
        </section>
    );
};

export default Team;
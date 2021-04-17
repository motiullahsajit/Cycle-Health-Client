import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TeamListItem from '../TeamListItem/TeamListItem';

const TeamList = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios('https://cycle-health-server.herokuapp.com/team');
            return data;
        }
        fetchData().then(data => setMembers(data?.data))
    }, [])


    return (
        <div className='col-md-6 text-center mt-5'>
            <div className="row my-3">
                <div className="col">Name</div>
                <div className="col">Email</div>
                <div className="col">Action</div>
            </div>
            {
                members.map(member => <TeamListItem member={member} />)
            }
        </div>
    );
};

export default TeamList;
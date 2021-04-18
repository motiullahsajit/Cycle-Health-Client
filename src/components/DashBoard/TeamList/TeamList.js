import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TeamListItem from '../TeamListItem/TeamListItem';

const TeamList = () => {
    document.title = 'Team';
    const [members, setMembers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios('https://cycle-health-server.herokuapp.com/team');
            return data;
        }
        fetchData().then(data => setMembers(data?.data))
    }, [])


    return (
        <div className='col-md-9 text-center mt-5'>
            <div className="row bg-white py-3 my-3">
                <div className="col-3"><h5>Name</h5></div>
                <div className="col-3"><h5>Email</h5></div>
                <div className="col-2"><h5>Post</h5></div>
                <div className="col-4"><h5>Action</h5></div>
            </div>
            {
                members.map(member => <TeamListItem key={member._id} member={member} />)
            }
        </div>
    );
};

export default TeamList;
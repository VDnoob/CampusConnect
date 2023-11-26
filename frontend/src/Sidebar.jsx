import React, { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';
import donut from "./donuts.png";
import header_img from "./header_pfp.png";
import './Sidebar.css';
import { Link } from "react-router-dom";

function Sidebar() {
    const [userData, setUserData] = useState({ firstName: '', email: '' });

    useEffect(() => {
        const token = localStorage.getItem("Token");
        const fetchData = async () => {
            try {
                const response = await fetch('https://campusconnectbackend.onrender.com/api/v1/profile/getUserEntireDetails', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token,
                    },
                });

                const data = await response.json();
                // console.log(data);
                setUserData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src={donut} alt="" />
                <Link to="/Profile" >
                    <Avatar className="sidebar__avatar" src={header_img} />
                </Link>
                <h2>{userData.name}</h2>
                <h4>{userData.email}</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>No. of followers</p>
                    <p className='sidebar__statNum'>130</p>
                </div>

                <div className='sidebar__stat'>
                    <p>No. of Contributions</p>
                    <p className='sidebar__statNum'>10</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

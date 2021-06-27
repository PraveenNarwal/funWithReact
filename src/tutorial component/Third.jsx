import React from 'react'
import { useEffect, useState } from "react";

/*
You are given a api `https://api.github.com/users/${profileName}` (replace profileName with any github's profile name), Use this api to build engine.

    1. Create "input" with class="profile-name" and name="profilename".
    2. on change "input" update profileName state.
    3. Create "div" with class="users-name" which should render name of user.
    4. Create "div" with class="users-company" which should render company for which user is working.
    5. Create "div" with class="users-repos" which should render number of public repos hold by user.


All the necessary values and state are already in a code.
*/

function Third() {
    const [data, setData] = useState({});
    const [profileName, setProfileName] = useState("mojombo");

    useEffect(() => {
        // add api url below
        fetch(`https://api.github.com/users/${profileName}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [profileName]);

    console.log(data);

    return (
        <div className="container">
            {/* write your code here */}
            <input className="profile-name" name="profilename" onChange={(e) => setProfileName(e.target.value)} />
            <div className="users-name">{data.name}</div>
            <div className="users-company">{data.company}</div>
            <div className="users-repos">{data.public_repos}</div>
        </div>
    );
};

export default Third

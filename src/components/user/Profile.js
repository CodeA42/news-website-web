import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

function Profile(props) {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function fetchUser(id) {
            const res = await fetch(`http://localhost:2345/users/${id}`);
            const user = await res.json();
        
            setUser(user);
        }
        fetchUser(id);
    }, [id]);

    return (
        <>
            <h1>{user.username}</h1>
        </>
    )
}

export default Profile;
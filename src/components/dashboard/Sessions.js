import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const API = 'http://localhost:1337/api/conference2022-sessions';


export default function Sessions() {

    const [sessions, setSessions] = useState({data: []});

    useEffect(() => {
        getSessionsWithFetch();
    }, []);

    const getSessionsWithFetch = async () => {
        const response = await fetch(API);
        const jsonData = await response.json({});
        setSessions(jsonData);
        console.log(jsonData);
    };

    

    return (
        <>
        <Container className='showSessions mt-4'>
            <h4>Conference Sessions List</h4>
            {/* <h3>This will show the raw data for all sessions - curly brace JSON.stringify(sessions.data) curly brace and use API = http://localhost:1337/api/sessions</h3>
            <p>{JSON.stringify(sessions.data)}</p> */}
            <ul>
            {sessions.data.map((session) => 
            <li key={session.id}>Session Id#{session.id} - Session Name:  {session.attributes.name}</li>)}
            </ul>
        </Container >
        </>

    );
}
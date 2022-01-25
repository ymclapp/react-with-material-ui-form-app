import React, { useEffect, useState } from 'react';
import { Form, Col } from 'react-bootstrap';

import './SessionForm.css';

const API = 'http://localhost:1337/api/conference2022-sessions';


export default function SessionsForm() {

    const [sessions, setSessions] = useState({ data: [] })
    const [sessionName, setSessionName] = useState('')

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
            <Form className='SessionsForm mt-4'>
            <h4 className='form-title text-center'>Step 2</h4>
                {/* <h3>This will show the raw data for all sessions - curly brace JSON.stringify(sessions.data) curly brace and use API = http://localhost:1337/api/sessions</h3>
            <p>{JSON.stringify(sessions.data)}</p> */}
                {/* <ul>
                    {sessions.data.map((session) =>
                        <li key={session.id}>Session Id#{session.id} - Session Name:  {session.attributes.name}</li>)}
                </ul> */}

                <Form.Group className="mb-3">
                    <Form.Label as="legend  text-center" column sm={2}><strong>Sessions</strong></Form.Label>
                    <Col sm={10}>
                        {sessions ? sessions.data.map((session) => 
                            <Form.Check key={session.id}
                                type="checkbox"
                                label={session.attributes.name}
                                name="sessionName"
                                value={session.attributes.name}
                                checked={session.attributes.name.includes(session.attributes.name)}
                                onChange={e => setSessionName(e.target.checked ? [...sessionName, session.attributes.name] : sessionName.filter(name => name !== session.attributes.name))} />
                                ) : 'Loading....'
                        }
                    </Col>
                </Form.Group>
            </Form >
        </>

    );
}
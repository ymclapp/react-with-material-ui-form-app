import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';

const API = 'http://localhost:1337/api/users';

//this is just to "get" users to display on the dashboard

export default function Users() {

    const [users, setUsers] = useState('');

    useEffect(() => {
        getUsersWithFetch();
    }, []);

    const getUsersWithFetch = async () => {
        const response = await fetch(API);
        const jsonData = await response.json({});
        setUsers(jsonData);
        console.log(jsonData);
    };



    return (
        <>
            <Container as='div' className='showUsers mt-4'>
                <h4>User List</h4>
                {users &&
                    users.map((user, index) =>
                        <Card>
                            <Card.Header key={index}>User Id#{user.id}:  {user.firstName} {user.lastName}</Card.Header>
                                Username:  {user.username}
                                <br/>
                                User Email:  {user.email}
                        </Card>)}
            </Container>
        </>

    );
}
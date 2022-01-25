import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//import axios from 'axios';
import { Form, FloatingLabel, Button } from 'react-bootstrap';

import './Registration.css';

const userApi = 'http://localhost:1337/api/auth/local/register';

export default function Registration() {

    const history = useHistory();

const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [password, setPassword] = useState('')


    async function handleNewUserSubmit(event) {
        event.preventDefault();
        const form = event.target;
        // const { username, email, firstName, lastName, password } = form.elements;

        console.log('Submitting....');

        await fetch(`${userApi}`, {
            method:  'post',
            headers:  {
                'Content-Type':  'application/json',
            },

            body:  JSON.stringify(
                { username, email, firstName, lastName, password }
            ),
        })
        .then(response => response.text())
        .then(data => console.log(data))

        form.reset();
        history.push('/login');
        
    }

    return (
        <>
            <Form className='newUser-form' onSubmit={handleNewUserSubmit}>
                <h4 className='form-title text-center'>Create an Account</h4>
                <Form.Group>

                    <FloatingLabel controlId='floatingInput1' label='Username:  ' className='newUserUsername'>
                        <Form.Control type='text' name='username' value={username} onChange={e => setUsername(e.target.value)} />
                    </FloatingLabel>

                    <br />

                    <FloatingLabel controlId='floatingInput2' label='Email:  ' className='newUserEmail'>
                        <Form.Control type='text' name='email' value={email} onChange={e => setEmail(e.target.value)} />
                    </FloatingLabel>

                    <br />

                    <FloatingLabel controlId='floatingInput3' label='First Name:  ' className='newUserFirstName'>
                        <Form.Control type='text' name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </FloatingLabel>

                    <br />

                    <FloatingLabel controlId='floatingInput4' label='Last Name:  ' className='newUserLastName'>
                        <Form.Control type='text' name='lastName' value={lastName} onChange={e => setLastName(e.target.value)} />
                    </FloatingLabel>

                    <br />

                    <FloatingLabel controlId='floatingInput5' label='Password:  ' className='newUserPassword'>
                        <Form.Control type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
                    </FloatingLabel>

                    <Button type='submit' className='newUser-button'>Register</Button>

                </Form.Group>
            </Form>
        </>
    )
}
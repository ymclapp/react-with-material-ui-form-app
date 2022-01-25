import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import './DemoForm.css';

const registrationApi = 'http://localhost:1337/api/demographics';

export default function Registration(props) {

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [phone, setPhone] = useState('');
    //const onSave = props.onSave;

    async function handleRegistrationAdd(event) {
        event.preventDefault()
        console.log('Submitting....');

        await fetch(`${registrationApi}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                //'Accept': 'application/json'
            },

            body: JSON.stringify(
                {
                    data:
                        { address, city, state, zip, phone }
                }),
        })
            .then(response => response.text())
            .then(data => console.log(data));

        //console.log('Submitted successfully');
        //onSave();
    }



    return (
        <Form onSubmit={handleRegistrationAdd} title='Demographics Form' className='demo-form'>
            <h4 className='form-title text-center'>Step 1</h4>

            <Form.Group className='mb-3' controlId='form.address'>
                <Form.Label>Address</Form.Label>
                <Form.Control type='text' placeholder='Enter your address' value={address} onChange={e => setAddress(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3' controlId='form.city'>
                <Form.Label>City</Form.Label>
                <Form.Control type='text' placeholder='Enter your city' value={city} onChange={e => setCity(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3' controlId='form.state'>
                <Form.Label>State</Form.Label>
                <Form.Control type='text' placeholder='Enter your state' value={state} onChange={e => setState(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3' controlId='form.zip'>
                <Form.Label>Zip</Form.Label>
                <Form.Control type='text' placeholder='Enter your zip code' value={zip} onChange={e => setZip(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3' controlId='form.phone'>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type='text' placeholder='Enter your phone number' value={phone} onChange={e => setPhone(e.target.value)} />
            </Form.Group>

            <Button variant="primary" className='demo-button' type="submit">Submit</Button>

        </Form>
    )
};


import './login.css';
import axios from 'axios';
import { FloatingLabel, Form, Button } from 'react-bootstrap';

export default function Login() {

    async function handleLoginSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const { username, password } = form.elements;

        // Request API.
        axios
            .post('http://localhost:1337/api/auth/local', {
                identifier: username.value,
                password: password.value,
            })
            .then(response => {
                // Handle success.
                console.log('Well done!');
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });

        form.reset();
    }

    return (
        <>
            <Form className='login-form' onSubmit={handleLoginSubmit}>
                <h4 className='form-title text-center'>Log In to Continue </h4>
                <Form.Group>

                    <FloatingLabel controlId='floatingInput1' label='Username:  ' className='loginUsername'>
                        <Form.Control type='text' name='username' />
                    </FloatingLabel>

                    <br />

                    <FloatingLabel controlId='floatingInput2' label='Password:  ' className='loginPassword'>
                        <Form.Control type='password' name='password' />
                    </FloatingLabel>

                    <Button type='submit' className='login-button'>Log In</Button>
                    <br /><br />
                    <a href='/registration'>Create Account</a>

                </Form.Group>
            </Form>
            <div>

            </div>
        </>
    )
}
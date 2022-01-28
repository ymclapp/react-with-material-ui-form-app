import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

import axios from '../../api/axios';
const LOGIN_URL = '/auth/local'; //he says that this is in his node.js beginner course




//https://www.youtube.com/watch?v=X3qyxo_UTR4


const Login = () => {

    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ identifier: username, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    //withCredentials: true
                }
                );
                console.log(response?.data)
                console.log(response?.data.jwt)
                console.log(response?.data.user.confirmed)
                const jwt = response?.data.jwt;
                const confirmed = response?.data.user.confirmed;
                setAuth({username, password, confirmed, jwt});
            setUsername('');
            setPassword('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response === 500) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing/Incorrect Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }


    return (
        <>
            
                <section>
                    <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
                    <h1>Sign In</h1>

                    <Form onSubmit={handleLoginSubmit}>

                        <Form.Label htmlFor='username'>Username:  </Form.Label>
                        <Form.Control
                            type='text'
                            id='username'
                            ref={userRef}
                            autoComplete='off'
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                            required
                        />

                        <Form.Label htmlFor='password'>password:  </Form.Label>
                        <Form.Control
                            type='password'
                            id='password'
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <Button type='submit' className='login-button'>Sign In</Button>
                    </Form>
                    <p>
                        Don't have an account?<br />
                        <span className='line'>
                            <a href='/registration'> Create an Account</a>
                        </span>
                    </p>
                </section>
        </>
    )
}

export default Login;

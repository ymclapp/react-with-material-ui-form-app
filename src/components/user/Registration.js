import { useRef, useState, useEffect } from 'react';
import axios from '../../api/axios';

import './Registration.css';

import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Form, Button, FloatingLabel } from 'react-bootstrap';

const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTRATION_URL = '/auth/local/register';


const Registration = () => {

    const usernameRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [validName, setValidName] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [roles, setRoles] = useState('User');

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        usernameRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USERNAME_REGEX.test(username);
        console.log(result);
        console.log(username);
        setValidName(result);
    }, [username])

    useEffect(() => {
        const result = PASSWORD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidPassword(result);
        const match = password === matchPassword;
        setValidMatch(match);
    }, [password, matchPassword])

    useEffect(() => {
        setErrMsg('');
    }, [username, email, firstName, lastName, roles, password, matchPassword])

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack - this will check one more time and won't say which is wrong
        const v1 = USERNAME_REGEX.test(username);
        const v2 = PASSWORD_REGEX.test(password);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        console.log('Submitting....');
        // console.log(username, password);
        // setSuccess(true);

        try {
            const response = await axios.post(REGISTRATION_URL,
                JSON.stringify({ username, email, firstName, roles, lastName, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    // withCredentials:  true
                }
            );
            console.log(response.data);
            console.log(response.data.jwt);
            console.log(response.data.user.roles);
            // console.log(JSON.stringify(response))
            setSuccess(true);
            //clear input fields
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing required fields');
            } else if (err.response?.status === 409) {
                setErrMsg('Username already taken');
            } else {
                setErrMsg('Registration Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href='/login'>Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
                    <h1> Register</h1>
                    <Form onSubmit={handleRegistrationSubmit}>

                        <FloatingLabel htmlFor='username'>
                            Username:
                            <span className={validName ? 'valid' : 'hide'}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validName || !username ? 'hide' : 'invalid'}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </FloatingLabel>
                        <Form.Control
                            type='text'
                            id='username'
                            ref={usernameRef}
                            autoComplete='off'
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            aria-invalid={validName ? 'false' : 'true'}
                            aria-describedby='uidnote'
                            onFocus={() => setUsernameFocus(true)}
                            onBlur={() => setUsernameFocus(false)}
                        />
                        <p id='uidnote' className={usernameFocus && username &&
                            !validName ? 'instructions' : 'offscreen'}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

                        <FloatingLabel htmlFor='password'>
                            Password:
                            <span className={validPassword ? 'valid' : 'hide'}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validPassword || !password ? 'hide' : 'invalid'}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </FloatingLabel>
                        <Form.Control
                            type='password'
                            id='password'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            aria-invalid={validPassword ? 'false' : 'true'}
                            aria-describedby='passwordnote'
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                        />
                        <p id='passwordnote' className={passwordFocus && !validPassword ? 'instructions' : 'offscreen'}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters:  <span aria-label='exclamation mark'>!</span> <span aria-label='at symbol'>@</span> <span aria-label='hashtag'>#</span> <span aria-label='dollar sign'>$</span> <span aria-label='percent'>%</span>
                        </p>

                        <FloatingLabel htmlFor='confirm_password'>
                            Confirm Password:
                            <span className={validMatch && matchPassword ? 'valid' : 'hide'}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validMatch || !matchPassword ? 'hide' : 'invalid'}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </FloatingLabel>
                        <Form.Control
                            type='password'
                            id='confirm_password'
                            onChange={(e) => setMatchPassword(e.target.value)}
                            required
                            aria-invalid={validMatch ? 'false' : 'true'}
                            aria-describedby='confirmnote'
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <br />
                        <p id='confirmnote' className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>

                        <FloatingLabel controlId='floatingInput2' label='Email:  ' className='newUserEmail'>
                            <Form.Control type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FloatingLabel>

                        <br />

                        <FloatingLabel controlId='floatingInput3' label='First Name:  ' className='newUserFirstName'>
                            <Form.Control type='text' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </FloatingLabel>

                        <br />

                        <FloatingLabel controlId='floatingInput4' label='Last Name:  ' className='newUserLastName'>
                            <Form.Control type='text' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </FloatingLabel>

                        <br />

                        <FloatingLabel controlId='floatingInput5' label='Role:  ' className='newUserRole'>
                            <Form.Control type='text' name='Role' value={roles} onClick={(e) => setRoles(e.target.value)} />
                        </FloatingLabel>

                        <br />

                        <Button type='submit' disabled={!validName || !validPassword || !validMatch ? true : false}>Create Account</Button>
                    </Form>

                    <p>
                        Already register?<br />
                        <span className='line'>
                            <a href='/login'>Sign In</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}


export default Registration;



import React, { useState } from 'react';

import SignUpInfo from './SignUpInfo';
import PersonalInfo from './PersonalInfo';
import OtherInfo from './OtherInfo';

export default function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email:  '',
        password:  '',
        confirmPassword:  '',
        firstName:   '',
        lastName:  '',
        username:  '',
        nationality:  '',
        other:  '',
        occupation:  '',
    });

    const FormTitles = ['Sign Up', 'Personal Info', 'Other'];

    //will find out what page we are in and then return a component based on that
    const PageDisplay = () => {
        if (page === 0) {
            return <SignUpInfo />;
        } else if (page === 1) {
            return <PersonalInfo />;
        } else {
            return <OtherInfo />;
        }
    };

    return (
        <div className='form'>
            <div className='progressbar'>
                <div style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}></div>
            </div>
            <div className='form-container'>
                <div className='header'>
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className='body'>{PageDisplay()}</div>
                <div className='footer'>
                    <button
                        disabled={page === 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1);
                        }}
                    >
                        Prev
                    </button>

                    <button
                        disabled={page === FormTitles.length - 1}
                        onClick={() => {
                            setPage((currPage) => currPage + 1);
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

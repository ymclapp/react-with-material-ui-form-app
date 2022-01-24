import React from 'react';

export default function SignUpInfo() {
  return (
    <div className='sign-up-container'>
      <input type='text' placeholder='Email...' />
      <input type='password' placeholder='Password...' />
      <input type='password' placeholder='Confirm Password...' />
    </div>
  );
}


import React from 'react';

const Signup = () => {
  return (
    <form className='container'>
      <div className='form-group'>
        <label htmlFor='signup-email'>Email address</label>
        <input type='email' className='form-control' id='signup-email' />
      </div>
      <div className='form-group'>
        <label htmlor='signup-password'>Password</label>
        <input type='password' className='form-control' id='signup-password' />
      </div>
      <div className='form-group'>
        <label htmlor='signup-password2'>Verify Password</label>
        <input type='password' className='form-control' id='signup-password2' />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default Signup;

import React from 'react';

class Login extends React.Component {
  handleUserLogin = () => {
    console.log('Button pressed!');
    this.props.userLoginGoogle();
  };

  render() {
    return (
      <div>
        <a className='btn btn-primary' href='/auth/google'>
          Log in with Google
        </a>
        <p>OR</p>
        <form className='container'>
          <div className='form-group'>
            <label htmlFor='login-email'>Email address</label>
            <input type='email' className='form-control' id='login-email' />
          </div>
          <div className='form-group'>
            <label htmlor='login-password'>Password</label>
            <input
              type='password'
              className='form-control'
              id='login-password'
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

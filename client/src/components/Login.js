import React from 'react';

class Login extends React.Component {
  handleUserLogin = () => {
    console.log('Button pressed!');
    this.props.userLoginGoogle();
  };

  render() {
    return (
      <a type='button' className='btn btn-primary' href='/auth/google'>
        Log in with Google
      </a>
    );
  }
}

export default Login;

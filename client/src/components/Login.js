import React from 'react';
import { connect } from 'react-redux';
import { userLoginGoogle } from '../actions';

class Login extends React.Component {
  handleUserLogin = () => {
    console.log('Button pressed!');
    this.props.userLoginGoogle();
  };

  render() {
    return (
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => this.handleUserLogin()}
      >
        Log in with Google
      </button>
    );
  }
}

export default connect(
  null,
  { userLoginGoogle }
)(Login);

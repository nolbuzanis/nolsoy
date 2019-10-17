import React from 'react';
import TextInput from './TextInput';

class Login extends React.Component {
  state = {
    email: {
      value: '',
      error: '',
      touched: false
    },
    password: {
      value: '',
      error: '',
      touched: false
    }
  };

  handleUserLogin = () => {
    console.log('Button pressed!');
    this.props.userLoginGoogle();
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Clicked login button!');
    // Make axios call to server
  };

  generateErrorMsg = (name, value) => {
    switch (name) {
      case 'email': {
        if (value.length === 0 || value === '')
          return 'Please enter your email.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return 'The email address you supplied is invalid.';
        break;
      }
      case 'password': {
        if (value.length === 0 || value === '')
          return 'Please enter a password to continue.';
        if (value.length < 8) return 'Your password is too short.';
        break;
      }
      default: {
        break;
      }
    }
    return '';
  };

  changeHandler = event => {
    const { name, value } = event.target;

    let currentInput = this.state[name];
    currentInput.error = this.generateErrorMsg(name, value);
    currentInput.value = value;

    if (!this.state[name].touched) {
      currentInput.touched = true;
    }

    // Call set state once at end with changed values since it is an async function
    this.setState({ [name]: currentInput });
  };

  render() {
    return (
      <div>
        <a className='btn btn-primary' href='/auth/google'>
          Log in with Google
        </a>
        <div className='ui container segment'>
          <form className='ui form' onClick={e => this.handleSubmit(e)}>
            <h3 className='ui center aligned header'>
              Login in with your account
            </h3>
            <TextInput
              name='email'
              type='email'
              value={this.state.email.value}
              onChangeHandler={e => this.changeHandler(e)}
              placeholder='Email'
              errorMsg={this.state.email.error}
              touched={this.state.email.touched}
            />
            <TextInput
              name='password'
              type='password'
              value={this.state.password.value}
              onChangeHandler={e => this.changeHandler(e)}
              placeholder='Password'
              errorMsg={this.state.password.error}
              touched={this.state.password.touched}
            />
            <button type='submit' className='ui button secondary'>
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

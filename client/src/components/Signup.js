import React from 'react';
import TextInput from './TextInput';

class Signup extends React.Component {
  state = {
    email: {
      value: '',
      error: '',
      touched: false
    },
    email2: {
      value: '',
      error: '',
      touched: false
    },
    name: {
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

  generateErrorMsg = (name, value) => {
    switch (name) {
      case 'email': {
        if (value.length === 0 || value === '')
          return 'Please enter your email.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return 'The email address you supplied is invalid.';
        break;
      }
      case 'email2': {
        if (value.length === 0 || value === '')
          return 'Please enter your email.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return 'The email address you supplied is invalid.';
        if (value !== this.state.email.value) return 'Emails do not match.';
        break;
      }
      case 'password': {
        if (value.length === 0 || value === '')
          return 'Please enter a password to continue.';
        if (value.length < 8) return 'Your password is too short.';
        break;
      }
      case 'name': {
        if (value.length === 0 || value === '')
          return 'Your do not have a name?';
      }
      default: {
        return '';
        break;
      }
    }
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

  handleSubmit = e => {
    e.preventDefault();
    console.log('Email: ', this.state.email);
    console.log('Password: ', this.state.password);
    console.log('name: ', this.state.name);
  };

  render() {
    return (
      <div className='ui container segment'>
        <form
          className='ui form'
          style={{ paddingTop: '60px' }}
          onSubmit={e => this.handleSubmit(e)}
        >
          <h3 className='ui center aligned header'>
            Sign up with your email address
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
            name='email2'
            type='email'
            value={this.state.email2.value}
            onChangeHandler={e => this.changeHandler(e)}
            placeholder='Confirm Email'
            errorMsg={this.state.email2.error}
            touched={this.state.email2.touched}
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
          <TextInput
            name='name'
            type='text'
            value={this.state.name.value}
            onChangeHandler={e => this.changeHandler(e)}
            placeholder='What should we call you?'
            errorMsg={this.state.name.error}
            touched={this.state.name.touched}
          />

          <button type='submit' className='ui button'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;

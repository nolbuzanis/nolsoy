import React from 'react';
import TextInput from './TextInput';

class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    name: '',
    email2: '',
    errors: {
      name: '',
      password: '',
      email: ''
    }
  };

  changeHandler = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
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
            value={this.state.email}
            onChangeHandler={e => this.changeHandler(e)}
            placeholder='Email'
          />
          <TextInput
            name='email2'
            type='email'
            value={this.state.email2}
            onChangeHandler={e => this.changeHandler(e)}
            placeholder='Confirm Email'
          />
          <TextInput
            name='password'
            type='password'
            value={this.state.password}
            onChangeHandler={e => this.changeHandler(e)}
            placeholder='Password'
          />
          <TextInput
            name='name'
            type='text'
            value={this.state.name}
            onChangeHandler={e => this.changeHandler(e)}
            placeholder='What should we call you?'
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

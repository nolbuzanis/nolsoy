import React from 'react';

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
          <div className='field'>
            <input
              type='email'
              name='email'
              placeholder='Email'
              onChange={e => this.changeHandler(e)}
              value={this.state.email}
            />
          </div>
          <div className='field'>
            <input
              type='email'
              name='email2'
              placeholder='Confirm Email'
              onChange={e => this.changeHandler(e)}
              value={this.state.email2}
            />
          </div>
          <div className='field'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={e => this.changeHandler(e)}
              value={this.state.password}
            />
          </div>
          <div className='field'>
            <input
              type='text'
              name='name'
              placeholder='What should we call you?'
              onChange={e => this.changeHandler(e)}
              value={this.state.name}
            />
          </div>

          <button type='submit' className='ui button'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;

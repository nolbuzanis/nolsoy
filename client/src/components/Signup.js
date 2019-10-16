import React from 'react';

class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    password2: ''
  };

  changeHandler = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Email: ', this.state.email);
    console.log('Password: ', this.state.password);
    console.log('Password2: ', this.state.password2);
  };

  render() {
    return (
      <form
        className='container'
        style={{ paddingTop: '60px' }}
        onSubmit={e => this.handleSubmit(e)}
      >
        <div className='form-group'>
          <label htmlFor='signup-email'>Email address</label>
          <input
            name='email'
            className='form-control'
            id='signup-email'
            onChange={e => this.changeHandler(e)}
            value={this.state.email}
          />
        </div>
        <div className='form-group'>
          <label htmlor='signup-password'>Password</label>
          <input
            type='password'
            name='password'
            className='form-control'
            id='signup-password'
            onChange={e => this.changeHandler(e)}
            value={this.state.password}
          />
        </div>
        <div className='form-group'>
          <label htmlor='signup-password2'>Verify Password</label>
          <input
            type='password'
            name='password2'
            className='form-control'
            id='signup-password2'
            onChange={e => this.changeHandler(e)}
            value={this.state.password2}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    );
  }
}

export default Signup;

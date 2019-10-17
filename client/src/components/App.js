import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Signup from './Signup';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Link to='/login'>Log In</Link>
          <p></p>
          <Link to='/signup'>Sign Up</Link>
          <p></p>
          <Link to='/'>Profile</Link>
          <p></p>
          <Route path='/' exact component={Profile} />
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

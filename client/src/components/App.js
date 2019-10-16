import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Signup from './Signup';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
          <Profile />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

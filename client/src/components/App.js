import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import Login from './Login';

class App extends React.Component {
  componentDidMount = () => {
    if (!this.props.user) {
      this.props.fetchUser();
    }
  };

  renderUserDetails = () => {
    if (!this.props.user) {
      return <p>No User Logged in!</p>;
    }
    return <p>{JSON.stringify(this.props.user)}</p>;
  };

  render() {
    return (
      <div className='App'>
        <Login />
        {this.renderUserDetails()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(App);

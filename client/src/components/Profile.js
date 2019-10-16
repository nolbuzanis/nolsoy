import React from 'react';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';

class Profile extends React.Component {
  componentDidMount = () => {
    if (!this.props.user) {
      this.props.fetchUser();
    }
  };

  renderUserDetails = () => {
    if (!this.props.user) {
      return <p>No User Logged in!</p>;
    }
    return (
      <div>
        <p>{JSON.stringify(this.props.user)}</p>
        <a className='btn btn-secondary' href='/api/logout'>
          Logout
        </a>
      </div>
    );
  };

  render() {
    return <p>{this.renderUserDetails()}</p>;
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(Profile);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUsers } from './actions';
import MainLayout from '../../layouts/main-layout';
import UserList from './components/user-list';
import Loader from '../../common/components/loader';
import throttle from '../../utilities/throttle';

class Users extends Component {
  componentWillMount() {
    this.props.getUsers();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = throttle(() => {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight)
      && this.props.users.data.page < this.props.users.data.totalPages) {
      this.props.getUsers(this.props.users.data.page + 1);
    }
  }, 500);

  render() {
    return (
      <MainLayout>
        <h1>Users</h1>
        <UserList users={this.props.users.data.users} />
        {this.props.users.data.page === this.props.users.data.totalPages
          && <p className="message no-more-users">No more users.</p>}
      </MainLayout>
    );
  }
}

Users.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })).isRequired,
    error: PropTypes.string.isRequired,
  }),
  ui: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
  }),
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: bindActionCreators(getUsers, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

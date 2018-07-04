import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from './user-list-item';

const UserList = ({ users }) => (
  <ul className="user-list">
    {users.map((user, i) => <UserListItem key={i} {...user} />)}
  </ul>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  })).isRequired,
};

export default UserList;

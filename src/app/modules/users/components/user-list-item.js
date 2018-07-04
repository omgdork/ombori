import React from 'react';
import PropTypes from 'prop-types';

const UserListItem = ({ id, first_name, last_name, avatar }) => (
  <li className="user-list-item">
    <img className="avatar" src={avatar} alt={`${first_name} ${last_name}`} />
    <span className="user-name">{`${first_name} ${last_name}`}</span>
  </li>
);

UserListItem.propTypes = {
  id: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default UserListItem;

import {
  USERS_GET,
  USERS_GETTING,
  USERS_GET_SUCCESS,
  USERS_GET_ERROR,
  USERS_SET_ERROR_MESSAGE,
} from './constants';

export function getUsers(page = 1) {
  return {
    type: USERS_GET,
    payload: {
      page,
    },
  };
}

export function setUsersGetting(isGetting) {
  return {
    type: USERS_GETTING,
    payload: {
      isGetting,
    },
  };
}

export function getUsersSuccess({ page, total, total_pages: totalPages, data: users }) {
  return {
    type: USERS_GET_SUCCESS,
    payload: {
      page,
      total,
      totalPages,
      users,
    },
  };
}

export function getUsersError(error) {
  return {
    type: USERS_GET_ERROR,
    payload: {
      error,
    },
  };
}

export function setErrorMessage(error) {
  return {
    type: USERS_SET_ERROR_MESSAGE,
    payload: {
      error,
    }
  };
}

import {
  USERS_GET,
  USERS_GET_SUCCESS,
  USERS_GET_ERROR,
} from './constants';

export const initialState = {
  data: {
    page: 0,
    total: 0,
    totalPages: 0,
    users: [],
    error: '',
  },
  ui: {
    isGettingUsers: false,
  },
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_GET: 
      return {
        ...state,
        ui: {
          ...state.ui,
          isGettingUsers: true,
        },
      };
    case USERS_GET_SUCCESS: {
      const { page, total, totalPages, users } = action.payload;

      return {
        ...state,
        data: {
          page,
          total,
          totalPages,
          users: [...state.data.users, ...users],
          error: '',
        },
        ui: {
          isGettingUsers: false,
        },
      };
    }
    case USERS_GET_ERROR:
      return {
        ...state,
        data: {
          ...state.data,
          error: action.payload.error,
        },
        ui: {
          isGettingUsers: false,
        },
      };
    default:
      return state;
  }
}

import * as types from "../actions/auth/authActionTypes";

const initialState = {
  loginIsOpen: false,
  registerIsOpen: false
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case types.TOGGLE_LOGIN_MODAL:
      return { ...state, loginIsOpen: !state.loginIsOpen };

    case types.TOGGLE_REGISTER_MODAL:
      return { ...state, registerIsOpen: !state.registerIsOpen };

    default:
      return state;
  }
};

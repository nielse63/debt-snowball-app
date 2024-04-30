export const DEFAULT_ACCOUNT = {
  name: "",
  balance: 0,
  interest: 0,
  minPayment: 0,
};

export const actionTypes = {
  SET_MIN_PAYMENT: "SET_MIN_PAYMENT",
  ADD_ACCOUNT: "ADD_ACCOUNT",
  DELETE_ACCOUNT: "DELETE_ACCOUNT",
  EDIT_ACCOUNT: "EDIT_ACCOUNT",
  ADD_ERROR: "ADD_ERROR",
  DISMISS_ERROR: "DISMISS_ERROR",
};

export const errorIds = {
  SET_MIN_PAYMENT: "SET_MIN_PAYMENT",
};

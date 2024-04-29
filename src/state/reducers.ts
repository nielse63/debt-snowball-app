import { addMonths } from "date-fns";
import snowball from "node-debt-snowball";
import { DEFAULT_ACCOUNT } from "../helpers/constants";
import parseAccounts from "../helpers/parseAccounts";
import uuid from "../helpers/uuid";

const reducers = (state: State, action: Action) => {
  const { accounts, additionalPayment } = state;

  switch (action.type) {
    case "ON_LOAD":
      console.log("ON_LOAD", state);
      return {
        ...state,
        // additionalPayment: parseFloat(action.payload),
      };
    case "SET_MIN_PAYMENT":
      return {
        ...state,
        additionalPayment: parseFloat(action.payload),
      };
    case "ADD_ACCOUNT":
      return {
        ...state,
        accounts: [...accounts, DEFAULT_ACCOUNT],
      };
    case "DELETE_ACCOUNT":
      accounts.splice(action.payload?.index, 1);
      return {
        ...state,
        accounts: [...accounts],
      };
    case "EDIT_ACCOUNT":
      const { key, value, index } = action.payload;
      const account = accounts[index];
      const updatedAccount = {
        ...account,
        [key]: { value },
      };
      accounts[index] = updatedAccount;

      const output = {
        ...state,
        accounts: [...accounts],
      };

      // recaulcate payment plan
      if (
        accounts[index].balance &&
        accounts[index].interest &&
        accounts[index].minPayment
      ) {
        const parsedAccounts = parseAccounts(accounts);
        const snowballResults = snowball(parsedAccounts, additionalPayment);
        output.results = snowballResults.payments;
        output.dateEnd = addMonths(
          new Date(),
          snowballResults.totalPayments - 1
        );
        const minPaymentResults = snowball(parsedAccounts, 0);
        output.interestSaved =
          minPaymentResults.totalInterestPaid -
          snowballResults.totalInterestPaid;
      }

      return { ...output };
    case "ADD_ERROR":
      const errorExists = state.errors.find((error) => {
        return error.message === action.payload.message;
      });
      if (errorExists) {
        return { ...state };
      }
      return {
        ...state,
        errors: [
          ...state.errors,
          {
            ...action.payload,
            id: uuid(),
          },
        ],
      };
    case "DISMISS_ERROR":
      return {
        ...state,
        errors: state.errors.filter((error) => {
          return error.id !== action.payload.id;
        }),
      };
    case "DISMISS_ERRORS_BY_SOURCE":
      return {
        ...state,
        errors: state.errors.filter(
          (error) => error.source !== action.payload.source
        ),
      };
  }

  return { ...state };
};

export default reducers;

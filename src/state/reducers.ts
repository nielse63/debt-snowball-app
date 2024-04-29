import { addMonths } from "date-fns";
import snowball from "node-debt-snowball";
import { DEFAULT_ACCOUNT } from "../helpers/constants";
import parseAccounts from "../helpers/parseAccounts";

const reducers = (state: State, action: Action) => {
  const { accounts, additionalPayment } = state;

  switch (action.type) {
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
        accounts[index].balance.value &&
        accounts[index].interest.value &&
        accounts[index].minPayment.value
      ) {
        const parsedAccounts = parseAccounts(accounts);
        output.results = snowball(parsedAccounts, additionalPayment).payments;
        output.dateEnd = addMonths(new Date(), output.results.length - 1);
      }

      return { ...output };
    case "ADD_ERROR":
      return {
        ...state,
        errors: [...state.errors, action.payload.message],
      };
  }

  return { ...state };
};

export default reducers;

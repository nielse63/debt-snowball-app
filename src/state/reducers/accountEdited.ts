// import { addMonths } from "date-fns";
// import snowball from "node-debt-snowball";
// import parseAccounts from "../../helpers/parseAccounts";
import isNumeric from "../../helpers/isNumeric";

const accountEdited = (state: State, action: Action) => {
  const { accounts } = state;
  const { key, value, id } = action.payload;
  const index = accounts.findIndex((account) => {
    return account.key === id;
  });
  const account: AccountItem = accounts[index];
  const newValue = isNumeric(value) ? parseFloat(value) : value;

  const updatedAccount = {
    ...account,
    [key]: newValue,
  };
  accounts[index] = updatedAccount;

  return {
    ...state,
    accounts: [...accounts],
  };
};

export default accountEdited;

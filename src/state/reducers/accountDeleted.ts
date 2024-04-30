import snowball from "node-debt-snowball";
import parseAccounts from "../../helpers/parseAccounts";

const accountDeleted = (state: State, action: Action) => {
  const { key } = action.payload;
  const accounts = state.accounts.filter((account) => account.key !== key);
  const parsedAccounts = parseAccounts(accounts);
  const snowballResults = snowball(parsedAccounts, state.additionalPayment);
  const results = snowballResults.payments;
  return {
    ...state,
    accounts,
    results,
  };
};

export default accountDeleted;

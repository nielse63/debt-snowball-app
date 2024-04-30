import { addMonths } from "date-fns";
import snowball from "node-debt-snowball";
import parseAccounts from "../../helpers/parseAccounts";

const accountEdited = (state: State, action: Action) => {
  const { accounts, additionalPayment } = state;
  const { key, value, id } = action.payload;
  const index = accounts.findIndex((account) => {
    return account.key === id;
  });
  const account = accounts[index];
  const updatedAccount = {
    ...account,
    [key]: value,
  };
  accounts[index] = updatedAccount;

  const output = {
    ...state,
    accounts: [...accounts],
  };

  // recaulcate payment plan
  if (
    typeof value === "number" &&
    accounts[index].balance &&
    accounts[index].interest &&
    accounts[index].minPayment
  ) {
    const parsedAccounts = parseAccounts(accounts);
    const snowballResults = snowball(parsedAccounts, additionalPayment);
    output.results = snowballResults.payments;
    output.dateEnd = addMonths(new Date(), snowballResults.totalPayments - 1);
    const minPaymentResults = snowball(parsedAccounts, 0);
    output.interestSaved =
      minPaymentResults.totalInterestPaid - snowballResults.totalInterestPaid;
  }

  return { ...output };
};

export default accountEdited;

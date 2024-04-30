import { addMonths } from "date-fns";
import snowball from "node-debt-snowball";
import accounts from "../data/accounts";
import parseAccounts from "../helpers/parseAccounts";

const additionalPayment = 100;
const parsedAccounts = parseAccounts(accounts);
const { payments: results, totalInterestPaid: totalInterest } = snowball(
  parsedAccounts,
  additionalPayment
);
const minPaymentResults = snowball(parsedAccounts, 0);
const dateEnd = addMonths(new Date(), results.length - 1);

const state: State = {
  additionalPayment,
  accounts,
  results,
  dateEnd,
  errors: [] as ErrorObject[],
  totalInterest,
  interestSaved: minPaymentResults.totalInterestPaid - totalInterest,
};

export default state;

import snowball from "node-debt-snowball";
import accounts from "../data/accounts";
import parseAccounts from "../helpers/parseAccounts";
import { addMonths } from "date-fns";

const additionalPayment = 100;
const parsedAccounts = parseAccounts(accounts);
const { payments: results } = snowball(parsedAccounts, additionalPayment);
const dateEnd = addMonths(new Date(), results.length - 1);

const state: State = {
  additionalPayment,
  accounts,
  results,
  dateEnd,
  errors: [],
};

export default state;

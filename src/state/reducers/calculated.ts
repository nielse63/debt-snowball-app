import { addMonths } from "date-fns";
import snowball from "node-debt-snowball";
import { actionTypes } from "../../helpers/constants";
import parseAccounts from "../../helpers/parseAccounts";
import errorAdded from "./errorAdded";

export interface ErrorObject {
  message: string;
}

export interface SnowballResultsObject {
  payments: any[];
  totalPayments: number;
  totalInterestPaid: number;
}

const calculated = (state: State) => {
  const { accounts, additionalPayment, strategy } = state;
  const parsedAccounts = parseAccounts(accounts);
  let snowballResults: SnowballResultsObject = {
    payments: [],
    totalPayments: 0,
    totalInterestPaid: 0,
  };
  try {
    snowballResults = snowball(parsedAccounts, additionalPayment, strategy);
  } catch (error: any) {
    return errorAdded(state, {
      type: actionTypes.ADD_ERROR,
      payload: {
        message: error.message,
        source: "snowball",
      },
    });
  }
  const results = snowballResults.payments;
  const dateEnd = addMonths(new Date(), snowballResults.totalPayments - 1);
  const minPaymentResults = snowball(parsedAccounts, 0, strategy);
  const interestSaved =
    minPaymentResults.totalInterestPaid - snowballResults.totalInterestPaid;

  return {
    ...state,
    results,
    dateEnd,
    interestSaved,
  };
};

export default calculated;

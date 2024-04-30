import { Card } from "antd";
import { format } from "date-fns";
import { useContext } from "react";
import formatCurrency from "../../helpers/formatCurrency";
import getTotalValues from "../../helpers/getTotalValues";
import { AccountsContext } from "../../state/AccountsContext";
import RepaymentPlan from "../RepaymentPlan";
import ResultsItem from "../ResultsItem";

import "./styles.css";

function ResultsCard() {
  const { results, dateEnd, accounts, interestSaved } =
    useContext(AccountsContext);
  const totalInterest = getTotalValues(results, "accruedInterest");
  const totalPayment = getTotalValues(results, "paymentAmount");
  const resultsItems = [
    {
      title: "Debt Free Date",
      tooltip: "The date when you'll be debt free.",
      value: format(dateEnd, "MMM yyyy"),
    },
    {
      title: "Total Amount Paid",
      tooltip: "The total principal and interest paid.",
      value: formatCurrency(totalPayment),
    },
    {
      title: "Interest Paid",
      tooltip:
        "The amount of interest you'll pay following repayment strategy.",
      value: formatCurrency(totalInterest),
    },
    {
      title: "Interest Saved",
      tooltip:
        "The amount saved by paying more than the minimum payment each month.",
      value: formatCurrency(interestSaved),
    },
  ];

  return (
    <div className="accounts-card">
      <Card title="Results">
        <div className="card-body text-sm">
          {resultsItems.map((item, i) => (
            <ResultsItem {...item} key={`results-item-${i}`} />
          ))}
        </div>
      </Card>

      <div className="flex items-center justify-between w-full mt-4">
        <RepaymentPlan data={results} accounts={accounts} />
      </div>
    </div>
  );
}

export default ResultsCard;

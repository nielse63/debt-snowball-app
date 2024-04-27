import {
  Button,
  // Caption1,
  Card,
  CardFooter,
  CardHeader,
  // CardPreview,
  Divider,
  InfoLabel,
  Tag,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { ArrowReplyRegular } from "@fluentui/react-icons";
import { format } from "date-fns";
import snowball from "node-debt-snowball";
import { useContext } from "react";
import formatCurrency from "../../helpers/formatCurrency";
import parseAccounts from "../../helpers/parseAccounts";
import { AccountsContext } from "../../state/AccountsContext";

import "./styles.css";

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("auto"),
    width: "100%",
  },
  tag: {
    "border-color": tokens.colorPaletteGreenBorder1,
    "background-color": tokens.colorPaletteGreenBackground1,
    color: tokens.colorPaletteGreenForeground1,
  },
});

export const getTotalValues = (results: ResultsObject[], key: string) => {
  return results.reduce((acc: number, result) => {
    const monthlyInterest = result.accounts.reduce(
      (sum: number, account: PaymentObject) => {
        return sum + account[key];
      },
      0
    );
    return acc + monthlyInterest;
  }, 0);
};

function ResultsCard() {
  const styles = useStyles();
  const { results, dateEnd, accounts } = useContext(AccountsContext);
  const totalInterest = getTotalValues(results, "accruedInterest");
  const totalPayment = getTotalValues(results, "paymentAmount");
  const parsedAccounts = parseAccounts(accounts);
  const minPaymentResults = snowball(parsedAccounts, 0);
  const interestSaved = formatCurrency(
    minPaymentResults.totalInterestPaid - totalInterest
  );
  // console.log(minPaymentResults);

  return (
    <div className="accounts-card">
      <Card className={styles.card} appearance="filled-alternative">
        <CardHeader
          header={
            <div className="flex items-center justify-between w-full">
              <b>Results:</b>
            </div>
          }
        />

        <Divider />

        <div className="card-body text-sm">
          <div className="flex items-center justify-between w-full my-3.5">
            <InfoLabel info="The date when you'll be debt free.">
              <b>Debt Free Date:</b>
            </InfoLabel>
            <Tag appearance="outline" className={styles.tag}>
              {format(dateEnd, "MMM yyyy")}
            </Tag>
          </div>

          <div className="flex items-center justify-between w-full my-3.5">
            <InfoLabel info="The total principal and interest paid.">
              <b>Total Amount Paid:</b>
            </InfoLabel>
            <Tag appearance="outline" className={styles.tag}>
              {formatCurrency(totalPayment)}
            </Tag>
          </div>

          <div className="flex items-center justify-between w-full my-3.5">
            <InfoLabel info="The amount of interest you'll pay following repayment strategy.">
              <b>Interest Paid:</b>
            </InfoLabel>
            <Tag appearance="outline" className={styles.tag}>
              {formatCurrency(totalInterest)}
            </Tag>
          </div>

          <div className="flex items-center justify-between w-full my-3.5">
            <InfoLabel info="The amount saved by paying more than the minimum payment each month.">
              <b>Interest Saved:</b>
            </InfoLabel>
            <Tag appearance="outline" className={styles.tag}>
              {interestSaved}
            </Tag>
          </div>
        </div>
        <Divider />

        <CardFooter>
          <div className="flex items-center justify-between w-full">
            <Button icon={<ArrowReplyRegular />} className="w-full">
              See Payment Plan
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ResultsCard;

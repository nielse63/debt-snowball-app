import {
  Card,
  CardFooter,
  CardHeader,
  Divider,
  InfoLabel,
  Tag,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { format } from "date-fns";
import { useContext } from "react";
import formatCurrency from "../../helpers/formatCurrency";
import getTotalValues from "../../helpers/getTotalValues";
import { AccountsContext } from "../../state/AccountsContext";
import RepaymentPlan from "../RepaymentPlan";

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

function ResultsCard() {
  const styles = useStyles();
  const { results, dateEnd, accounts, interestSaved } =
    useContext(AccountsContext);
  const totalInterest = getTotalValues(results, "accruedInterest");
  const totalPayment = getTotalValues(results, "paymentAmount");

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
              {formatCurrency(interestSaved)}
            </Tag>
          </div>
        </div>

        <Divider />

        <CardFooter>
          <div className="flex items-center justify-between w-full">
            <RepaymentPlan data={results} accounts={accounts} />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ResultsCard;

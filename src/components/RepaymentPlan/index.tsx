import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Table,
  TableBody,
  TableCell,
  TableCellLayout,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@fluentui/react-components";
import { ClipboardTaskListRtlRegular } from "@fluentui/react-icons";
import { addMonths, format } from "date-fns";
import formatCurrency from "../../helpers/formatCurrency";
import isNumeric from "../../helpers/isNumeric";

import "./styles.css";

interface RepaymentPlanProps {
  data: ResultsObject[];
  accounts: AccountItem[];
}

function RepaymentPlan(props: RepaymentPlanProps) {
  const columns = [
    { columnKey: "date", label: "Date" },
    { columnKey: "balance", label: "Total Balance" },
    { columnKey: "interest", label: "Interest Accrued" },
    { columnKey: "payment", label: "Total Payment" },
  ];
  props.accounts.forEach((account, i) => {
    columns.splice(i + 1, 0, {
      columnKey: account.name.value,
      label: account.name.value,
    });
  });
  const date = new Date();
  const rows = props.data.map(({ balance, accounts }, i) => {
    const interest = accounts.reduce((acc, account) => {
      return acc + account.accruedInterest;
    }, 0);
    const payment = accounts.reduce((acc, account) => {
      return acc + account.paymentAmount;
    }, 0);
    const output: { [key: string]: any } = {
      date: format(addMonths(date, i), "MMM yyyy"),
    };
    accounts.forEach(({ name, paymentAmount }) => {
      output[name] = paymentAmount > 0 ? paymentAmount : "";
    });
    return Object.entries({
      ...output,
      balance,
      interest,
      payment,
    }).reduce((acc, [key, value]) => {
      return {
        ...acc,
        [key]: isNumeric(value) ? formatCurrency(value) : value,
      };
    }, {});
  });

  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button
          icon={<ClipboardTaskListRtlRegular />}
          className="w-full"
          appearance="primary"
        >
          See Payment Plan
        </Button>
      </DialogTrigger>

      <DialogSurface style={{ maxWidth: "80vw" }}>
        <DialogBody>
          <DialogTitle>Repayment Plan</DialogTitle>
          <DialogContent>
            <Table>
              <TableHeader>
                <TableRow>
                  {columns.map((column) => {
                    const key = `column-${column.columnKey}`;
                    return (
                      <TableHeaderCell key={key}>
                        <b>{column.label}</b>
                      </TableHeaderCell>
                    );
                  })}
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row, index) => {
                  const rowKey = `row-${index}`;
                  return (
                    <TableRow key={rowKey}>
                      {Object.entries(row).map(([key, value], i) => {
                        const cellKey = `cell-${index}-${i}-${key}`;
                        return (
                          <TableCell key={cellKey}>
                            <TableCellLayout>{value as string}</TableCellLayout>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}

export default RepaymentPlan;

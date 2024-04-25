import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableCellLayout,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@fluentui/react-components";
import { DeleteRegular } from "@fluentui/react-icons";
import items from "./items";

import "./styles.css";

const columns = [
  { columnKey: "name", label: "Name" },
  { columnKey: "balance", label: "Current Balance" },
  { columnKey: "interestRate", label: "Interest Rate (%)" },
  { columnKey: "minPayment", label: "Min. Monthly Payment" },
  { columnKey: "action", label: "" },
];

function AccountsTable() {
  return (
    <div className="accounts-table">
      <Table arial-label="Default table">
        <TableHeader>
          <TableRow>
            {columns.map((column) => {
              const classsName =
                column.columnKey === "action" ? "action-cell" : "";
              return (
                <TableHeaderCell key={column.columnKey} className={classsName}>
                  <b>{column.label}</b>
                </TableHeaderCell>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.name.label}>
              <TableCell>
                <TableCellLayout>{item.name.label}</TableCellLayout>
              </TableCell>
              <TableCell>
                <TableCellLayout>{item.balance.label}</TableCellLayout>
              </TableCell>
              <TableCell>{item.interestRate.label}</TableCell>
              <TableCell>
                <TableCellLayout>{item.minPayment.label}</TableCellLayout>
              </TableCell>
              <TableCell className="action-cell">
                <TableCellLayout>
                  <Button icon={<DeleteRegular />} />
                </TableCellLayout>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AccountsTable;

import {
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@fluentui/react-components";

import "./styles.css";

const columns = [
  { columnKey: "name", label: "Name" },
  { columnKey: "balance", label: "Current Balance" },
  { columnKey: "interest", label: "Interest Rate (%)" },
  { columnKey: "minPayment", label: "Min. Monthly Payment" },
  { columnKey: "action", label: "" },
];

function AccountsTableHeader() {
  return (
    <TableHeader>
      <TableRow>
        {columns.map((column) => {
          const classsName = column.columnKey === "action" ? "action-cell" : "";
          return (
            <TableHeaderCell key={column.columnKey} className={classsName}>
              <b>{column.label}</b>
            </TableHeaderCell>
          );
        })}
      </TableRow>
    </TableHeader>
  );
}

export default AccountsTableHeader;

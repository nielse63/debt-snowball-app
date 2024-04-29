import {
  Button,
  Input,
  TableCell,
  TableCellLayout,
  TableRow,
} from "@fluentui/react-components";
import { DeleteRegular } from "@fluentui/react-icons";
import { useContext } from "react";
import formatCurrency from "../../helpers/formatCurrency";
import { AccountsContextDispatcher } from "../../state/AccountsContext";
import columns from "./columns";

import "./styles.css";

const parseValue = (key: string, value: string | number): string => {
  if (key === "balance") {
    return formatCurrency(value as number).replace("$", "");
  }
  if (key === "interest") {
    return (value as number).toFixed(2);
  }
  return value as string;
};

function AccountsTableRow(props: AccountsTableRowProps) {
  const { account, index } = props;
  const dispatch = useContext(AccountsContextDispatcher);

  const editAccount = (key: string, value: string | number) => {
    dispatch({
      type: "EDIT_ACCOUNT",
      payload: {
        key,
        value,
        index,
      },
    });
  };

  const handleZeroValueError = (key: string) => {
    const label = columns.find((column) => column.columnKey === key)?.label;
    dispatch({
      type: "ADD_ERROR",
      payload: {
        message: `Please enter a value greater than 0 for "${label}"`,
      },
    });
  };

  return (
    <TableRow key={`accounts-row-${index}`}>
      {Object.entries(account).map(([key, item]) => {
        const cellKey = `accounts-cell-${index}-${key}`;
        const value = parseValue(key, item?.value);
        const contentBefore = key === "balance" ? "$" : "";
        const contentAfter = key === "interest" ? "%" : "";
        const inputProps = {
          defaultValue: value,
          contentBefore,
          contentAfter,
        };

        return (
          <TableCell key={cellKey}>
            <TableCellLayout>
              <Input
                {...inputProps}
                onBlur={(event) => {
                  if (`${value}` === `${event.target.value}`) return;
                  const newValue =
                    key === "name"
                      ? event.target.value
                      : parseFloat(
                          event.target.value.replace(/,|[a-zA-Z]|\$/g, "")
                        );
                  if (
                    parseFloat(`${newValue}`) <= 0 &&
                    parseFloat(`${value}`) > 0
                  ) {
                    handleZeroValueError(key);
                    return;
                  }
                  editAccount(key, newValue);
                }}
              />
            </TableCellLayout>
          </TableCell>
        );
      })}
      <TableCell className="action-cell" align="center">
        <TableCellLayout>
          <Button
            icon={<DeleteRegular />}
            onClick={() => {
              dispatch({ type: "DELETE_ACCOUNT", payload: { index } });
            }}
          />
        </TableCellLayout>
      </TableCell>
    </TableRow>
  );
}

export default AccountsTableRow;

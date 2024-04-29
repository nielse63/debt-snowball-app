import {
  Button,
  Field,
  Input,
  TableCell,
  TableCellLayout,
  TableRow,
} from "@fluentui/react-components";
import { DeleteRegular } from "@fluentui/react-icons";
import { useContext, useState } from "react";
import formatCurrency from "../../helpers/formatCurrency";
import { AccountsContextDispatcher } from "../../state/AccountsContext";
import columns from "./columns";

import "./styles.css";

type RowErrors = string[];

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
  const [errors, setErrors] = useState([] as RowErrors);

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
        message: `"${label}" must be greater than 0.`,
        source: "AccountsTableRow",
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
          required: true,
        };
        const fieldValidationState = errors.includes(cellKey)
          ? "error"
          : "none";

        return (
          <TableCell key={cellKey}>
            <TableCellLayout>
              <Field validationState={fieldValidationState}>
                <Input
                  {...inputProps}
                  onBlur={(event) => {
                    const inputValue = event.target.value;
                    if (`${value}` === `${inputValue}`) {
                      if (inputValue && errors.includes(cellKey)) {
                        setErrors(errors.filter((error) => error !== cellKey));
                      }
                      return;
                    }
                    const label = columns.find(
                      (column) => column.columnKey === key
                    )?.label;
                    const newValue =
                      key === "name"
                        ? inputValue
                        : parseFloat(inputValue.replace(/,|[a-zA-Z]|\$/g, ""));

                    if (!newValue) {
                      if (!errors.includes(cellKey)) {
                        setErrors([...errors, cellKey]);
                      }
                      dispatch({
                        type: "ADD_ERROR",
                        payload: {
                          message: `${label} is required.`,
                          source: "AccountsTableRow",
                        },
                      });
                      return;
                    }
                    if (
                      parseFloat(`${newValue}`) <= 0 &&
                      parseFloat(`${value}`) > 0
                    ) {
                      if (!errors.includes(cellKey)) {
                        setErrors([...errors, cellKey]);
                      }
                      handleZeroValueError(key);
                      return;
                    }
                    setErrors(errors.filter((error) => error !== cellKey));
                    editAccount(key, newValue);
                  }}
                />
              </Field>
            </TableCellLayout>
          </TableCell>
        );
      })}
      <TableCell className="action-cell" align="center">
        <TableCellLayout>
          <Button
            icon={<DeleteRegular />}
            aria-label={`Delete account ${account.name.value}`}
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

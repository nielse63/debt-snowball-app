import { InputNumber } from "antd";
import { useContext, useState } from "react";
import { actionTypes } from "../../helpers/constants";
import { AccountsContextDispatcher } from "../../state/AccountsContext";
import type { BlurEvent, NumberInputProps } from "./types";

function NumberInput(props: NumberInputProps) {
  const dispatch = useContext(AccountsContextDispatcher);
  const { defaultValue, record, column } = props;
  const [hasError, setHasError] = useState(false);
  const status = hasError ? "error" : "";

  const onBlurHandler = (event: BlurEvent) => {
    const value = parseFloat(event.target.value);
    const errorId = `${record.key}-${column}`;
    if (!value) {
      setHasError(true);
      dispatch({
        type: actionTypes.ADD_ERROR,
        payload: {
          message: `Account ${column} cannot be empty`,
          id: errorId,
          source: "accountName",
        },
      });
      return;
    }
    if (value <= 0) {
      setHasError(true);
      dispatch({
        type: actionTypes.ADD_ERROR,
        payload: {
          message: `"${column}" must be greater than 0`,
          id: errorId,
          source: "accountName",
        },
      });
      return;
    }
    setHasError(false);
    dispatch({
      type: actionTypes.DISMISS_ERROR,
      payload: { id: errorId },
    });
    if (value === defaultValue) return;
    dispatch({
      type: actionTypes.EDIT_ACCOUNT,
      payload: {
        key: column,
        value,
        id: record.key,
      },
    });
  };

  return (
    <InputNumber
      className="w-full"
      // addonBefore="$"
      min={0}
      defaultValue={defaultValue}
      status={status}
      onBlur={onBlurHandler}
      {...props.options}
    />
  );
}

export default NumberInput;

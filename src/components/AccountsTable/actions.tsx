import type { BlurEvent, TextInputProps } from "./types";
import { actionTypes } from "../../helpers/constants";

export const onBlurHandler = (
  event: BlurEvent,
  props: TextInputProps,
  setHasError: Function,
  dispatch: Function
) => {
  const { record, column } = props;
  const { value } = event.target;
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
  setHasError(false);
  dispatch({
    type: actionTypes.DISMISS_ERROR,
    payload: { id: errorId },
  });
  dispatch({
    type: actionTypes.EDIT_ACCOUNT,
    payload: {
      key: column,
      value,
      id: record.key,
    },
  });
};

import catpialize from "lodash/capitalize";
import { actionTypes } from "../../helpers/constants";
import type { BlurEvent, InputProps } from "./types";

export const onBlurHandler = (
  event: BlurEvent,
  props: InputProps,
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
        message: `${catpialize(column)} cannot be empty`,
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
  // @ts-ignore
  if (`${value}` === `${record[column]}`) return;
  dispatch({
    type: actionTypes.EDIT_ACCOUNT,
    payload: {
      key: column,
      value,
      id: record.key,
    },
  });
};

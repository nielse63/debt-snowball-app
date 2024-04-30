import { Alert } from "antd";
import { useContext } from "react";
import { actionTypes } from "../../helpers/constants";
import { AccountsContextDispatcher } from "../../state/AccountsContext";

interface ErrorMessageProps {
  message: string;
  index?: number;
  id: string;
}

function ErrorMessage(props: ErrorMessageProps) {
  const dispatch = useContext(AccountsContextDispatcher);
  const dismissError = () => {
    dispatch({
      type: actionTypes.DISMISS_ERROR,
      payload: { id: props.id },
    });
  };

  return (
    <Alert
      message={props.message}
      type="error"
      closable
      onClose={dismissError}
      showIcon
    />
  );
}

export default ErrorMessage;

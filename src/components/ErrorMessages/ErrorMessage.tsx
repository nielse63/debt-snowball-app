import {
  Button,
  MessageBar,
  MessageBarActions,
  MessageBarBody,
} from "@fluentui/react-components";
import { DismissRegular } from "@fluentui/react-icons";
import { useContext } from "react";
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
      type: "DISMISS_ERROR",
      payload: { id: props.id },
    });
  };

  return (
    <MessageBar intent="error" politeness="assertive">
      <MessageBarBody>
        <b>{props.message}</b>
      </MessageBarBody>
      <MessageBarActions>
        <Button
          icon={<DismissRegular />}
          appearance="subtle"
          onClick={dismissError}
        />
      </MessageBarActions>
    </MessageBar>
  );
}

export default ErrorMessage;

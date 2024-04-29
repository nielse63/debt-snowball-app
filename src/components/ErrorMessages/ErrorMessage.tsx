import {
  Button,
  MessageBar,
  MessageBarActions,
  MessageBarBody,
} from "@fluentui/react-components";
import { DismissRegular } from "@fluentui/react-icons";

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage(props: ErrorMessageProps) {
  return (
    <MessageBar intent="error" politeness="assertive">
      <MessageBarBody>{props.message}</MessageBarBody>
      <MessageBarActions>
        <Button icon={<DismissRegular />} appearance="subtle" />
      </MessageBarActions>
    </MessageBar>
  );
}

export default ErrorMessage;

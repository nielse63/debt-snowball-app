import { useContext } from "react";
import { AccountsContext } from "../../state/AccountsContext";
import ErrorMessage from "./ErrorMessage";

import "./styles.css";

function ErrorMessages() {
  const { errors } = useContext(AccountsContext);

  if (!errors.length) return null;

  return (
    <div className="error-messages">
      {errors.map((error, index) => (
        <ErrorMessage key={`error-message-${index}`} message={error} />
      ))}
    </div>
  );
}

export default ErrorMessages;

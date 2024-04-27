import { TableBody } from "@fluentui/react-components";
import { useContext } from "react";
import { AccountsContext } from "../../state/AccountsContext";
import AccountsTableRow from "./AccountsTableRow";

import "./styles.css";

function AccountsTableBody() {
  const state = useContext(AccountsContext);
  const { accounts } = state;

  return (
    <TableBody>
      {accounts.map((item, index) => {
        return (
          <AccountsTableRow
            key={`accounts-row-${index}`}
            account={item}
            index={index}
          />
        );
      })}
    </TableBody>
  );
}

export default AccountsTableBody;

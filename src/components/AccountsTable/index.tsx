import { Button, Table } from "@fluentui/react-components";
import { AddRegular } from "@fluentui/react-icons";
import { useContext } from "react";
import { AccountsContextDispatcher } from "../../state/AccountsContext";
import AccountsTableBody from "./AccountsTableBody";
import AccountsTableHeader from "./AccountsTableHeader";

import "./styles.css";

function AccountsTable() {
  const dispatch = useContext(AccountsContextDispatcher);

  return (
    <div className="accounts-table">
      <Table arial-label="Default table">
        <AccountsTableHeader />
        <AccountsTableBody />
      </Table>
      <div className="mt-4 px-4 text-right">
        <Button
          onClick={() => dispatch({ type: "ADD_ACCOUNT" })}
          icon={<AddRegular />}
        >
          Add Account
        </Button>
      </div>
    </div>
  );
}

export default AccountsTable;

// import { Button } from "@fluentui/react-components";
import { AddRegular } from "@fluentui/react-icons";
import { useContext } from "react";
import { AccountsContextDispatcher } from "../../state/AccountsContext";
// import AccountsTableBody from "./AccountsTableBody";
// import AccountsTableHeader from "./AccountsTableHeader";
import { Table, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import data from "../../data/accounts";
import columns from "./columns";

import "./styles.css";

function AccountsTable() {
  const dispatch = useContext(AccountsContextDispatcher);

  return (
    <div className="accounts-table">
      {/* <Table arial-label="Default table">
        <AccountsTableHeader />
        <AccountsTableBody />
      </Table> */}
      <Table columns={columns} dataSource={data} pagination={false} />
      <div className="mt-4 text-right">
        <Button
          onClick={() => dispatch({ type: "ADD_ACCOUNT" })}
          icon={<PlusCircleOutlined />}
        >
          Add Account
        </Button>
      </div>
    </div>
  );
}

export default AccountsTable;

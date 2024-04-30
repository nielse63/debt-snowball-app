import { Table } from "antd";
import { useContext } from "react";
import { AccountsContext } from "../../state/AccountsContext";
import columns from "./columns";

import "./styles.css";

function AccountsTable() {
  const { accounts } = useContext(AccountsContext);

  return (
    <div className="accounts-table">
      <Table columns={columns} dataSource={accounts} pagination={false} />
    </div>
  );
}

export default AccountsTable;

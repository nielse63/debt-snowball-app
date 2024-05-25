import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Flex, Table } from "antd";
import { useContext } from "react";
import {
  AccountsContext,
  AccountsContextDispatcher,
} from "../../state/AccountsContext";
import columns from "./columns";

import "./styles.css";

function AccountsTable() {
  const { accounts } = useContext(AccountsContext);
  const dispatch = useContext(AccountsContextDispatcher);

  return (
    <div className="accounts">
      <div className="accounts-table">
        <Table columns={columns} dataSource={accounts} pagination={false} />
      </div>
      <Flex justify="end">
        <Button
          onClick={() => dispatch({ type: "ADD_ACCOUNT" })}
          icon={<PlusCircleOutlined />}
          className="mt-4"
          type="primary"
        >
          Add Account
        </Button>
      </Flex>
    </div>
  );
}

export default AccountsTable;

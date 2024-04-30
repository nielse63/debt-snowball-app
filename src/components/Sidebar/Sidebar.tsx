import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useContext } from "react";
import { AccountsContextDispatcher } from "../../state/AccountsContext";
import FormCard from "../FormCard";

import "./styles.css";

function Sidebar() {
  const dispatch = useContext(AccountsContextDispatcher);

  return (
    <aside className="sidebar">
      <FormCard />
      <Button
        onClick={() => dispatch({ type: "ADD_ACCOUNT" })}
        icon={<PlusCircleOutlined />}
        className="mt-4"
        type="primary"
      >
        Add Account
      </Button>
    </aside>
  );
}

export default Sidebar;

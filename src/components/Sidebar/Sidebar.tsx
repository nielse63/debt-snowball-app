import { CalculatorOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useContext } from "react";
import { actionTypes } from "../../helpers/constants";
import { AccountsContextDispatcher } from "../../state/AccountsContext";
import FormCard from "../FormCard";

import "./styles.css";

function Sidebar() {
  const dispatch = useContext(AccountsContextDispatcher);

  return (
    <aside className="sidebar">
      <FormCard />
      <Button
        onClick={() => dispatch({ type: actionTypes.CALCULATE })}
        icon={<CalculatorOutlined />}
        className="mt-4"
        type="primary"
      >
        Calculate
      </Button>
    </aside>
  );
}

export default Sidebar;

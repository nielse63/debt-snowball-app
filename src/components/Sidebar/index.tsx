import { Button } from "@fluentui/react-components";
import { AddRegular, CalculatorRegular } from "@fluentui/react-icons";
import FormCard from "../FormCard";
// import ResultsCard from "../ResultsCard";

import "./styles.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <FormCard />

      <div>
        <p>
          <Button icon={<AddRegular />} className="w-full">
            Add Account
          </Button>
        </p>
        <p>
          <Button
            appearance="primary"
            icon={<CalculatorRegular />}
            className="w-full"
          >
            Calculate
          </Button>
        </p>
      </div>

      {/* <ResultsCard /> */}
    </aside>
  );
}

export default Sidebar;

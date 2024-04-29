import { Divider } from "@fluentui/react-components";
import FormCard from "../FormCard";
import ResultsCard from "../ResultsCard";

import "./styles.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <FormCard />

      <Divider />

      <ResultsCard />
    </aside>
  );
}

export default Sidebar;

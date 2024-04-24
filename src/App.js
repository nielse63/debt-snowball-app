import { Button } from "@fluentui/react-components";
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      {/* header */}
      <header className="header">
        <div className="nav">
          <div className="nav-section">
            <img src={logo} className="logo" alt="logo" />
            <p>Debt Snowball Calculator</p>
          </div>
        </div>
      </header>

      {/* main content */}
      <main className="main">
        <div className="grid">
          <div className="column">
            <Button appearance="primary">Get started</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

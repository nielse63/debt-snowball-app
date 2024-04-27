import "./App.css";
import AccountsTable from "./components/AccountsTable";
import Chart from "./components/Chart";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { AccountsProvider } from "./state/AccountsContext";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />

      {/* main content */}
      <main className="main">
        <div className="grid">
          <AccountsProvider>
            <div className="column col-a">
              <Chart />
            </div>
            <div className="column col-b">
              <Sidebar />
            </div>
            <div className="column col-c">
              <AccountsTable />
            </div>
          </AccountsProvider>
          {/* <div className="row">
            <div className="column">
              <Chart />
            </div>

            <div className="column">
              <Sidebar />
            </div>
          </div>
          <div className="row">
            <AccountsTable />
          </div> */}
        </div>
      </main>
    </div>
  );
}

export default App;

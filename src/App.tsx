import "./App.css";
import AccountsTable from "./components/AccountsTable";
import Chart from "./components/Chart";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { AccountsProvider } from "./state/AccountsContext";
import ErrorMessages from "./components/ErrorMessages";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />

      <AccountsProvider>
        {/* main content */}
        <main className="main">
          <ErrorMessages />

          <div className="grid">
            <div className="column col-a">
              <Chart />
            </div>
            <div className="column col-b">
              <Sidebar />
            </div>
            <div className="column col-c">
              <AccountsTable />
            </div>
          </div>
        </main>
      </AccountsProvider>
    </div>
  );
}

export default App;

import "./App.css";
import Chart from "./components/Chart";
import { default as AppHeader } from "./components/Header";
import { AccountsProvider } from "./state/AccountsContext";
import { Flex, Layout } from "antd";
import AccountsTable from "./components/AccountsTable";
import ErrorMessages from "./components/ErrorMessages";
import ResultsCard from "./components/ResultsCard";
import Sidebar from "./components/Sidebar";

const { Header } = Layout;

function App() {
  return (
    <div className="app">
      <Layout>
        <Header className="header">
          <AppHeader />
        </Header>
        <AccountsProvider>
          <main>
            <ErrorMessages />
            <Flex className="row">
              <div className="col col-1">
                <AccountsTable />
              </div>
              <div className="col col-2">
                <Sidebar />
              </div>
            </Flex>
            <Flex className="row">
              <div className="col col-1">
                <Chart />
              </div>
              <div className="col col-2">
                <ResultsCard />
              </div>
            </Flex>
          </main>
        </AccountsProvider>
      </Layout>
    </div>
  );
}

export default App;

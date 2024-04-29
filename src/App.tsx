import * as React from "react";
import "./App.css";
// import AccountsTable from "./components/AccountsTable";
import Chart from "./components/Chart";
import { default as AppHeader } from "./components/Header";
// import Sidebar from "./components/Sidebar";
import { AccountsProvider } from "./state/AccountsContext";
// import ErrorMessages from "./components/ErrorMessages";
// import FormCard from "./components/FormCard";
import { Layout } from "antd";
import AccountsTable from "./components/AccountsTable";

const { Header, Content, Sider } = Layout;

const headerStyle: React.CSSProperties = {
  // textAlign: "center",
  color: "#fff",
  height: "4rem",
  // paddingInline: 48,
  // lineHeight: "64px",
  // backgroundColor: "#1f2937",
};

const siderStyle: React.CSSProperties = {
  // textAlign: "center",
  // lineHeight: "120px",
  // color: "#fff",
  backgroundColor: "#1677ff",
};

function App() {
  return (
    <div className="app">
      <Layout>
        <Header style={headerStyle} className="header">
          <AppHeader />
        </Header>
        <Layout>
          <AccountsProvider>
            <Content className="main">
              <AccountsTable />
              <Chart />
            </Content>
            <Sider width="25%" style={siderStyle}>
              Sider
            </Sider>
          </AccountsProvider>
        </Layout>
      </Layout>
      {/* <Header />

      <AccountsProvider>
        <main className="main">
          <ErrorMessages />

          <div className="grid">
            <div className="column col-c">
              <AccountsTable />
            </div>
            <div className="column col-d">
              <FormCard />
            </div>
            <div className="column col-a">
              <Chart />
            </div>
            <div className="column col-b">
              <Sidebar />
            </div>
          </div>
        </main>
      </AccountsProvider> */}
    </div>
  );
}

export default App;

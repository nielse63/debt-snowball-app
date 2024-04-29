// import { FluentProvider } from "@fluentui/react-components";
import ReactDOM from "react-dom/client";
import "tailwindcss/dist/base.css";
import "tailwindcss/dist/components.css";
import "tailwindcss/dist/utilities.css";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import theme from "./theme";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider
    theme={{
      token: {
        Layout: {
          headerBg: "#1f2937",
          headerPadding: "0 2rem",
          fontSize: "1rem",
          fontSizeBase: "16px",
        },
      },
    }}
  >
    <App />
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

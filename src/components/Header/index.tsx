import { Link } from "@fluentui/react-components";
import github from "../../assets/github.svg";
import investopedia from "../../assets/investopedia.svg";
import logo from "../../assets/logo.svg";

import "./styles.css";

function Header() {
  return (
    <header className="header bg-gray-800 text-white">
      <div className="nav">
        <div className="nav-section">
          <img src={logo} className="logo" alt="logo" />
          <p>Debt Snowball Calculator</p>
        </div>
        <div className="nav-section">
          <Link
            href="https://www.investopedia.com/terms/s/snowball.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={investopedia}
              alt="Learn more on Investopedia"
              height="2.5rem"
            />
          </Link>
          <Link
            href="https://github.com/nielse63/node-debt-snowball"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="View on GitHub" height="2.5rem" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
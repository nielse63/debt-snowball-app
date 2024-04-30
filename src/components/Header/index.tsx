import github from "../../assets/github.svg";
import investopedia from "../../assets/investopedia.svg";
import logo from "../../assets/logo.svg";

import "./styles.css";

function Header() {
  return (
    <div className="nav">
      <div className="nav-section">
        <a href="/" className="logo-link">
          <img src={logo} className="logo" alt="logo" />
          <p>Debt Snowball Calculator</p>
        </a>
      </div>
      <div className="nav-section">
        <a
          href="https://www.investopedia.com/terms/s/snowball.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={investopedia}
            alt="Learn more on Investopedia"
            className="header-img"
          />
        </a>
        <a
          href="https://github.com/nielse63/node-debt-snowball"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="View on GitHub" className="header-img" />
        </a>
      </div>
    </div>
  );
}

export default Header;

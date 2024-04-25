import logo from "../../assets/logo2.svg";

import "./styles.css";

function Header() {
  // const styles = useStyles();
  return (
    <header className="header bg-gray-800 text-white">
      <div className="nav">
        <div className="nav-section">
          <img src={logo} className="logo" alt="logo" />
          <p>Debt Snowball Calculator</p>
        </div>
      </div>
    </header>
  );
}

export default Header;

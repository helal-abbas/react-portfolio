import NavLinks from "./NavLinks";
import logo from "../images/logo.svg";
import logo1 from "../images/1177422.png"
import logo2 from "../images/logo2.jpg"

const Header = () => {
  return (
    <header className="header">
      
      <NavLinks />
      <img className="logo" src={logo2} alt="Michael Yeates' Logo" />
    </header>
  );
};

export default Header;

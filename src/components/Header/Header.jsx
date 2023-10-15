import "./Header.css";
import { Fragment } from "react";
const Header = () => {
  return (
    <Fragment>
      <nav>
        <ol>
          <li>home</li>
          <li>about us</li>
          <li>projects</li>
          <li>contact us</li>
        </ol>
      </nav>
    </Fragment>
  );
};
// function Header() {}
export default Header;

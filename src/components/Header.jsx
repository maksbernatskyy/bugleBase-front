import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

export default function Header() {
  return (
    <>
      <header>
        <div>
          <Link to={'/'}>
            <img id="logo" src={logo} alt="Logo" />
          </Link>
        </div>
      </header>
    </>
  );
}

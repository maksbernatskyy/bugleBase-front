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

        <nav className="nav-menu">
            <Link to='/games' className="nav-link">Catalogo</Link>
            <Link to='/chisiamo' className="nav-link">Chi Siamo</Link>
        </nav>
      </header>
    </>
  );
}

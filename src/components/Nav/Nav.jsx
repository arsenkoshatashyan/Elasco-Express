import "./Nav.scss";
import { Link, Outlet } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="nav__content">
          <div className="nav__content-logo">
            <Link to="/">
              <img src="./images/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="nav__content-links">
            <ul>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/news">News</Link>
            </ul>
          </div>
          <div className="nav__content-settings">
            <button>Contact Us</button>
            <select name="languages">
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="am">AM</option>
            </select>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

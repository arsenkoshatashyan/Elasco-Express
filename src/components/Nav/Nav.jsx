import { Link, Outlet } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  return (
    <>
      <nav className="Nav">
        <div className="Nav__content">
          <div className="Nav__content-logo">
            <Link to="/">
              <img src="./images/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="Nav__content-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
            </ul>
          </div>
          <div className="Nav__content-settings">
            <Link to="/contact-us">
              <button>Contact Us</button>
            </Link>
            <select name="languages">
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="am">ARM</option>
            </select>
          </div>
          <div className="burger">
            <i className="bi bi-list"></i>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

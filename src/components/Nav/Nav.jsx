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
          <div className="nav__content-settings">
            <Link to="/contact-us">
              <button>Contact Us</button>
            </Link>
            <select name="languages">
              <option value="en">EN</option>
              <option value="ru">Рус</option>
              <option value="am">Հայ</option>
            </select>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

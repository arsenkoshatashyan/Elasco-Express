import "./Nav.scss";
export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__content">
        <div className="nav__content-logo">
          <img src="./images/logo.svg" alt="logo" />
        </div>
        <div className="nav__content-links">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>News</li>
          </ul>
        </div>
        <div className="nav__content-settings">
          <button>Contact Us</button>
          <select name="languages">
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

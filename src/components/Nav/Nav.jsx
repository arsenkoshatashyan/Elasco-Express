import { Link, Outlet } from "react-router-dom";
import "./Nav.scss";
import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {open == false ? (
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
              <i onClick={() => setOpen(true)} className="bi bi-list"></i>
            </div>
          </div>
        </nav>
      ) : (
        <div className="mobileNav" ref={mobileNavRef}>
          <nav className={`BurgerMenu ${open ? "BurgerMenu__active" : ""}`}>
            <div className="BurgerMenu__header">
              <div className="BurgerMenu__close">
                <button onClick={() => setOpen(false)} className="close-btn">
                  X
                </button>
              </div>
            </div>
            <div className="BurgerMenu__content-links">
              <ul>
                <li onClick={() => setOpen(false)}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link to="/about">About Us</Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link to="/services">Services</Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link to="/news">News</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )}
      <Outlet />
    </>
  );
}

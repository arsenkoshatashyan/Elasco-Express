import { Link, Outlet, useLocation } from "react-router-dom";
import "./Nav.scss";
import { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState("");
  const mobileNavRef = useRef(null);
  const { pathname } = useLocation();

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

  useEffect(() => {
    setActivePage(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {open === false ? (
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
                  <Link to="/" className={activePage === "/" ? "active" : ""}>
                    {t("nav.home")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={activePage === "/about" ? "active" : ""}
                  >
                    {t("nav.about_us")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className={activePage === "/services" ? "active" : ""}
                  >
                    {t("nav.services")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/news"
                    className={activePage === "/news" ? "active" : ""}
                  >
                    {t("nav.news")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="Nav__content-settings">
              <Link to="/contact-us">
                <button
                  className={activePage === "/contact-us" ? "active" : ""}
                >
                  {t("nav.contact_us")}
                </button>
              </Link>
              <i className="bi bi-globe">
                <select
                  onChange={(e) => changeLanguage(e.target.value)}
                  name="languages"
                >
                  <option value="en">ENG</option>
                  <option value="ru">РУС</option>
                  <option value="am">ՀԱՅ</option>
                </select>
              </i>
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
                <IoClose onClick={() => setOpen(false)} className="close-btn" />
              </div>
            </div>
            <div className="BurgerMenu__content-links">
              <ul>
                <li onClick={() => setOpen(false)}>
                  <Link to="/" className={activePage === "/" ? "active" : ""}>
                    {t("nav.home")}
                  </Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link
                    to="/about"
                    className={activePage === "/about" ? "active" : ""}
                  >
                    {t("nav.about_us")}
                  </Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link
                    to="/services"
                    className={activePage === "/services" ? "active" : ""}
                  >
                    {t("nav.services")}
                  </Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link
                    to="/news"
                    className={activePage === "/news" ? "active" : ""}
                  >
                    {t("nav.news")}
                  </Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link
                    to="/contact-us"
                    className={activePage === "/contact-us" ? "active" : ""}
                  >
                    {t("nav.contact_us")}
                  </Link>
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

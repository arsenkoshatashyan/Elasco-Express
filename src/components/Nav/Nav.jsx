// import { Link, Outlet, useLocation } from "react-router-dom";
// import "./Nav.scss";
// import { useState, useEffect, useRef } from "react";
// import { IoClose } from "react-icons/io5";
// import { useTranslation } from "react-i18next";
// export default function Nav() {
//   const { t, i18n } = useTranslation();
//   const [open, setOpen] = useState(false);
//   const [activePage, setActivePage] = useState("");
//   const mobileNavRef = useRef(null);
//   const { pathname } = useLocation();
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         mobileNavRef.current &&
//         !mobileNavRef.current.contains(event.target)
//       ) {
//         setOpen(false);
//       }
//     };

//     if (open) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [open]);

//   useEffect(() => {
//     setActivePage(pathname);
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <>
//       {open === false ? (
//         <nav className="Nav">
//           <div className="Nav__content">
//             <div className="burger">
//               <i onClick={() => setOpen(true)} className="bi bi-list"></i>
//             </div>
//             <div className="Nav__content-logo">
//               <Link to="/">
//                 <img src="./images/logo.svg" alt="logo" />
//               </Link>
//             </div>
//             <div className="Nav__content-links">
//               <ul>
//                 <li>
//                   <Link to="/" className={activePage === "/" ? "active" : ""}>
//                     {t("nav.home")}
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/about"
//                     className={activePage === "/about" ? "active" : ""}
//                   >
//                     {t("nav.about_us")}
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/services"
//                     className={activePage === "/services" ? "active" : ""}
//                   >
//                     {t("nav.services")}
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/news"
//                     className={activePage === "/news" ? "active" : ""}
//                   >
//                     {t("nav.news")}
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="Nav__content-settings">
//               <Link to="/contact-us">
//                 <button
//                   className={activePage === "/contact-us" ? "active" : ""}
//                 >
//                   {t("nav.contact_us")}
//                 </button>
//               </Link>

//               <select
//                 onChange={(e) => changeLanguage(e.target.value)}
//                 name="languages"
//               >
//                 <option value="en">EN</option>
//                 <option value="ru">RU</option>
//                 <option value="am">ARM</option>
//               </select>
//             </div>
//           </div>
//         </nav>
//       ) : (
//         <div className="mobileNav" ref={mobileNavRef}>
//           <nav className={`BurgerMenu ${open ? "BurgerMenu__active" : ""}`}>
//             <div className="BurgerMenu__header">
//               <div className="BurgerMenu__close">
//                 <IoClose onClick={() => setOpen(false)} className="close-btn" />
//               </div>
//             </div>
//             <div className="BurgerMenu__content-links">
//               <ul>
//                 <li onClick={() => setOpen(false)}>
//                   <Link to="/" className={activePage === "/" ? "active" : ""}>
//                     {t("nav.home")}
//                   </Link>
//                 </li>
//                 <li onClick={() => setOpen(false)}>
//                   <Link
//                     to="/about"
//                     className={activePage === "/about" ? "active" : ""}
//                   >
//                     {t("nav.about_us")}
//                   </Link>
//                 </li>
//                 <li onClick={() => setOpen(false)}>
//                   <Link
//                     to="/services"
//                     className={activePage === "/services" ? "active" : ""}
//                   >
//                     {t("nav.services")}
//                   </Link>
//                 </li>
//                 <li onClick={() => setOpen(false)}>
//                   <Link
//                     to="/news"
//                     className={activePage === "/news" ? "active" : ""}
//                   >
//                     {t("nav.news")}
//                   </Link>
//                 </li>
//                 <li onClick={() => setOpen(false)}>
//                   <Link
//                     to="/contact-us"
//                     className={activePage === "/contact-us" ? "active" : ""}
//                   >
//                     {t("nav.contact_us")}
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//       )}
//       <Outlet />
//     </>
//   );
// }
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Nav.scss";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState("");
  const mobileNavRef = useRef(null);
  const { pathname } = useLocation();

  //   const handleClickOutside = (event) => {
  //     if (
  //       mobileNavRef.current &&
  //       !mobileNavRef.current.contains(event.target)
  //     ) {
  //       setOpen(false);
  //     }
  //   };

  //   if (open) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [open]);

  useEffect(() => {
    setActivePage(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <nav className="Nav">
        <div className="Nav__content">
          <div className="burger">
            <i onClick={() => setOpen(!open)} className="bi bi-list"></i>
          </div>
          <div className="Nav__content-logo">
            <Link to="/">
              <img src="./images/logo.png" alt="logo" />
              <img src="./images/logoTitle.svg" alt="logo" />
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
              <button className={activePage === "/contact-us" ? "active" : ""}>
                {t("nav.contact_us")}
              </button>
            </Link>

            <select
              onChange={(e) => changeLanguage(e.target.value)}
              name="languages"
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="am">ARM</option>
            </select>
          </div>
        </div>
      </nav>

      {open && (
        <div className="mobileNav" ref={mobileNavRef}>
          <nav className="BurgerMenu">
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
            <div className="BurgerMenu__content-bottom">
              <img
                src="./images/truck.svg"
                alt="car"
                className="BurgerMenu__content-bottom-car"
              />
              <div className="BurgerMenu__content-bottom-text">
                <h2>{t("footer.advice")}</h2>
                <p>{t("footer.consultation")}</p>
              </div>
              <form action="https://api.web3forms.com/submit" method="POST">
                <input
                  type="hidden"
                  name="access_key"
                  value="4b1f1ed7-b2f9-48e1-a1cb-48650a928aa1"
                />
                <input
                  type="tel"
                  placeholder={t("footer.inputText")}
                  name="Phone-number"
                  required
                />
                <br />
                <button>{t("footer.callBack")}</button>
              </form>
              <div className="BurgerMenu__content-bottom-socials">
                <a href="https://msng.link/o/?37498555378=vi">
                  <img src="./images/viber.png" alt="viber" />
                </a>
                <a href="https://www.instagram.com/elasco.am/profilecard/?igsh=MXZrbDVpemwwaGtlaw==">
                  <img src="./images/instagram.svg" alt="instagram" />
                </a>
                <a href="tel:+37498555378">
                  <img src="./images/tg.svg" alt="telegram" />
                </a>
                <a href="https://www.facebook.com/ElascoTransport?mibextid=ZbWKwL">
                  <img src="./images/facebook.svg" alt="facebook" />
                </a>

                <a href="https://wa.me/37498555378">
                  <img src="./images/whatsapp.png" alt="wp" />
                </a>
              </div>
            </div>
            {/* <div className="copyrighting">
              <p className="">{t("footer.copyright")}</p>
            </div> */}
          </nav>
        </div>
      )}

      <Outlet />
    </>
  );
}

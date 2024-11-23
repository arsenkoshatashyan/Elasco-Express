import "./Footer.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="Footer">
      <div className="Footer__content">
        <div className="Footer__content-left">
          <div className="Footer__content-left-truck">
            <img src="./images/truck.svg" alt="truck" />
            <p>{t("footer.description")}</p>
          </div>
          <div className="Footer__content-left-socials">
            <a href="https://twitter.com/elascoexpress">
              <img src="./images/x.svg" alt="x" />
            </a>
            <a href="https://www.instagram.com/elasco_express?igsh=MTNlcDgzMTg1Njl6">
              <img src="./images/instagram.svg" alt="instagram" />
            </a>
            <a href="https://t.me/elasco24">
              <img src="./images/tg.svg" alt="telegram" />
            </a>
            <a href="https://www.facebook.com/ElascoTransport/">
              <img src="./images/facebook.svg" alt="facebook" />
            </a>
          </div>
        </div>
        <div className="Footer__content-center">
          <ul>
            <li>
              <Link to="/">{t("footer.home")}</Link>
            </li>
            <li>
              <Link to="/about">{t("footer.about")}</Link>
            </li>
            <li>
              <Link to="/services">{t("footer.services")}</Link>
            </li>
            <li>
              <Link to="/news">{t("footer.news")}</Link>
            </li>
          </ul>
        </div>
        <div className="Footer__content-right">
          <div className="Footer__content-right-title">
            <h2>{t("footer.advice")}</h2>
            <p>{t("footer.consultation")}</p>
          </div>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="90d4ff81-22a6-4ea2-8021-1173977264a8"
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
        </div>
      </div>
      <hr />
      <p>{t("footer.copyright")}</p>
    </footer>
  );
}

import "./About.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="About">
      <div className="About__content">
        <div className="About__content-image">
          <img src="./images/HpA.png" alt="about" />
        </div>
        <div className="About__content-text">
          <h1>{t("about.title")}</h1>
          <h3>{t("about.description_1")}</h3>
          <p>{t("about.description_2")}</p>
          <Link to="/about">
            <button>{t("about.more_about")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

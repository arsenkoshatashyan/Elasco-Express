import { Link } from "react-router-dom";
import "./Logistic.scss";
import { useTranslation } from "react-i18next";

export default function Logistic() {
  const { t } = useTranslation();

  return (
    <div className="Logistic">
      <div className="Logistic__content">
        <div className="Logistic__content-about">
          <h3>{t("logistic.fastest_secured")}</h3>
          <h1>{t("logistic.solutions")}</h1>
          <p>{t("logistic.description")}</p>
          <Link to="/services">
            <button>{t("logistic.services_button")}</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

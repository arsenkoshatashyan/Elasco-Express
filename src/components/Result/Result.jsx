import "./Result.scss";
import { useTranslation } from "react-i18next";

export default function Result() {
  const { t } = useTranslation();

  return (
    <div className="Result">
      <div className="Result__content">
        <ul>
          <li>
            4000+
            <p>{t("result.satisfied_customers")}</p>
          </li>
          <li>
            12
            <p>{t("result.years_experience")}</p>
          </li>
          <li>
            100+
            <p>{t("result.trusted_partners")}</p>
          </li>
          <li>
            98%
            <p>{t("result.satisfaction_rating")}</p>
          </li>
         
        </ul>
        <img src="../../../images/result2.png" alt="result" />
      </div>
    </div>
  );
}

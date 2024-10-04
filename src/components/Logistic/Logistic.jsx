// import { Link } from "react-router-dom";
// import "./Logistic.scss";

// export default function Logistic() {
//   return (
//     <div className="Logistic">
//       <div className="Logistic__content">
//         <div className="Logistic__content-about">
//           <h3>FASTEST AND SECURED</h3>
//           <h1>LOGISTIC SOLUTIONS</h1>
//           <p>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text
//             ever since the 1500s.
//           </p>
//           <Link to="/services">
//             <button>SERVICES</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
import { Link } from "react-router-dom";
import "./Logistic.scss";
import { useTranslation } from "react-i18next"; // Импортируем хук

export default function Logistic() {
  const { t } = useTranslation(); // Используем хук

  return (
    <div className="Logistic">
      <div className="Logistic__content">
        <div className="Logistic__content-about">
          <h3>{t("logistic.fastest_secured")}</h3> {/* Перевод заголовка */}
          <h1>{t("logistic.solutions")}</h1> {/* Перевод подзаголовка */}
          <p>{t("logistic.description")}</p> {/* Перевод описания */}
          <Link to="/services">
            <button>{t("logistic.services_button")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

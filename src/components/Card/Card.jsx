import "./Card.scss";
import { useTranslation } from "react-i18next";

export default function Card() {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      url: "/images/card1.svg",
      description: t("card.features.0"),
    },
    {
      id: 2,
      url: "/images/card2.svg",
      description: t("card.features.1"),
    },
    {
      id: 3,
      url: "/images/card3.svg",
      description: t("card.features.2"),
    },
    {
      id: 4,
      url: "/images/card4.svg",
      description: t("card.features.3"),
    },
    {
      id: 5,
      url: "/images/card5.svg",
      description: t("card.features.4"),
    },
  ];

  return (
    <div className="Card">
      <div className="Card__content">
        <div className="Card__content-title">
          <h2>{t("card.title")}</h2>
          <p>{t("card.description")}</p>
        </div>
        <div className="Card__content-items">
          {data.map((elem) => (
            <div key={elem.id} className="Card__content-items-item">
              <img src={elem.url} alt="image" />
              <p>{elem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

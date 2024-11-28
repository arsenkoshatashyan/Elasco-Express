import { useState } from "react";
import { Link } from "react-router-dom";
import "./Service.scss";
import { useTranslation } from "react-i18next";

const card = [
  {
    id: 1,
    image: "./images/service1.svg",
    url: "./images/icon1.svg",
  },
  {
    id: 2,
    image: "./images/service2.svg",
    url: "./images/icon2.svg",
  },
  {
    id: 3,
    image: "./images/service3.svg",
    url: "./images/icon3.svg",
  },
  {
    id: 4,
    image: "./images/service4.svg",
    url: "./images/icon4.svg",
  },
  // {
  //   id: 5,
  //   image: "./images/service5.svg",
  //   url: "./images/icon5.svg",
  // },
  {
    id: 6,
    image: "./images/service6.svg",
    url: "./images/icon6.svg",
  },
];

export default function Service() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="Service">
      <div className="Service__content">
        <div className="Service__content-title">
          <h2>{t("service.title")}</h2>
          <Link to="/services">
            <button>{t("service.button")}</button>
          </Link>
        </div>
        <div className="Service__content-cards">
          {card.map((elem, index) => {
            const description = t(`service.services.${index}.desc`);
            const isExpanded = expanded[elem.id];

            return (
              <div className="Service__content-cards-card" key={elem.id}>
                <img src={elem.image} alt="" />
                <div>
                  <span>
                    <img src={elem.url} alt="" />
                  </span>
                  <h3>{t(`service.services.${index}.title`)}</h3>
                </div>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

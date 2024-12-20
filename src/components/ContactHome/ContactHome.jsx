import { useState, useEffect } from "react";
import "./ContactHome.scss";
import { useTranslation } from "react-i18next";
import Card from "./../Card/Card";
import ContactUsTwo from "./../ContactUsTwo/ContactUsTwo";

export default function ContactHome() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Проверяем ширину окна при монтировании компонента
    handleResize();

    // Добавляем обработчик изменения размера
    window.addEventListener("resize", handleResize);

    // Удаляем обработчик при размонтировании
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
      url: "/images/card3.png",
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
    <div className="ContactHome">
      <div className="ContactHome__content">
        <div className="ContactHome__content-left">
          <div className="ContactHome__content-left-title">
            <h2>
              {t("contact.title")} <span>{t("contact.span")}</span> <br />
            </h2>
            <p>{t("contact.description")}</p>
          </div>
          <div className="ContactHome__content-left-form">
            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                value="4b1f1ed7-b2f9-48e1-a1cb-48650a928aa1"
              />
              <input
                required
                type="text"
                name="name"
                placeholder={t("contact.form.name")}
              />
              <br />
              <input
                required
                type="email"
                name="email"
                placeholder={t("contact.form.email")}
              />
              <input
                required
                type="tel"
                name="tel"
                placeholder={t("contact.form.phone")}
              />
              <br />
              <input
                required
                type="text"
                name="interested"
                placeholder={t("contact.form.interested")}
              />
              <br />
              <button type="submit">{t("contact.form.button")}</button>
            </form>
          </div>
        </div>
        <div className="ContactHome__content-right">
          <img src="./images/globus.png" alt="globus" />
        </div>
      </div>
      <div className="resultContact">
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
      </div>
      <ContactUsTwo />
      <div className="Card2">
        <div className="Card2__content">
          <div className="Card2__content-title">
            <h2>{t("card.title")}</h2>
            <p>{t("card.description")}</p>
          </div>
          <div className="Card2__content-items">
            {data.map((elem) => (
              <div key={elem.id} className="Card2__content-items-item">
                <img src={elem.url} alt="image" />
                <p>{elem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

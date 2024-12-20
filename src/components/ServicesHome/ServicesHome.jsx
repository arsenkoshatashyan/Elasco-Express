import "./ServicesHome.scss";
import ContactUs from "../ContactUs/ContactUs";
import { useTranslation } from "react-i18next";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

export default function ServicesHome() {
  const [isVisible, setIsVisible] = useState(window.innerWidth < 769);

  // Используем отдельные состояния для каждого блока
  const [isExpanded, setIsExpanded] = useState([false, false, false]);
  const [isListVisible, setIsListVisible] = useState([false, false, false]); // Новое состояние для списка
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleReadMore = (index) => {
    setIsExpanded((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];

      const newListVisibility = [...isListVisible];
      newListVisibility[index] = !newListVisibility[index];
      setIsListVisible(newListVisibility);

      return newState;
    });
  };

  const data = [
    {
      id: 0,
      url: "/images/support.svg",
      title: t("contacts.items.0.title"),
      description: t("contacts.items.0.description"),
    },
    {
      id: 1,
      url: "/images/geo.svg",
      title: t("contacts.items.1.title"),
      description: t("contacts.items.1.description"),
    },
    {
      id: 2,
      url: "/images/email.svg",
      title: t("contacts.items.2.title"),
      description: t("contacts.items.2.description"),
    },
  ];

  return (
    <div className="ServicesHome">
      <div className="ServicesHome__container">
        <h2>{t("services.title")}</h2>
      </div>
      <div className="ServicesHome__content">
        {/* Block One */}
        <div className="ServicesHome__content-block block-one">
          <div className="ServicesHome__content-block-left block-one-img"></div>
          <div className="ServicesHome__content-block-right block-one-img2">
            <h2>{t("services.seaTransportation")}</h2>
            <p className={isExpanded[0] ? "expanded" : "collapsed"}>
              {t("services.seaTransportationDescription")}
            </p>
            {isVisible && (
              <span
                onClick={() => toggleReadMore(0)}
                className="ServicesHome__content-block-btn"
              >
                {isExpanded[0] ? t("about.less_about") : t("about.more_about")}
              </span>
            )}
          </div>
        </div>

        {/* Block Two */}
        <div className="ServicesHome__content-block block-two">
          <div className="ServicesHome__content-block-left block-two-img"></div>
          <div className="ServicesHome__content-block-right block-two-img2">
            <h2>{t("services.airTransportation")}</h2>
            <p className={isExpanded[1] ? "expanded" : "collapsed"}>
              {t("services.airTransportationDescription")}
            </p>
            {isVisible && (
              <span
                onClick={() => toggleReadMore(1)}
                className="ServicesHome__content-block-btn"
              >
                {isExpanded[1] ? t("about.less_about") : t("about.more_about")}
              </span>
            )}
          </div>
        </div>

        {/* Block Three */}
        <div className="ServicesHome__content-block block-three">
          <div className="ServicesHome__content-block-left block-three-img"></div>
          <div className="ServicesHome__content-block-right block-three-img2">
            <h2>{t("services.landTransportation")}</h2>
            <p className={isExpanded[2] ? "expanded" : "collapsed"}>
              {t("services.landTransportationDescription")}
            </p>
            {isVisible && (
              <span
                onClick={() => toggleReadMore(2)}
                className="ServicesHome__content-block-btn"
              >
                {isExpanded[2] ? t("about.less_about") : t("about.more_about")}
              </span>
            )}
          </div>
        </div>

        {/* Block Four */}
        <div className="ServicesHome__content-block block-four">
          <div className="ServicesHome__content-block-left block-four-img"></div>
          <div className="ServicesHome__content-block-right block-four-img2">
            <h2>{t("services.customsClearance")}</h2>
            <p className={isExpanded[3] ? "expanded" : "collapsed"}>
              {t("services.customsClearanceDescription")}
              <ul>
                <li>{t("services.documentPreparation")}</li>
                <li>{t("services.customsDuties")}</li>
                <li>{t("services.customsConsultation")}</li>
                <li>{t("services.representation")}</li>
                <li>{t("services.productClassification")}</li>
                <li>{t("services.transitGoods")}</li>
              </ul>
            </p>
            {isVisible && (
              <span
                onClick={() => toggleReadMore(3)}
                className="ServicesHome__content-block-btn"
              >
                {isExpanded[3] ? t("about.less_about") : t("about.more_about")}
              </span>
            )}
          </div>
        </div>
      </div>
      <Card />
      <div className="resultServices">
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
      <ContactUs />
      <div className="ContactUsTwoService">
        <div className="ContactUsTwoService__content">
          <div className="ContactUsTwoService__content-title">
            <h2>{t("contacts.title")}</h2>
            <p>{t("contacts.description")}</p>
          </div>
          <div className="ContactUsTwoService__content-items">
            {data.map((elem) => (
              <div
                key={elem.id}
                className="ContactUsTwoService__content-items-item"
              >
                <img src={elem.url} alt="image" />
                <h2>{elem.title}</h2>
                <p>{elem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

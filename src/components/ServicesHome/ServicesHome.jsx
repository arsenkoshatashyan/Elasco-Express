import { useState } from "react";
import "./ServicesHome.scss";
import ContactUs from "../ContactUs/ContactUs";
import { useTranslation } from "react-i18next";
import Card from "../Card/Card";
import ContactHomeScroll from "../ContactHomeScroll/ContactHomeScroll";

export default function ServicesHome() {
  const [expanded, setExpanded] = useState({}); // usestate ksarqes
  const { t } = useTranslation();

  const toggleExpanded = (id) => {
    ////////// ysika anpayman nuyn dzev kanchesky
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="ServicesHome">
      <div className="ServicesHome__container">
        <h2>{t("services.title")}</h2>
      </div>
      <div className="ServicesHome__content">
        {/* Блок морских перевозок */}
        <div className="ServicesHome__content-block">
          <div className="ServicesHome__content-block-box">
            <div className="ServicesHome__content-block-box-Left"></div>
            <div className="ServicesHome__content-block-box-Right">
              <h2>{t("services.seaTransportation")}</h2>
              <p
                onClick={() => toggleExpanded(0)} //verin vra or prosty text e map che frracac ysspes + verna qoment ka ydonca ashe
                style={{ cursor: "pointer" }}
              >
                {expanded[0]
                  ? t("services.seaTransportationDescription")
                  : `${t("services.seaTransportationDescription").slice(
                      0,
                      100
                    )}...`}
              </p>
            </div>
          </div>
        </div>

        {/* Блок воздушных перевозок */}
        <div className="ServicesHome__content-blockTwo">
          <div className="ServicesHome__content-blockTwo-box">
            <div className="ServicesHome__content-blockTwo-box-Left">
              <h2>{t("services.airTransportation")}</h2>
              <p
                onClick={() => toggleExpanded(1)}
                style={{ cursor: "pointer" }}
              >
                {expanded[1]
                  ? t("services.airTransportationDescription")
                  : `${t("services.airTransportationDescription").slice(
                      0,
                      100
                    )}...`}
              </p>
            </div>
            <div className="ServicesHome__content-blockTwo-box-Right"></div>
          </div>
        </div>

        {/* Блок наземных перевозок */}
        <div className="ServicesHome__content-blockThree">
          <div className="ServicesHome__content-blockThree-box">
            <div className="ServicesHome__content-blockThree-box-Left"></div>
            <div className="ServicesHome__content-blockThree-box-Right">
              <h2>{t("services.landTransportation")}</h2>
              <p
                onClick={() => toggleExpanded(2)}
                style={{ cursor: "pointer" }}
              >
                {expanded[2]
                  ? t("services.landTransportationDescription")
                  : `${t("services.landTransportationDescription").slice(
                      0,
                      100
                    )}...`}
              </p>
            </div>
          </div>
        </div>

        {/* Блок таможенного оформления */}
        <div className="ServicesHome__content-blockFour">
          <div className="ServicesHome__content-blockFour-box">
            <div className="ServicesHome__content-blockFour-box-Left">
              <h2>{t("services.customsClearance")}</h2>
              <p
                onClick={() => toggleExpanded(3)}
                style={{ cursor: "pointer" }}
              >
                {expanded[3]
                  ? t("services.customsClearanceDescription")
                  : `${t("services.customsClearanceDescription").slice(
                      0,
                      100
                    )}...`}
              </p>
              <ul>
                <li>{t("services.documentPreparation")}</li>
                <li>{t("services.customsDuties")}</li>
                <li>{t("services.customsConsultation")}</li>
                <li>{t("services.representation")}</li>
                <li>{t("services.productClassification")}</li>
                <li>{t("services.transitGoods")}</li>
              </ul>
            </div>
            <div className="ServicesHome__content-blockFour-box-Right"></div>
          </div>
        </div>
      </div>

      <Card />
      <div className="resultThree">
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
        <img src="../../../images/result2.png" alt="" />
      </div>
      <ContactHomeScroll />
      <ContactUs />
      <div className="ServicesHome__address">
        <h2>{t("services.getInTouch")}</h2>
        <p>{t("services.contactUs")}</p>
        <div className="ServicesHome__address-block">
          <div className="ServicesHome__address-blockOne">
            <img src="./images/address1.svg" alt="" />
            <h3>{t("services.contact")}</h3>
            <a href="tel:+37498555378">+(374) 98 555 378</a>
          </div>
          <div className="ServicesHome__address-blockTwo">
            <img src="./images/address2.svg" alt="" />
            <h3>{t("services.address")}</h3>
            <p>{t("services.addressDetail")}</p>
          </div>
          <div className="ServicesHome__address-blockThree">
            <img src="./images/address3.svg" alt="" />
            <h3>{t("services.mail")}</h3>
            <a href="mailto:info@elasco.am">info@elasco.am</a>
          </div>
        </div>
      </div>
    </div>
  );
}

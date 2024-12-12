import Result from "../Result/Result";
import "./ServicesHome.scss";
import ContactUs from "../ContactUs/ContactUs";
import { useTranslation } from "react-i18next";
import Card from "../Card/Card";

export default function ServicesHome() {
  const { t } = useTranslation();

  return (
    <div className="ServicesHome">
      <div className="ServicesHome__container">
        <h2>{t("services.title")}</h2>
      </div>

      <div className="ServicesHome__content">
        <div className="ServicesHome__content-block">
          <div className="ServicesHome__content-block-box">
            <div className="ServicesHome__content-block-box-Left"></div>
            <div className="ServicesHome__content-block-box-Right">
              <h2>{t("services.seaTransportation")}</h2>
              <p>{t("services.seaTransportationDescription")}</p>
            </div>
          </div>
        </div>

        <div className="ServicesHome__content-blockTwo">
          <div className="ServicesHome__content-blockTwo-box">
            <div className="ServicesHome__content-blockTwo-box-Left">
              <h2>{t("services.airTransportation")}</h2>
              <p>{t("services.airTransportationDescription")}</p>
            </div>
            <div className="ServicesHome__content-blockTwo-box-Right"></div>
          </div>
        </div>
        <div className="ServicesHome__content-blockThree">
          <div className="ServicesHome__content-blockThree-box">
            <div className="ServicesHome__content-blockThree-box-Left"></div>
            <div className="ServicesHome__content-blockThree-box-Right">
              <h2>{t("services.landTransportation")}</h2>
              <p>{t("services.landTransportationDescription")}</p>
            </div>
          </div>
        </div>

        <div className="ServicesHome__content-blockFour">
          <div className="ServicesHome__content-blockFour-box">
            <div className="ServicesHome__content-blockFour-box-Left">
              <h2>{t("services.customsClearance")}</h2>
              <p>{t("services.customsClearanceDescription")}</p>
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
      {/* <Result /> */}
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
      <ContactUs />
      <div className="ServicesHome__address">
        <h2>{t("services.getInTouch")}</h2>
        <p>{t("services.contactUs")}</p>
        <div className="ServicesHome__address-block">
          <div className="ServicesHome__address-blockOne">
            <img src="./images/address1.svg" alt="" />
            <h3>{t("services.contact")}</h3>
            <a href="">+(374) 98 555 378</a>
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

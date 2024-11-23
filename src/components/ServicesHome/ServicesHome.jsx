import Result from "../Result/Result";
import "./ServicesHome.scss";
import ContactUs from "../ContactUs/ContactUs";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation
import Card from "../Card/Card";

export default function ServicesHome() {
  const { t } = useTranslation(); // Используем хук для перевода

  return (
    <div className="ServicesHome">
      <div className="ServicesHome__container">
        <h2>{t("services.title")}</h2> {/* Заголовок с переводом */}
        {/* <p>
          {t("services.description")}
        </p> */}
      </div>

      <div className="ServicesHome__content">
        {/* Блок Морские перевозки */}
        <div className="ServicesHome__content-block">
          <div className="ServicesHome__content-block-box">
            <div className="ServicesHome__content-block-box-Left">
              <p>{t("services.seaTransportation")}</p>
            </div>
            <div className="ServicesHome__content-block-box-Right">
              <h2>{t("services.seaTransportation")}</h2>
              <p>{t("services.seaTransportationDescription")}</p>
            </div>
          </div>
        </div>

        {/* Блок Авиа перевозки */}
        <div className="ServicesHome__content-blockTwo">
          <div className="ServicesHome__content-blockTwo-box">
            <div className="ServicesHome__content-blockTwo-box-Left">
              <h2>{t("services.airTransportation")}</h2>
              <p>{t("services.airTransportationDescription")}</p>
            </div>
            <div className="ServicesHome__content-blockTwo-box-Right">
              <h2>{t("services.airTransportation")}</h2>
            </div>
          </div>
        </div>

        {/* Блок Наземные перевозки */}
        <div className="ServicesHome__content-blockThree">
          <div className="ServicesHome__content-blockThree-box">
            <div className="ServicesHome__content-blockThree-box-Left">
              <p>{t("services.landTransportation")}</p>
            </div>
            <div className="ServicesHome__content-blockThree-box-Right">
              <h2>{t("services.landTransportation")}</h2>
              <p>{t("services.landTransportationDescription")}</p>
            </div>
          </div>
        </div>

        {/* Блок Регистрация и таможенное оформление */}
        <div className="ServicesHome__content-blockFour">
          <div className="ServicesHome__content-blockFour-box">
            <div className="ServicesHome__content-blockFour-box-Left">
              <h2>{t("services.customsClearance")}</h2>
              <p>{t("services.customsClearanceDescription")}</p>
            </div>
            <div className="ServicesHome__content-blockFour-box-Right">
              <p>{t("services.customsClearance")}</p>
            </div>
          </div>
        </div>
      </div>
      <Card />
      <Result />
      <ContactUs />
      <div className="ServicesHome__address">
        <h2>{t("services.getInTouch")}</h2>
        <p>{t("services.contactUs")}</p>
        <div className="ServicesHome__address-block">
          <div className="ServicesHome__address-blockOne">
            <img src="./images/address1.svg" alt="" />
            <h3>{t("services.contact")}</h3>
            <a href="">+374 98 555 378</a>
          </div>
          <div className="ServicesHome__address-blockTwo">
            <img src="./images/address2.svg" alt="" />
            <h3>{t("services.address")}</h3>
            <p>{t("services.addressDetail")}</p>
          </div>
          <div className="ServicesHome__address-blockThree">
            <img src="./images/address3.svg" alt="" />
            <h3>{t("services.mail")}</h3>
            <a href="mailto:elasco.exspress@mail.ru">elasco.exspress@mail.ru</a>
          </div>
        </div>
      </div>
    </div>
  );
}

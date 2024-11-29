import "./ContactUs.scss";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <div className="ContactUs">
      <div className="ContactUs__content">
        <div className="ContactUs__content-left">
          <div className="ContactUs__content-left-title">
            <h2>
              {t("contact.title")} <span>{t("contact.span")}</span> <br />
            </h2>
            <p>{t("contact.description")}</p>
          </div>
          <div className="ContactUs__content-left-form">
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
        <div className="ContactUs__content-right">
          <img src="./images/earth.svg" alt="Earth illustration" />
        </div>
      </div>
    </div>
  );
}

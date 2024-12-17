import "./ContactHome.scss";
import { useTranslation } from "react-i18next";
import Card from "./../Card/Card";
import ContactUsTwo from "./../ContactUsTwo/ContactUsTwo";

export default function ContactHome() {
  const { t } = useTranslation();
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
    <div className="ContactHome">
          {/* <h5> {t("contact.about")}</h5> */}
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
      <ContactUsTwo/>
      <Card/>
    </div>
  );
}

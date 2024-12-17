import "./ContactUsTwo.scss";
import { useTranslation } from "react-i18next";

export default function ContactUsTwo() {
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
    <div className="ContactUsTwo">
      <div className="ContactUsTwo__content">
        <div className="ContactUsTwo__content-title">
          <h2>{t("contacts.title")}</h2>
          <p>{t("contacts.description")}</p>
        </div>
        <div className="ContactUsTwo__content-items">
          {data.map((elem) => (
            <div key={elem.id} className="ContactUsTwo__content-items-item">
              <img src={elem.url} alt="image" />
              <h2>{elem.title}</h2>
              <p>{elem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import "./Contact.scss";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const data = [
    {
      id: 0,
      url: "/images/address1.png",
      title: t("contacts.items.0.title"),
      description: t("contacts.items.0.description"),
    },
    {
      id: 1,
      url: "/images/address2.png",
      title: t("contacts.items.1.title"),
      description: t("contacts.items.1.description"),
    },
    {
      id: 2,
      url: "/images/address3.png",
      title: t("contacts.items.2.title"),
      description: t("contacts.items.2.description"),
    },
  ];

  return (
    <div className="Contact">
      <div className="Contact__content">
        <div className="Contact__content-title">
          <h2>{t("contacts.title")}</h2>
          <p>{t("contacts.description")}</p>
        </div>
        <div className="Contact__content-items">
          {data.map((elem) => (
            <div key={elem.id} className="Contact__content-items-item">
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

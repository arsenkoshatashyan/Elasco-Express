import Contact from "../Contact/Contact";
import "./NewsPage.scss";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation

const data = [
  {
    id: 0,
    title: "logisticsRecognition", // Предыдущие ключи заменены на уникальные
    url: "/images/certificate3.svg",
    url2: "/images/certificate2.svg",
  },
  {
    id: 1,
    title: "logisticsRecognition",
    url: "/images/certificate3.svg",
    url2: "/images/certificate2.svg",
  },
  {
    id: 2,
    title: "logisticsRecognition",
    url: "/images/certificate3.svg",
    url2: "/images/certificate2.svg",
  },
  {
    id: 3,
    title: "logisticsRecognition",
    url: "/images/certificate3.svg",
    url2: "/images/certificate2.svg",
  },
  {
    id: 4,
    title: "logisticsRecognition",
    url: "/images/certificate3.svg",
    url2: "/images/certificate2.svg",
  },
  {
    id: 5,
    title: "logisticsRecognition",
    url: "/images/certificate3.svg",
    url2: "/images/certificate2.svg",
  },
  {
    id: 6,
    title: "logisticsRecognition",
    url: "/images/certificate3.svg",
    url2: "/images/certificate2.svg",
  },
  {
    id: 7,
    title: "logisticsRecognition",
    url: "/images/certificate3.svg",
    url2: "/images/certificate2.svg",
  },
  {
    id: 8,
    title: "logisticsRecognition",
    url: "/images/certificate3.svg",
    url2: "/images/certificate2.svg",
  },
  {
    id: 9,
    title: "logisticsRecognition",
    url: "/images/certificate3.svg",
    url2: "/images/certificate2.svg",
  },
  {
    id: 10,
    title: "logisticsRecognition",
    url: "/images/certificate3.svg",
    url2: "/images/certificate2.svg",
  },
  {
    id: 11,
    title: "logisticsRecognition",
    url: "/images/certificate3.svg",
    url2: "/images/certificate2.svg",
  },
];

import { useParams } from "react-router-dom";

export default function NewsPage() {
  const { t } = useTranslation(); // Получаем функцию t для перевода
  const { id } = useParams();
  const newsItem = data.find((item) => item.id === parseInt(id));

  return (
    <div className="newsPage">
      <div className="newsPage__content">
        <div className="newsPage__content-title">
          <div className="newsPage__content-title-box">
            <h2>{t("newsPage.title")}</h2>{" "}
            {/* Используем новый ключ для перевода */}
          </div>
        </div>
        <div className="newsPage__content-item">
          <div className="newsPage__content-item-title">
            <img src="/images/badge.svg" alt="badge" />
            <h2>{t("newsPage.itemTitle")}</h2>{" "}
            {/* Используем новый ключ для перевода */}
          </div>
          <p>{t("newsPage.recognition")}</p>{" "}
          {/* Используем новый ключ для перевода */}
          <div className="newsPage__content-item-img">
            <img src={newsItem.url2} alt="photo" />
            <img src={newsItem.url} alt="photo" />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

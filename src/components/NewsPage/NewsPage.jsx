import Contact from "../Contact/Contact";
import "./NewsPage.scss";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    title: "logisticsRecognition",
    url: "/images/certification1.jpg",
    url2: "/images/certification1-1.jpg",
    url3: "/images/certification1.jpg",
    url4: "/images/certification1-2.jpg",
    url5: "/images/certification1-3.jpg",
  },
  {
    id: 2,
    title: "logisticsRecognition",
    url: "/images/certification2.jpg",
    url2: "/images/certification2-1.jpg",
    url3: "/images/certification2-2.jpg",
    url4: "/images/certification2-3.jpg",
    url5: "/images/certification2.jpg",
  },
];

import { useParams } from "react-router-dom";

export default function NewsPage() {
  const { t } = useTranslation();
  const { id } = useParams();
  const newsItem = data.find((item) => item.id === parseInt(id));

  return (
    <div className="newsPage">
      <div className="newsPage__content">
        <div className="newsPage__content-title">
          <h2>{t("newsPage.title")}</h2>
        </div>
        <div className="newsPage__content-block">
          <div className="newsPage__content-block-title">
            <h2>{t("newsPage.itemTitle")}</h2>
          </div>
          <div className="newsPage__content-block-source">
            <p>{t("newsPage.recognition")}</p>
            <img src={newsItem.url2} alt="photo" />
            <img src={newsItem.url3} alt="photo" />
            <img src={newsItem.url4} alt="photo" />
            <img src={newsItem.url5} alt="photo" />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

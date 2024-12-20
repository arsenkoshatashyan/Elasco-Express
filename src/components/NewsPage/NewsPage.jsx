import Contact from "../Contact/Contact";
import "./NewsPage.scss";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const data = [
  {
    id: 1,
    titleKey: "newsPage.news1Title",
    url: "/images/certification1.jpg",
    url2: "/images/certification1-2.jpg",
  },
  {
    id: 2,
    titleKey: "newsPage.news2Title",
    url: "/images/certification2-2.jpg",
    url2: "/images/certification2-3.jpg",
  },
];

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

        <div className="newsPage__content-achievements">
          <div className="newsPage__content-achievements-box">
            <div className="newsPage__content-achievements-box-left">
              <div className="newsPage__content-achievements-box-left-title">
                <h2>{t("newsPage.itemTitle")}</h2>
              </div>
              <p>{t(newsItem.titleKey)}</p>
            </div>
            <div className="newsPage__content-achievements-box-right">
              <img src={newsItem.url} alt="achievements" />
              <img src={newsItem.url2} alt="achievements" />
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

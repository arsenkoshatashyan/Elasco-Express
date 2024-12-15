import Contact from "../Contact/Contact";
import "./NewsPage.scss";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const data = [
  {
    id: 1,
    titleKey: "newsPage.news1Title",
    url: "/images/certification1.jpg",
    url2: "/images/certification1-1.jpg",
    url3: "/images/certification1.jpg",
    url4: "/images/certification1-2.jpg",
    url5: "/images/certification1-3.jpg",
  },
  {
    id: 2,
    titleKey: "newsPage.news2Title",
    url: "/images/certification2.jpg",
    url2: "/images/certification2-1.jpg",
    url3: "/images/certification2-2.jpg",
    url4: "/images/certification2-3.jpg",
    url5: "/images/certification2-4.jpg",
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
        <div className="newsPage__content-photos">
          {/* <!-- Большое изображение (img1) занимает 2 строки --> */}
          <div className="newsPage__content-photos-item newsPage__content-photos-item--img1">
            <img src={newsItem.url2} alt="Image 1" />
          </div>
          {/* <!-- Изображение img2 на второй строке слева --> */}
          <div className="newsPage__content-photos-item newsPage__content-photos-item--img2">
            <img src={newsItem.url3} alt="Image 2" />
          </div>
          {/* <!-- Изображение img3 на третьей строке слева --> */}
          <div className="newsPage__content-photos-item newsPage__content-photos-item--img3">
            <img src={newsItem.url4} alt="Image 3" />
          </div>
          {/* <!-- Изображение img4 на третьей строке справа --> */}
          <div className="newsPage__content-photos-item newsPage__content-photos-item--img4">
            <img src={newsItem.url5} alt="Image 4" />
          </div>
          {/* <!-- Изображение img5 на первой строке слева (заменяет текст) --> */}
          <div className="newsPage__content-photos-item newsPage__content-photos-item--img5">
            {/* <!-- <img src="certification1.jpg" alt="Image 5" /> --> */}
            <h2>{t("newsPage.itemTitle")}</h2>
            <p>{t(newsItem.titleKey)}</p>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

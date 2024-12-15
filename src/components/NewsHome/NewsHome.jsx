import "./NewsHome.scss";
import Contact from "./../Contact/Contact";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const source = [
  {
    id: 1,
    titleKey: "titleKey",
    image: "./images/certification1.jpg",
  },
  {
    id: 2,
    titleKey: "titleKey",
    image: "./images/certification2.png",
  },
];

export default function NewsHome() {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState({});
  // const [currentPage, setCurrentPage] = useState(1);
  // const postsPerPage = 4;
  // const lastPostIndex = currentPage * postsPerPage;
  // const firstPostIndex = lastPostIndex - postsPerPage;
  // const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  // const totalPages = Math.ceil(data.length / postsPerPage);

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // const handlePrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  return (
    <div className="NewsHome">
      <div className="NewsHome__content">
        <div className="NewsHome__content-title">
          <h2>{t("newsTitle")}</h2>
        </div>
        <div className="NewsHome__content-items">
          {source.map((elem) => {
            const title = t(`news.${elem.id}.titleKey`) || "Untitled";
            const isExpanded = expanded[elem.id];
            return (
              <div key={elem.id} className="NewsHome__content-items-item">
                <h2>
                  {isExpanded || title.length <= 50
                    ? title
                    : `${title.slice(0, 110)}`}
                </h2>
                <img src={elem.image} alt={`Slide ${elem.id}`} />
                <Link to={`/news/${elem.id}`}>
                  <p>{t("readMore")}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="resultTwo">
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

      <Contact />
    </div>
  );
}

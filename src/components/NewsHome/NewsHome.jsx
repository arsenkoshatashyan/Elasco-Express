import "./NewsHome.scss";
import Contact from "./../Contact/Contact";
import { useState } from "react";
import Result from "./../Result/Result";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation

const data = [
  {
    id: 0,
    title: "logisticsRecognition", // Используем ключ перевода
    url: "./images/certificate.svg",
  },
  {
    id: 1,
    title: "logisticsRecognition",
    url: "./images/certificate.svg",
  },
  {
    id: 2,
    title: "logisticsRecognition",
    url: "./images/certificate.svg",
  },
  {
    id: 3,
    title: "logisticsRecognition",
    url: "./images/certificate.svg",
  },
  {
    id: 4,
    title: "logisticsRecognition",
    url: "./images/certificate.svg",
  },
  {
    id: 5,
    title: "logisticsRecognition",
    url: "./images/certificate.svg",
  },
  {
    id: 6,
    title: "logisticsRecognition",
    url: "./images/certificate.svg",
  },
  {
    id: 7,
    title: "logisticsRecognition",
    url: "./images/certificate.svg",
  },
  {
    id: 8,
    title: "logisticsRecognition",
    url: "./images/certificate.svg",
  },
  {
    id: 9,
    title: "logisticsRecognition",
    url: "./images/certificate.svg",
  },
  {
    id: 10,
    title: "logisticsRecognition",
    url: "./images/certificate.svg",
  },
  {
    id: 11,
    title: "logisticsRecognition",
    url: "./images/certificate.svg",
  },
];

export default function NewsHome() {
  const { t } = useTranslation(); // Получаем функцию t для перевода
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(data.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="NewsHome">
      <div className="NewsHome__content">
        <div className="NewsHome__content-title">
          <h2>{t("newsTitle")}</h2> {/* Используем функцию t для перевода */}
        </div>
        <div className="NewsHome__content-items">
          {currentPosts.map((elem) => (
            <div key={elem.id} className="NewsHome__content-items-item">
              <h2>{t(elem.title)}</h2> {/* Используем функцию t для перевода */}
              <img src={elem.url} alt={t("certificate")} />{" "}
              {/* Используем функцию t для перевода */}
              <Link to={`/news/${elem.id}`}>
                <p>{t("readMore")}</p> {/* Используем функцию t для перевода */}
              </Link>
            </div>
          ))}
        </div>
        <div className="NewsHome__content-pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <ul
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              <li>{index + 1}</li>
            </ul>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
      <Result />
      <Contact />
    </div>
  );
}

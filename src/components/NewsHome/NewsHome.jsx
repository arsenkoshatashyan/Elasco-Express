import "./NewsHome.scss";
import Contact from "./../Contact/Contact";
import { useState } from "react";
import Result from "./../Result/Result";
import { Link } from "react-router-dom";

const data = [
  {
    id: 0,
    title:
      'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
    url: "./images/certificate.svg",
  },
  {
    id: 1,
    title:
      'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
    url: "./images/certificate.svg",
  },
  {
    id: 2,
    title:
      'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
    url: "./images/certificate.svg",
  },
  {
    id: 3,
    title:
      'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
    url: "./images/certificate.svg",
  },
  {
    id: 4,
    title:
      'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
    url: "./images/certificate.svg",
  },
  {
    id: 5,
    title:
      'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
    url: "./images/certificate.svg",
  },
  {
    id: 6,
    title:
      'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
    url: "./images/certificate.svg",
  },
  {
    id: 7,
    title:
      'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
    url: "./images/certificate.svg",
  },
  {
    id: 8,
    title:
      'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
    url: "./images/certificate.svg",
  },
  {
    id: 9,
    title:
      'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
    url: "./images/certificate.svg",
  },
  {
    id: 10,
    title:
      'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
    url: "./images/certificate.svg",
  },
  {
    id: 11,
    title:
      'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
    url: "./images/certificate.svg",
  },
];

export default function NewsHome() {
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
          <h2>News</h2>
        </div>
        <div className="NewsHome__content-items">
          {currentPosts.map((elem) => (
            <div key={elem.id} className="NewsHome__content-items-item">
              <h2>{elem.title}</h2>
              <img src={elem.url} alt="certificate" />
              <Link to={`/news/${elem.id}`}>
                <p>Read more...</p>
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

import Contact from "../Contact/Contact";
import "./NewsPage.scss";

import { useParams } from "react-router-dom";
export default function NewsPage() {
  const data = [
    {
      id: 0,
      title:
        'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
      url: "../../../public/images/certificate3.svg",
      url2: "../../../public/images/certificate2.svg",
    },
    {
      id: 1,
      title:
        'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
      url: "../../../public/images/certificate3.svg",
      url2: "../../../public/images/certificate2.svg",
    },
    {
      id: 2,
      title:
        'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
      url: "../../../public/images/certificate3.svg",
      url2: "../../../public/images/certificate2.svg",
    },
    {
      id: 3,
      title:
        'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
      url: "../../../public/images/certificate3.svg",
      url2: "../../../public/images/certificate2.svg",
    },
    {
      id: 4,
      title:
        'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
      url: "../../../public/images/certificate3.svg",
      url2: "../../../public/images/certificate2.svg",
    },
    {
      id: 5,
      title:
        'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
      url: "../../../public/images/certificate3.svg",
      url2: "../../../public/images/certificate2.svg",
    },
    {
      id: 6,
      title:
        'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
      url: "../../../public/images/certificate3.svg",
      url2: "../../../public/images/certificate2.svg",
    },
    {
      id: 7,
      title:
        'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
      url: "../../../public/images/certificate3.svg",
      url2: "../../../public/images/certificate2.svg",
    },
    {
      id: 8,
      title:
        'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
      url: "../../../public/images/certificate3.svg",
      url2: "../../../public/images/certificate2.svg",
    },
    {
      id: 9,
      title:
        'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
      url: "../../../public/images/certificate3.svg",
      url2: "../../../public/images/certificate2.svg",
    },
    {
      id: 10,
      title:
        'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
      url: "../../../public/images/certificate3.svg",
      url2: "../../../public/images/certificate2.svg",
    },
    {
      id: 11,
      title:
        'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
      url: "../../../public/images/certificate3.svg",
      url2: "../../../public/images/certificate2.svg",
    },
  ];
  const { id } = useParams();
  const newsItem = data.find((item) => item.id === parseInt(id));
  return (
    <div className="newsPage">
      <div className="newsPage__content">
        <div className="newsPage__content-title">
          <div className="newsPage__content-title-box">
            <h2>News</h2>
            <p>{newsItem.title}</p>
          </div>
        </div>
        <div className="newsPage__content-item">
          <div className="newsPage__content-item-title">
            <img src="../../../public/images/badge.svg" alt="badge" />
            <h2>Our achievement</h2>
          </div>
          <p>
            In 2024, LLC "Elasco Express" was recognized as a high-class
            logistics provider, took 1st place as a freight forwarding company
            and received a certificate from the largest international freight
            exchange platform in the Russian Federation and the CIS region
            ATI.SU. This recognition reflects our commitment to quality service,
            efficiency and customer satisfaction.
          </p>
          <div className="newsPage__content-item-img">
            <img src={newsItem.url2} alt="photo" />
            <img src={newsItem.url} alt="photo" />
          </div>
          <div className="newsPage__content-item-buttons">
            <span>&lt; Previous News </span>
            <span>Next News &gt; </span>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

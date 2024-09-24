import { Link } from "react-router-dom";
import "./Service.scss";

const card = [
  {
    id: 1,
    image: "./images/service1.svg",
    url: "./images/icon1.svg",
    title: "Sea Transportation",
    desc: "Our team can also build a logistics software solution with reporting and analytics features that focus on your company’s most important metrics. ",
  },
  {
    id: 2,
    image: "./images/service2.svg",
    url: "./images/icon2.svg",
    title: "Land Transportation",
    desc: "Our team can also build a logistics software solution with reporting and analytics features that focus on your company’s most important metrics. ",
  },
  {
    id: 3,
    image: "./images/service3.svg",
    url: "./images/icon3.svg",
    title: "Air Transportation",
    desc: "Our team can also build a logistics software solution with reporting and analytics features that focus on your company’s most important metrics. ",
  },
  {
    id: 4,
    image: "./images/service4.svg",
    url: "./images/icon4.svg",
    title: "Transportation of Dangerous Goods ",
    desc: "Our team can also build a logistics software solution with reporting and analytics features that focus on your company’s most important metrics. ",
  },
  {
    id: 5,
    image: "./images/service5.svg",
    url: "./images/icon5.svg",
    title: "Preparation of Export & Import Documents",
    desc: "Our team can also build a logistics software solution with reporting and analytics features that focus on your company’s most important metrics. ",
  },
  {
    id: 6,
    image: "./images/service6.svg",
    url: "./images/icon6.svg",
    title: "Brokerage services",
    desc: "Our team can also build a logistics software solution with reporting and analytics features that focus on your company’s most important metrics. ",
  },
];

export default function Service() {
  return (
    <div className="Service">
      <div className="Service__content">
        <div className="Service__content-title">
          <h2>Our Services</h2>
          <Link to="/services">
            <button>More About Services</button>
          </Link>
        </div>
        <div className="Service__content-cards">
          {card.map((elem) => (
            <div className="Service__content-cards-card" key={elem.id}>
              <img src={elem.image} alt="" />
              <div>
                <span>
                  <img src={elem.url} alt="" />
                </span>
                <h3>{elem.title}</h3>
              </div>
              <p>{elem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

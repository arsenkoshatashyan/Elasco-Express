import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sliders.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const source = [
  {
    id: 1,
    titleKey: "titleKey",
    description: "description",
    image: "./images/certification1.jpg",
  },
  {
    id: 2,
    titleKey: "titleKey",
    description: "description",
    image: "./images/certification2.png",
  },
];

export default function Sliders() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (id) => {
    setExpanded((prev) => ({
      [id]: !prev[id],
    }));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="Sliders">
      <div className="Sliders__content">
        <h2>{t("sliders.latest_news")}</h2>
        <Link to="/news">
          <button>{t("sliders.view_all")}</button>
        </Link>
      </div>
      <Slider {...settings}>
        {source.map((elem) => {
          const title = t(`sliders.slides.${elem.id}.titleKey`) || "Untitled";
          const isExpanded = expanded[elem.id];
          return (
            <div key={elem.id}>
              <h2>
                {isExpanded || title.length <= 50
                  ? title
                  : `${title.slice(0, 52)}...`}
              </h2>
              <img src={elem.image} alt={`Slide ${elem.id}`} />
              <Link to={`/news/${elem.id}`}>
                <p>{t("readMore")}</p>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

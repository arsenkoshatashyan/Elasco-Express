// import React, { useState } from "react";
// import Slider from "react-slick";
// import "./Sliders.scss";

// const source = [
//   {
//     id: 1,
//     title:
//       'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
//     image: "./images/certificate.svg",
//     desc: "Read More...",
//   },
//   {
//     id: 2,
//     title:
//       'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
//     image: "./images/certificate.svg",
//     desc: "Read More...",
//   },
//   {
//     id: 3,
//     title:
//       'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
//     image: "./images/certificate.svg",
//     desc: "Read More...",
//   },
//   {
//     id: 4,
//     title:
//       'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
//     image: "./images/certificate.svg",
//     desc: "Read More...",
//   },
//   {
//     id: 5,
//     title:
//       'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
//     image: "./images/certificate.svg",
//     desc: "Read More...",
//   },
// ];

// export default function Sliders() {
//   const [data, setData] = useState(source);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="Sliders">
//       <div className="Sliders__content">
//         <h2> Our Latest News</h2>
//         <button>View All</button>
//       </div>
//       <Slider {...settings}>
//         {data.map((elem) => {
//           return (
//             <div key={elem.id}>
//               <h2>{elem.title}</h2>
//               <img src={elem.image} alt="" />
//               <p>{elem.desc}</p>
//             </div>
//           );
//         })}
//       </Slider>
//     </div>
//   );
// }
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sliders.scss";
const source = [
  {
    id: 1,
    title:
      'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
    image: "./images/certificate.svg",
    desc: "Read More...",
  },
  {
    id: 2,
    title:
      'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
    image: "./images/certificate.svg",
    desc: "Read More...",
  },
  {
    id: 3,
    title:
      'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
    image: "./images/certificate.svg",
    desc: "Read More...",
  },
  {
    id: 4,
    title:
      'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
    image: "./images/certificate.svg",
    desc: "Read More...",
  },
  {
    id: 5,
    title:
      'In 2024, LLC "Elasco Express" was recognized as a high-class logistics provide',
    image: "./images/certificate.svg",
    desc: "Read More...",
  },
];

export default function Sliders() {
  const [data, setData] = useState(source);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // if screen width is <= 1200px, show 2 slides
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // if screen width is <= 768px, show 1 slide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Sliders">
      <div className="Sliders__content">
        <h2> Our Latest News</h2>
        <button>View All</button>
      </div>
      <Slider {...settings}>
        {data.map((elem) => {
          return (
            <div key={elem.id}>
              <h2>{elem.title}</h2>
              <img src={elem.image} alt="" />
              <p>{elem.desc}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

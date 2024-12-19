//---------------------------------------------------------------norm
import "./ServicesHome.scss";
import ContactUs from "../ContactUs/ContactUs";
import { useTranslation } from "react-i18next";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
export default function ServicesHome() {
  const [expanded, setExpanded] = useState({});
  const [symbols, setSymbols] = useState(20000);
  const { t } = useTranslation();
  const toggleExpanded = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 1590 && window.innerWidth > 1350) {
  //       setSymbols(650);
  //     } else if (window.innerWidth <= 1350 && window.innerWidth > 1225) {
  //       setSymbols(400);
  //     } else if (window.innerWidth <= 1225 && window.innerWidth > 768) {
  //       setSymbols(455);
  //     }
  //   };

  //   handleResize(); // Вызов при монтировании компонента
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, [window.innerWidth]);
  // <p onClick={() => toggleExpanded(service.id)} style={{ cursor: "pointer" }}>
  //   {expanded[service.id]
  //     ? service.description
  //     : `${service.description.slice(0, symbols)}...`}
  // </p>;
  const data = [
    {
      id: 0,
      url: "/images/support.svg",
      title: t("contacts.items.0.title"),
      description: t("contacts.items.0.description"),
    },
    {
      id: 1,
      url: "/images/geo.svg",
      title: t("contacts.items.1.title"),
      description: t("contacts.items.1.description"),
    },
    {
      id: 2,
      url: "/images/email.svg",
      title: t("contacts.items.2.title"),
      description: t("contacts.items.2.description"),
    },
  ];

  return (
    <div className="ServicesHome">
      <div className="ServicesHome__container">
        <h2>{t("services.title")}</h2>
      </div>
      <div className="ServicesHome__content">
        <div className="ServicesHome__content-block block-one">
          <div className="ServicesHome__content-block-left block-one-img"></div>
          <div className="ServicesHome__content-block-right block-one-img2">
            <h2>{t("services.seaTransportation")}</h2>
            <p onClick={() => toggleExpanded(0)} style={{ cursor: "pointer" }}>
              {expanded[0]
                ? t("services.seaTransportationDescription")
                : `${t("services.seaTransportationDescription").slice(
                    0,
                    symbols
                  )}...`}
            </p>
          </div>
        </div>
        <div className="ServicesHome__content-block block-two">
          <div className="ServicesHome__content-block-left block-two-img"></div>
          <div className="ServicesHome__content-block-right block-two-img2">
            <h2>{t("services.airTransportation")}</h2>
            <p onClick={() => toggleExpanded(0)} style={{ cursor: "pointer" }}>
              {expanded[0]
                ? t("services.airTransportationDescription")
                : `${t("services.airTransportationDescription").slice(
                    0,
                    700
                  )}...`}
            </p>
          </div>
        </div>
        <div className="ServicesHome__content-block block-three">
          <div className="ServicesHome__content-block-left block-three-img"></div>
          <div className="ServicesHome__content-block-right block-three-img2">
            <h2>{t("services.landTransportation")}</h2>
            <p onClick={() => toggleExpanded(0)} style={{ cursor: "pointer" }}>
              {expanded[0]
                ? t("services.landTransportationDescription")
                : `${t("services.landTransportationDescription").slice(
                    0,
                    690
                  )}...`}
            </p>
          </div>
        </div>
        <div className="ServicesHome__content-block block-four">
          <div className="ServicesHome__content-block-left block-four-img"></div>
          <div className="ServicesHome__content-block-right block-four-img2">
            <h2>{t("services.customsClearance")}</h2>
            <p onClick={() => toggleExpanded(0)} style={{ cursor: "pointer" }}>
              {expanded[0]
                ? t("services.customsClearanceDescription")
                : `${t("services.customsClearanceDescription").slice(
                    0,
                    705
                  )}...`}
            </p>
            <ul>
              <li>{t("services.documentPreparation")}</li>
              <li>{t("services.customsDuties")}</li>
              <li>{t("services.customsConsultation")}</li>
              <li>{t("services.representation")}</li>
              <li>{t("services.productClassification")}</li>
              <li>{t("services.transitGoods")}</li>
            </ul>
          </div>
        </div>
      </div>
      <Card />
      <div className="resultServices">
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
      </div>
      <ContactUs />
      <div className="ContactUsTwoService">
        <div className="ContactUsTwoService__content">
          <div className="ContactUsTwoService__content-title">
            <h2>{t("contacts.title")}</h2>
            <p>{t("contacts.description")}</p>
          </div>
          <div className="ContactUsTwoService__content-items">
            {data.map((elem) => (
              <div
                key={elem.id}
                className="ContactUsTwoService__content-items-item"
              >
                <img src={elem.url} alt="image" />
                <h2>{elem.title}</h2>
                <p>{elem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
//-------------------------------------------------------------------------------
// import "./ServicesHome.scss";
// import React, { useRef, useEffect, useState } from "react";
// import ContactUs from "../ContactUs/ContactUs";
// import { useTranslation } from "react-i18next";
// import Card from "../Card/Card";

// export default function ServicesHome() {
//   const [expanded, setExpanded] = useState({}); // usestate ksarqes
//   const { t } = useTranslation();
//   const cardRef = useRef(null);
//   const [isCardVisible, setIsCardVisible] = useState(true);

//   // Функция для проверки ширины экрана
//   const handleResize = () => {
//     if (window.innerWidth <= 768) {
//       setIsCardVisible(false); // Скрываем компонент, если ширина <= 768px
//     } else {
//       setIsCardVisible(true); // Показываем компонент, если ширина > 768px
//     }
//   };

//   // Хук для добавления/удаления слушателя события resize
//   useEffect(() => {
//     handleResize(); // Проверка при монтировании компонента

//     window.addEventListener("resize", handleResize); // Добавляем слушатель события

//     return () => {
//       window.removeEventListener("resize", handleResize); // Удаляем слушатель при размонтировании
//     };
//   }, []);

//   // Данные для отображения контактов
//   const data = [
//     {
//       id: 0,
//       url: "/images/support.svg",
//       title: t("contacts.items.0.title"),
//       description: t("contacts.items.0.description"),
//     },
//     {
//       id: 1,
//       url: "/images/geo.svg",
//       title: t("contacts.items.1.title"),
//       description: t("contacts.items.1.description"),
//     },
//     {
//       id: 2,
//       url: "/images/email.svg",
//       title: t("contacts.items.2.title"),
//       description: t("contacts.items.2.description"),
//     },
//   ];

//   return (
//     <div className="ServicesHome">
//       <div className="ServicesHome__container">
//         <h2>{t("services.title")}</h2>
//       </div>
//       <div className="ServicesHome__content">
//         {/* Блок морских перевозок */}
//         <div className="ServicesHome__content-block">
//           <div className="ServicesHome__content-block-box">
//             <div className="ServicesHome__content-block-box-Left"></div>
//             <div className="ServicesHome__content-block-box-Right">
//               <h2>{t("services.seaTransportation")}</h2>
//               <p
//                 onClick={() => toggleExpanded(0)} //verin vra or prosty text e map che frracac ysspes + verna qoment ka ydonca ashe
//                 style={{ cursor: "pointer" }}
//               >
//                 {expanded[0]
//                   ? t("services.seaTransportationDescription")
//                   : `${t("services.seaTransportationDescription").slice(
//                       0,
//                       100
//                     )}...`}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Блок воздушных перевозок */}
//         <div className="ServicesHome__content-blockTwo">
//           <div className="ServicesHome__content-blockTwo-box">
//             <div className="ServicesHome__content-blockTwo-box-Left">
//               <h2>{t("services.airTransportation")}</h2>
//               <p
//                 onClick={() => toggleExpanded(1)}
//                 style={{ cursor: "pointer" }}
//               >
//                 {expanded[1]
//                   ? t("services.airTransportationDescription")
//                   : `${t("services.airTransportationDescription").slice(
//                       0,
//                       100
//                     )}...`}
//               </p>
//             </div>
//             <div className="ServicesHome__content-blockTwo-box-Right"></div>
//           </div>
//         </div>

//         <div className="ServicesHome__content-blockThree">
//           <div className="ServicesHome__content-blockThree-box">
//             <div className="ServicesHome__content-blockThree-box-Left"></div>
//             <div className="ServicesHome__content-blockThree-box-Right">
//               <h2>{t("services.landTransportation")}</h2>
//               <p
//                 onClick={() => toggleExpanded(2)}
//                 style={{ cursor: "pointer" }}
//               >
//                 {expanded[2]
//                   ? t("services.landTransportationDescription")
//                   : `${t("services.landTransportationDescription").slice(
//                       0,
//                       100
//                     )}...`}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Блок таможенного оформления */}
//         <div className="ServicesHome__content-blockFour">
//           <div className="ServicesHome__content-blockFour-box">
//             <div className="ServicesHome__content-blockFour-box-Left">
//               <h2>{t("services.customsClearance")}</h2>
//               <p
//                 onClick={() => toggleExpanded(3)}
//                 style={{ cursor: "pointer" }}
//               >
//                 {expanded[3]
//                   ? t("services.customsClearanceDescription")
//                   : `${t("services.customsClearanceDescription").slice(
//                       0,
//                       100
//                     )}...`}
//               </p>
//               <ul>
//                 <li>{t("services.documentPreparation")}</li>
//                 <li>{t("services.customsDuties")}</li>
//                 <li>{t("services.customsConsultation")}</li>
//                 <li>{t("services.representation")}</li>
//                 <li>{t("services.productClassification")}</li>
//                 <li>{t("services.transitGoods")}</li>
//               </ul>
//             </div>
//             <div className="ServicesHome__content-blockFour-box-Right"></div>
//           </div>
//         </div>
//       </div>
//       {isCardVisible && <Card ref={cardRef} />}
//       <div className="resultServices">
//         <ul>
//           <li>
//             4000+
//             <p>{t("result.satisfied_customers")}</p>
//           </li>
//           <li>
//             12
//             <p>{t("result.years_experience")}</p>
//           </li>
//           <li>
//             100+
//             <p>{t("result.trusted_partners")}</p>
//           </li>
//           <li>
//             98%
//             <p>{t("result.satisfaction_rating")}</p>
//           </li>
//         </ul>
//       </div>
//       <ContactUs />
//       <div className="ContactUsTwoService">
//         <div className="ContactUsTwoService__content">
//           <div className="ContactUsTwoService__content-title">
//             <h2>{t("contacts.title")}</h2>
//             <p>{t("contacts.description")}</p>
//           </div>
//           <div className="ContactUsTwoService__content-items">
//             {data.map((elem) => (
//               <div
//                 key={elem.id}
//                 className="ContactUsTwoService__content-items-item"
//               >
//                 <img src={elem.url} alt="image" />
//                 <h2>{elem.title}</h2>
//                 <p>{elem.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

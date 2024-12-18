// import "./ServicesHome.scss";
// import ContactUs from "../ContactUs/ContactUs";
// import { useTranslation } from "react-i18next";
// import Card from "../Card/Card";


// export default function ServicesHome() {
//   const { t } = useTranslation();
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
//         <div className="ServicesHome__content-block">
//           <div className="ServicesHome__content-block-box">
//             <div className="ServicesHome__content-block-box-Left"></div>
//             <div className="ServicesHome__content-block-box-Right">
//               <h2>{t("services.seaTransportation")}</h2>
//               <p>{t("services.seaTransportationDescription")}</p>
//             </div>
//           </div>
//         </div>

//         <div className="ServicesHome__content-blockTwo">
//           <div className="ServicesHome__content-blockTwo-box">
//             <div className="ServicesHome__content-blockTwo-box-Left">
//               <h2>{t("services.airTransportation")}</h2>
//               <p>{t("services.airTransportationDescription")}</p>
//             </div>
//             <div className="ServicesHome__content-blockTwo-box-Right"></div>
//           </div>
//         </div>
//         <div className="ServicesHome__content-blockThree">
//           <div className="ServicesHome__content-blockThree-box">
//             <div className="ServicesHome__content-blockThree-box-Left"></div>
//             <div className="ServicesHome__content-blockThree-box-Right">
//               <h2>{t("services.landTransportation")}</h2>
//               <p>{t("services.landTransportationDescription")}</p>
//             </div>
//           </div>
//         </div>

//         <div className="ServicesHome__content-blockFour">
//           <div className="ServicesHome__content-blockFour-box">
//             <div className="ServicesHome__content-blockFour-box-Left">
//               <h2>{t("services.customsClearance")}</h2>
//               <p>{t("services.customsClearanceDescription")}</p>
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
//       <Card />
//       <div className="resultServices">
//           <ul>
//             <li>
//               4000+
//               <p>{t("result.satisfied_customers")}</p>
//             </li>
//             <li>
//               12
//               <p>{t("result.years_experience")}</p>
//             </li>
//             <li>
//               100+
//               <p>{t("result.trusted_partners")}</p>
//             </li>
//             <li>
//               98%
//               <p>{t("result.satisfaction_rating")}</p>
//             </li>
//           </ul>
//         </div>
//       <ContactUs />
//       <div className="ContactUsTwoService">
//       <div className="ContactUsTwoService__content">
//         <div className="ContactUsTwoService__content-title">
//           <h2>{t("contacts.title")}</h2>
//           <p>{t("contacts.description")}</p>
//         </div>
//         <div className="ContactUsTwoService__content-items">
//           {data.map((elem) => (
//             <div key={elem.id} className="ContactUsTwoService__content-items-item">
//               <img src={elem.url} alt="image" />
//               <h2>{elem.title}</h2>
//               <p>{elem.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }



import "./ServicesHome.scss";
import React, { useRef, useEffect, useState } from "react";
import ContactUs from "../ContactUs/ContactUs";
import { useTranslation } from "react-i18next";
import Card from "../Card/Card";

export default function ServicesHome() {
  const { t } = useTranslation();
  const cardRef = useRef(null);
  const [isCardVisible, setIsCardVisible] = useState(true);

  // Функция для проверки ширины экрана
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsCardVisible(false); // Скрываем компонент, если ширина <= 768px
    } else {
      setIsCardVisible(true); // Показываем компонент, если ширина > 768px
    }
  };

  // Хук для добавления/удаления слушателя события resize
  useEffect(() => {
    handleResize(); // Проверка при монтировании компонента

    window.addEventListener("resize", handleResize); // Добавляем слушатель события

    return () => {
      window.removeEventListener("resize", handleResize); // Удаляем слушатель при размонтировании
    };
  }, []);

  // Данные для отображения контактов
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
        <div className="ServicesHome__content-block">
          <div className="ServicesHome__content-block-box">
            <div className="ServicesHome__content-block-box-Left"></div>
            <div className="ServicesHome__content-block-box-Right">
              <h2>{t("services.seaTransportation")}</h2>
              <p>{t("services.seaTransportationDescription")}</p>
            </div>
          </div>
        </div>

        <div className="ServicesHome__content-blockTwo">
          <div className="ServicesHome__content-blockTwo-box">
            <div className="ServicesHome__content-blockTwo-box-Left">
              <h2>{t("services.airTransportation")}</h2>
              <p>{t("services.airTransportationDescription")}</p>
            </div>
            <div className="ServicesHome__content-blockTwo-box-Right"></div>
          </div>
        </div>

        <div className="ServicesHome__content-blockThree">
          <div className="ServicesHome__content-blockThree-box">
            <div className="ServicesHome__content-blockThree-box-Left"></div>
            <div className="ServicesHome__content-blockThree-box-Right">
              <h2>{t("services.landTransportation")}</h2>
              <p>{t("services.landTransportationDescription")}</p>
            </div>
          </div>
        </div>

        <div className="ServicesHome__content-blockFour">
          <div className="ServicesHome__content-blockFour-box">
            <div className="ServicesHome__content-blockFour-box-Left">
              <h2>{t("services.customsClearance")}</h2>
              <p>{t("services.customsClearanceDescription")}</p>
              <ul>
                <li>{t("services.documentPreparation")}</li>
                <li>{t("services.customsDuties")}</li>
                <li>{t("services.customsConsultation")}</li>
                <li>{t("services.representation")}</li>
                <li>{t("services.productClassification")}</li>
                <li>{t("services.transitGoods")}</li>
              </ul>
            </div>
            <div className="ServicesHome__content-blockFour-box-Right"></div>
          </div>
        </div>
      </div>
      {isCardVisible && <Card ref={cardRef} />}
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

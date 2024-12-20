// import Card from "../Card/Card";
// import Contact from "../Contact/Contact";
// import { useTranslation } from "react-i18next";
// import "./AboutHome.scss";
// import Service from "../Service/Service";
// import ContactUs from "../ContactUs/ContactUs";


// export default function AboutHome() {
//   const { t } = useTranslation();

//   return (
//     <div className="aboutHome">
//       <div className="aboutHome__content">
//         <div className="aboutHome__content-title">
//           <h2>{t("aboutHome.title")}</h2>
//         </div>
//         <div className="aboutHome__content-whoWeAre">
//           <p>{t("aboutHome.whoWeAreDescription1")}</p>
//           {/* <p>{t("aboutHome.whoWeAreDescription2")}</p> */}
//           <div className="aboutHome__content-whoWeAre-box">
//             <img src="./images/abouthome_trucks.png" alt="trucks" />
//             <p>{t("aboutHome.whoWeAreDescription2")}</p>
//           </div>
//         </div>
//         <div className="aboutHome__content-activity">
//           <div className="aboutHome__content-activity-box">
//             <div className="aboutHome__content-activity-box-text">
//               <h2>{t("aboutHome.activity")}</h2>
//               <p>{t("aboutHome.activityDescription")}</p>
//             </div>
//             <img
//               className="aboutHome__content-activity-box-img"
//               src="./images/abouthome_container2.jfif"
//               alt="trucks"
//             />
//           </div>
//         </div>
//         <Card />
//         <div className="resultAbout">
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
//         <div className="aboutHome__content-achievements">
//           <div className="aboutHome__content-achievements-box">
//             <div className="aboutHome__content-achievements-box-left">
//               <div className="aboutHome__content-achievements-box-left-title">
//                 <h2>{t("aboutHome.achievementsTitle")}</h2>
//               </div>
//               <p>{t("aboutHome.achievementsDescription")}</p>
//             </div>
//             <div className="aboutHome__content-achievements-box-right">
//               <img src="./images/certification2-2.jpg" alt="achievements" />
//               <img src="./images/certification2-3.jpg" alt="achievements" />
//             </div>
//           </div>
//         </div>
//         <ContactUs />
//         <Service />
//         <Contact />
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import Card from "../Card/Card";
// import Contact from "../Contact/Contact";
// import { useTranslation } from "react-i18next";
// import "./AboutHome.scss";
// import Service from "../Service/Service";
// import ContactUs from "../ContactUs/ContactUs";


// export default function AboutHome() {
//   const { t } = useTranslation();






//   const [isVisible, setIsVisible] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsVisible(window.innerWidth < 768);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="aboutHome">
//       <div className="aboutHome__content">
//         <div className="aboutHome__content-title">
//           <h2>{t("aboutHome.title")}</h2>
//         </div>
//         <div className="aboutHome__content-whoWeAre">
//           <p>{t("aboutHome.whoWeAreDescription1")}</p>
//           <div className="aboutHome__content-whoWeAre-box">
//             <img src="./images/abouthome_trucks.png" alt="trucks" />
//             <p>{t("aboutHome.whoWeAreDescription2")}</p>
//           </div>
//         </div>
//         <div className="aboutHome__content-activity">
//           <div className="aboutHome__content-activity-box">
//             <div className="aboutHome__content-activity-box-text">
//               <h2>{t("aboutHome.activity")}</h2>
//               <p>{t("aboutHome.activityDescription")}</p>
//             </div>
//             <img
//               className="aboutHome__content-activity-box-img"
//               src="./images/aboutHome.jpg"
//               alt="trucks"
//             />
//           </div>
//         </div>
//         <Card />
//         <div className="resultAbout">
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
//         <div className="aboutHome__content-achievements">
//           <div className="aboutHome__content-achievements-box">
//             <div className="aboutHome__content-achievements-box-left">
//               <div className="aboutHome__content-achievements-box-left-title">
//                 <h2>{t("aboutHome.achievementsTitle")}</h2>
//               </div>
//               <p>{t("aboutHome.achievementsDescription")}</p>
//             </div>
//             <div className="aboutHome__content-achievements-box-right">
//               <img src="./images/certification2-2.jpg" alt="achievements" />
//               <img src="./images/certification2-3.jpg" alt="achievements" />
//             </div>
//           </div>
//         </div>
//         {isVisible && <ContactUs />}
//         <Service />
//         <Contact />
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Contact from "../Contact/Contact";
import { useTranslation } from "react-i18next";
import "./AboutHome.scss";
import Service from "../Service/Service";
import ContactUs from "../ContactUs/ContactUs";

export default function AboutHome() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(window.innerWidth < 769);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedTwo, setIsExpandedTwo] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleReadMoreTwo = () => {
    setIsExpandedTwo(!isExpandedTwo);
  };

  return (
    <div className="aboutHome">
      <div className="aboutHome__content">
        <div className="aboutHome__content-title">
          <h2>{t("aboutHome.title")}</h2>
        </div>
        <div className="aboutHome__content-whoWeAre">
          <p className={isExpanded ? "expanded" : "collapsed"}>
            {t("aboutHome.whoWeAreDescription1")}
          </p>
          {isVisible && (
            <span onClick={toggleReadMore} className="aboutHome__content-whoWeAre-btn">
              {isExpanded ? t("More...") : t("More...")}
            </span>
          )}
          <div className="aboutHome__content-whoWeAre-box">
            <img src="./images/abouthome_trucks.png" alt="trucks" />
            <p className={isExpandedTwo ? "expandedTwo" : "collapsedTwo"}>{t("aboutHome.whoWeAreDescription2")}</p>
            {isVisible && (
            <span onClick={toggleReadMoreTwo} className="aboutHome__content-whoWeAre-btn">
              {isExpandedTwo ? t("More...") : t("More...")}
            </span>
          )}
          </div>
          
        </div>
        <div className="aboutHome__content-activity">
          <div className="aboutHome__content-activity-box">
            <div className="aboutHome__content-activity-box-text">
              <h2>{t("aboutHome.activity")}</h2>
              <p>{t("aboutHome.activityDescription")}</p>
            </div>
            <img
              className="aboutHome__content-activity-box-img"
              src="./images/aboutHome.jpg"
              alt="trucks"
            />
          </div>
        </div>
        <Card />
        <div className="resultAbout">
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
        <div className="aboutHome__content-achievements">
          <div className="aboutHome__content-achievements-box">
            <div className="aboutHome__content-achievements-box-left">
              <div className="aboutHome__content-achievements-box-left-title">
                <h2>{t("aboutHome.achievementsTitle")}</h2>
              </div>
              <p>{t("aboutHome.achievementsDescription")}</p>
            </div>
            <div className="aboutHome__content-achievements-box-right">
              <img src="./images/certification2-2.jpg" alt="achievements" />
              <img src="./images/certification2-3.jpg" alt="achievements" />
            </div>
          </div>
        </div>
        {isVisible && <ContactUs />}
        <Service />
        <Contact />
      </div>
    </div>
  );
}

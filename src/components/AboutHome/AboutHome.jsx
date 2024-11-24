import Card from "../Card/Card";
import Contact from "../Contact/Contact";
import Result from "../Result/Result";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./AboutHome.scss";
import Service from "../Service/Service";

export default function AboutHome() {
  const { t } = useTranslation();

  return (
    <div className="aboutHome">
      <div className="aboutHome__content">
        <div className="aboutHome__content-title">
          <h2>{t("aboutHome.title")}</h2>
        </div>
        <div className="aboutHome__content-whoWeAre">
          <p>{t("aboutHome.whoWeAreDescription1")}</p>

          <div className="aboutHome__content-whoWeAre-box">
            <img src="./images/abouthome_trucks.png" alt="trucks" />
            <p>{t("aboutHome.whoWeAreDescription2")}</p>
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
              src="./images/abouthome_container2.jfif"
              alt="trucks"
            />
           
            
          </div>
        </div>
        <Card />
        <Result />
        <div className="aboutHome__content-achievements">
          <div className="aboutHome__content-achievements-box">
            <div className="aboutHome__content-achievements-box-left">
              <div className="aboutHome__content-achievements-box-left-title">
                <h2>{t("aboutHome.achievementsTitle")}</h2>
              </div>
              <p>{t("aboutHome.achievementsDescription")}</p>
            </div>
            <div className="aboutHome__content-achievements-box-right">
              <img src="./images/achievement1.png" alt="achievements" />
              <img src="./images/achievement2.png" alt="achievements" />
            </div>
          </div>
        </div>
        <Service />
        <Contact />
      </div>
    </div>
  );
}

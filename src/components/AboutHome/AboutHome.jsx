// import About from "../About/About";
import Card from "../Card/Card";
import Contact from "../Contact/Contact";
import Result from "../Result/Result";
import { Link } from "react-router-dom";
import "./AboutHome.scss";
export default function AboutHome() {
  return (
    <div className="aboutHome">
      <div className="aboutHome__content">
        <div className="aboutHome__content-title">
          <h2>About Us</h2>
        </div>
        <div className="aboutHome__content-whoWeAre">
          <h2>Who We Are</h2>
          <p>
            Founded in 2012, "Elasco Express" LLC has now turned into a leading
            transport and logistics company that provides complex solutions for
            air, sea and land transportation. Having more than ten years of
            experience, we offer logistics services that meet the changing needs
            of businesses around the world. One of the reasons for the
            successful implementation of services is its own transport fleet,
            which consists of vehicles with a load capacity from 9 to 23 tons,
            and in volume from 50 to 120 CBM, with various types of
            semi-trailers: with tent, with a refrigerated installation, etc. The
            second factor of successful activity is the long-term cooperation
            with various foreign transport companies, which allows the two-way
            transportation not only from the CIS countries, but also from
            Europe, China, Iran, Georgia and from any point in the world.
          </p>
          <div className="aboutHome__content-whoWeAre-box">
            <p>
              Our extensive services include air, sea and land transportation,
              which allows us to process almost any transportation with accuracy
              and efficiency. Regardless of the type of transportation, we
              provide safe and timely delivery of your cargo.
            </p>
            {/* <img src="./images/trucks.svg" alt="trucks" /> */}
          </div>
        </div>
        <Card />
        <Result />

        <div className="aboutHome__content-activity">
          <div className="aboutHome__content-activity-box">
            <div className="aboutHome__content-activity-box-text">
              <h2>Activity</h2>
              <p>
                Today, we provide our clients with a full range of transport and
                logistics services, including transportation by road and sea, as
                well as air freight. The main activities of the company are the
                transportation of consolidated cargo, transportation by full
                trucks, warehouse storage, specialization in the transportation
                of dangerous goods and high-risk goods. Our company's clients
                are numerous enterprises representing the chemical, food,
                energy, electrotechnical, machine-building, metallurgical,
                construction and mining industries.
              </p>
            </div>
            <img
              className="aboutHome__content-activity-box-img"
              src="./images/trucksActivity.svg"
              alt="trucks"
            />
          </div>
        </div>
        <div className="aboutHome__content-achievements">
          <div className="aboutHome__content-achievements-box">
            <div className="aboutHome__content-achievements-box-left">
              <div className="aboutHome__content-achievements-box-left-title">
                <img src="./images/badge.svg" alt="badge" />
                <h2>Our achievements</h2>
              </div>
              <p>
                In 2024, LLC "Elasco Express" was recognized as a high-class
                logistics provider, took 1st place as a freight forwarding
                company and received a certificate from the largest
                international freight exchange platform in the Russian
                Federation and the CIS region ATI.SU. This recognition reflects
                our commitment to quality service, efficiency and customer
                satisfaction.
              </p>
            </div>

            <div className="aboutHome__content-achievements-box-right">
              <img src="./images/Achievement.svg" alt="achievements" />
            </div>
          </div>
        </div>
        <div className="aboutHome__content-service">
          <div className="aboutHome__content-service-title">
            <h2>Our Main Service Include</h2>
            <Link to="/services">
              <button>More About Services</button>
            </Link>
          </div>
          <div className="aboutHome__content-service-items">
            <div className="aboutHome__content-service-items-top">
              <div className="aboutHome__content-service-items-top-item">
                <div className="aboutHome__content-service-items-top-item-title">
                  <div className="aboutHome__content-service-items-top-item-title-img">
                    <img src="./images/finance.svg" alt="image" />
                  </div>
                  <h2>Air Transportation</h2>
                </div>
                <p>
                  Thanks to various routes through the airports of Europe,
                  Russia, China (Shenzhen, Shanghai and Guangzhou), we offer
                  fast, flexible and effective solutions for the delivery of
                  your urgent cargo.
                </p>
              </div>
              <div className="aboutHome__content-service-items-top-item">
                <div className="aboutHome__content-service-items-top-item-title">
                  <div className="aboutHome__content-service-items-top-item-title-img">
                    <img src="./images/cargo-ship.svg" alt="image" />
                  </div>
                  <h2>Sea Transportation</h2>
                </div>
                <p>
                  For larger or wholesale deliveries, our sea transportation
                  services are the best option. We cooperate with leading sea
                  carriers, offering options for full container loading (FCL)
                  and consolidated cargo  (LCL), ensuring uninterrupted delivery
                  of goods.
                </p>
              </div>
            </div>
            <div className="aboutHome__content-service-items-bottom">
              <div className="aboutHome__content-service-items-bottom-item">
                <div className="aboutHome__content-service-items-bottom-item-title">
                  <div className="aboutHome__content-service-items-top-item-title-img">
                    <img src="./images/land-transportation.svg" alt="image" />
                  </div>
                  <h2>Land Transportation</h2>
                </div>
                <p>
                  Our land freight services offer flexible and safe options for
                  the delivery of goods from different countries, in particular
                  from Europe, CIS countries, China, Georgia, Iran and in the
                  opposite direction. Regardless of the distance, we guarantee
                  that your goods will be carefully loaded, unloaded and
                  delivered within the pre-arranged terms.
                </p>
              </div>
              <div className="aboutHome__content-service-items-bottom-center">
                <img src="./images/world-map.svg" alt="image" />
              </div>
              <div className="aboutHome__content-service-items-bottom-item">
                <div className="aboutHome__content-service-items-bottom-item-title">
                  <div className="aboutHome__content-service-items-top-item-title-img">
                    <img src="./images/finance.svg" alt="image" />
                  </div>
                  <h2>Registration & Customs Clearance</h2>
                </div>
                <p>
                  Registration and customs clearance. We also specialize in
                  customs clearance services, simplifying the complex processes
                  of regulating international trade. Our experienced team
                  provides seamless customs clearance, reducing the risk of
                  delays and ensuring compliance with all laws and regulations.
                </p>
              </div>
            </div>
            <div />
          </div>
          <div />
        </div>
        <Contact />
      </div>
    </div>
  );
}

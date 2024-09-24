import "./About.scss";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="About">
      <div className="About__content">
        <div className="About__content-image">
          <img src="./images/imgTwo.svg" alt="about" />
        </div>
        <div className="About__content-text">
          <h1>ABOUT US</h1>
          <h3>
            ELASCO EXPRESS LLC has been successfully operating in the market of
            transport and logistics services for 10 years and provides logistics
            services with a reputation as a reliable partner.
          </h3>
          <p>
            Today the company provides its clients with a full range of
            transport, forwarding and logistics services, including cargo
            transportation by road and sea, and also air transportation.{" "}
          </p>

          <Link to="/about">
            <button>More About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

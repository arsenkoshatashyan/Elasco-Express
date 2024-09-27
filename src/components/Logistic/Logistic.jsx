import { Link } from "react-router-dom";
import "./Logistic.scss";

export default function Logistic() {
  return (
    <div className="Logistic">
      <div className="Logistic__content">
        <div className="Logistic__content-about">
          <h3>FASTEST AND SECURED</h3>
          <h1>LOGISTIC SOLUTIONS</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <Link to="/services">
            <button>SERVICES</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

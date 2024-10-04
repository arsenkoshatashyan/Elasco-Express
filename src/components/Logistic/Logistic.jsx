import { Link } from "react-router-dom";
import "./Logistic.scss";

import Translate from "../../i18n/Translate";

export default function Logistic() {
  return (
    <div className="Logistic">
      <div className="Logistic__content">
        <div className="Logistic__content-about">
          <h3><Translate id='title'/></h3>
          <h1>LOGISTIC SOLUTIONS</h1>
          <p>
          <Translate id="desc"/>
          </p>
          <Link to="/services">
            <button>SERVICES</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

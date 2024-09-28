import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__content">
        <div className="Footer__content-left">
          <div className="Footer__content-left-truck">
            <img src="./images/truck.svg" alt="truck" />
            <p>
              Our comprehensive logistics services ensure timely and secure
              delivery for your business, providing the coverage you need for
              all your shipping needs.
            </p>
          </div>
          <div className="Footer__content-left-socials">
            <a href="">
              <img src="./images/x.svg" alt="x" />
            </a>
            <a href="https://www.instagram.com/elasco_express?igsh=MTNlcDgzMTg1Njl6">
              <img src="./images/instagram.svg" alt="instagram" />
            </a>
            <a href="https://t.me/elasco24">
              <img src="./images/tg.svg" alt="telegram" />
            </a>
            <a href="">
              <img src="./images/facebook.svg" alt="facebook" />
            </a>
          </div>
        </div>
        <div className="Footer__content-center">
          <h2>Explore</h2>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/news">News</Link>
          </ul>
        </div>
        <div className="Footer__content-right">
          <div className="Footer__content-right-title">
            <h2>DO YOU NEED ADVICE FROM OUR SPECIALIST?</h2>
            <p>
              Leave your phone number in the form and we will call you back to
              consult you for free
            </p>
          </div>
          <form>
            <input type="tel" placeholder="Phone number" required/>
            <br />
            <button>Call me back</button>
          </form>
        </div>
      </div>

      <hr />
      <p>Copyright © 2024 Elasco Express. All Rights Reserved </p>
    </footer>
  );
}

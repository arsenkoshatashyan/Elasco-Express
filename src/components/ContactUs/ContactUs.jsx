import "./ContactUs.scss";
export default function ContactUs() {
  return (
    <div className="contactUs">
      <div className="contactUs__content">
        <div className="contactUs__content-left">
          <div className="contactUs__content-left-title">
            <h2>
              LET’S CONNECT WITH US FOR ANY <br />
              <span>TRUCK SERVICE</span>
            </h2>
            <p>
              Contact us today to experience the difference of working with a
              trusted insurance provider.
            </p>
          </div>
          <div className="contactUs__content-left-form">
            <form>
              <input required type="text" name="name" placeholder="Full name" />
              <br />
              <input required type="email" name="email" placeholder="Email" />
              <input
                required
                type="tel"
                name="tel"
                placeholder="Phone number"
              />
              <br />
              <input
                required
                type="text"
                name="interested"
                placeholder="Interested"
              />
              <br />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className="contactUs__content-right">
          {/* <img src="./images/earth.svg" alt="Earth illustration" /> */}
        </div>
      </div>
    </div>
  );
}

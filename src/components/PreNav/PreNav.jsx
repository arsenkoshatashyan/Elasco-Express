import "./PreNav.scss";
export default function PreNav() {
  return (
    <div className="preNav">
      <div className="preNav__content">
        <div className="preNav__content-phone">
          <img src="./images/phone.svg" alt="phone" />
          <a href="tel:+374 98 555 378">+374 98 555 378</a>
        </div>
        <div className="preNav__content-email">
          <img src="./images/letter.svg" alt="mail" />
          <a href="email">elasco.exspress@mail.ru</a>
        </div>
      </div>
    </div>
  );
}

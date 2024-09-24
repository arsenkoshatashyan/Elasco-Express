import "./PreNav.scss";
export default function PreNav() {
  return (
    <div className="preNav">
      <div className="preNav__content">
        <div className="preNav__content-phone">
          <img src="./images/phone.svg" alt="phone" />
          <p>+374 98 555 378</p>
        </div>
        <div className="preNav__content-email">
          <img src="./images/letter.svg" alt="mail" />
          <p>elasco.exspress@mail.ru</p>
        </div>
      </div>
    </div>
  );
}

import "./Info.scss";

export default function Info() {
  return (
    <div className="Info">
      <div className="Info__content">
        <div className="Info__content-phone">
          <img src="./images/phone.svg" alt="phone" />
          <a href="tel:+374 98 555 378">+374 98 555 378</a>
        </div>
        <div className="Info__content-email">
          <img src="./images/letter.svg" alt="mail" />
          <a href="emailto:elasco.exspress@mail.ru">elasco.exspress@mail.ru</a>
        </div>
      </div>
    </div>
  );
}
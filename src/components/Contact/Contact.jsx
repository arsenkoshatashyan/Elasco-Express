import "./Contact.scss";

const data = [
  {
    id: 0,
    url: "/images/support.svg",
    title: "Contact",
    description: "+374 98 555 378",
  },
  {
    id: 1,
    url: "/images/geo.svg",
    title: "Address",
    description: "0064, Yerevan, Arno Babajanyan 26/5 str., apt.1",
  },
  {
    id: 2,
    url: "/images/email.svg",
    title: "Mail",
    description: "elasco.exspress@mail.ru",
  },
];
export default function Contact() {
  
  return (
    <div className="Contact">
      <div className="Contact__content">
        <div className="Contact__content-title">
          <h2>GET IN TOUCH</h2>
          <p>Need Reliable Logistics Solutions? Contact Us Today!</p>
        </div>
        <div className="Contact__content-items">
          {data.map((elem) => (
            <div key={elem.id} className="Contact__content-items-item">
              <img src={elem.url} alt="image" />
              <h2>{elem.title}</h2>
              <p>{elem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import "./Card.scss";
export default function Card() {
  const data = [
    {
      id: 0,
      url: "/images/card1.svg",
      description: "Optimized Cost",
    },
    {
      id: 1,
      url: "/images/card2.svg",
      description: "Personal Approach ",
    },
    {
      id: 2,
      url: "/images/card3.svg",
      description: "Shipping Worldwide",
    },
    {
      id: 3,
      url: "/images/card4.svg",
      description: "Safety & Rollability",
    },
    {
      id: 4,
      url: "/images/card5.svg",
      description: "Delivery on Time",
    },
  ];
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content-title">
          <h2>Why Choose Us?</h2>
          <p>We provide full range global logistics solution.</p>
        </div>
        <div className="card__content-items">
          {data.map((elem) => (
            <div key={elem.id} className="card__content-items-item">
              <img src={elem.url} alt="image" />
              <p>{elem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
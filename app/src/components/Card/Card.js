import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__logo">
        <img src={props.logo} alt="" />
      </div>
      <p className="card__sub-title">{props.subTitle}</p>
      <h3 className="card__title">{props.title}</h3>
      <p className="company">{props.company}</p>
      <p className="location">{props.location}</p>
    </div>
  );
};

export default Card;

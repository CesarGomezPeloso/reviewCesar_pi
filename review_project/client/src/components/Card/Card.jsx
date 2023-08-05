import style from "./Card.module.css"

const Card = (porps) => {
  return (
    <div className={style.card}>
      <p>Name: {porps.name}</p>
      <p>Email: {porps.email}</p>
      <p>Phone: {porps.phone}</p>
    </div>
  );
};

export default Card;

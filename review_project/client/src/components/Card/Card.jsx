const Card = (porps) => {
  return (
    <div>
      <p>Name: {porps.name}</p>
      <p>Email: {porps.email}</p>
      <p>Phone: {porps.phone}</p>
    </div>
  );
};

export default Card;

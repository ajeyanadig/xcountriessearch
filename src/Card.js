function Card({ common, png }) {
  return (
    <div
      className="countryCard"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "200px",
        width: "200px",
        border: "1px solid gray",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <img height={100} width={100} src={png} alt={common} />
      <span>{common}</span>
    </div>
  );
}

export default Card;

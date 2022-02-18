import "./SingleCard.css";

export default function SingleCard({
  disabled,
  cardId,
  flipped,
  card,
  handleChoice,
}) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      {/* conditional way of adding classes *takes note* */}
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="" />
        <img
          className="back"
          src="./img/cover.png"
          onClick={handleClick}
          alt=""
        />
      </div>
    </div>
  );
}

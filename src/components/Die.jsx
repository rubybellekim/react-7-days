import "../pages/pages.css";

function Die(props) {
  return (
    <div
      className={props.isHeld ? "die-held" : "die-items"}
      onClick={props.holdDice}
    >
      <h2 className="die-num">
        <img src={props.value} />
      </h2>
    </div>
  );
}

export default Die;

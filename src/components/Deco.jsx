import { React, useState, useEffect } from "react";
import "../style.css";

export default function Deco(props) {
  const [decoToggle1, setDecoToggle1] = useState(false);

  var imgNames = "/tenzies/" + props.img + ".png";

  function handleClick() {
    console.log(props.id);
    setDecoToggle1(!decoToggle1);
  }

  return (
    <div className="decoCard">
      <img
        src={imgNames}
        id={props.id}
        onClick={handleClick}
        className="decoImg"
      />
    </div>
  );
}

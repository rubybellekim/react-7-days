import React from "react";
import "../style.css";
import Countdown from "react-countdown";

export default function Footer() {
  const renderer = ({ total, days, hours, minutes, seconds }) => {
    let style = {
      color: "white",
      width: "30px",
      backgroundColor: "gray",
      borderRadius: "5px",
      margin: "3px",
    };
    if (total) {
      // Render a countdown
      return (
        <div>
          <span className="countdown font-mono text-2xl" style={style}>
            {days}
          </span>
          :
          <span className="countdown font-mono text-2xl" style={style}>
            {hours}
          </span>
          :
          <span className="countdown font-mono text-2xl" style={style}>
            {minutes}
          </span>
          :
          <span className="countdown font-mono text-2xl" style={style}>
            {seconds}
          </span>
        </div>
      );
    } else {
      // Render a finished state
      return (
        <span style={{ style }}>
          <span>Merry Christmas!</span>
        </span>
      );
    }
  };

  return (
    <div className="footer">
      <div className="countdown">
        <Countdown date={"2023-12-25T00:00:00"} renderer={renderer} />
      </div>
      <div className="rights">
        <p>All rights reversed by Ruby Kim</p>
      </div>
    </div>
  );
}

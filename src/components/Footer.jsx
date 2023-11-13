import React from "react";
import "./style.css";
import Countdown from "react-countdown";

export default function Footer() {
  return (
    <div className="footer">
      <div className="countdown">
        <Countdown date={"2023-12-25T00:00:00"} />
      </div>
      <div className="rights">
        <p>All rights reversed by Ruby Kim</p>
      </div>
    </div>
  );
}

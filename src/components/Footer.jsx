import React from "react";
import "../style.css";
import Countdown from "react-countdown";
import Timer from "./Timer";

export default function Footer() {
  return (
    <div className="footer">
      <div className="countdown">
        <Timer />
      </div>
      <div className="rights">
        <p>All rights reversed by Ruby Kim</p>
      </div>
    </div>
  );
}

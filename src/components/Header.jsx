import React from "react";
import "../style.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-links">
        <i className="material-icons">favorite</i>
        <i className="material-icons">attachment</i>
        <i className="material-icons">computer</i>
      </div>
      <div className="header-logo">LOGO HERE</div>
      <div className="header-profile"></div>
    </div>
  );
}

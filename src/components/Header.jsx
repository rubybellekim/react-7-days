import React from "react";
import "./style.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-links">
        <i class="material-icons">favorite</i>
        <i class="material-icons">attachment</i>
        <i class="material-icons">computer</i>
      </div>
      <div className="header-logo">LOGO HERE</div>
      <div className="header-profile">profile</div>
    </div>
  );
}

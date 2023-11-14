import React from "react";
import Home from "../Home";
import "../style.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link to={props.route}>
      <div className="card bg-gray-300">{props.text}</div>
    </Link>
  );
}

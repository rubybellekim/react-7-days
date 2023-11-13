import React from "react";
import Card from "./Card.jsx";
import "./style.css";

export default function Body() {
  const data = [
    {
      id: 18,
      text: "18",
    },
    {
      id: 19,
      text: "19",
    },
    {
      id: 20,
      text: "20",
    },
    {
      id: 21,
      text: "21",
    },
    {
      id: 22,
      text: "22",
    },
    {
      id: 23,
      text: "23",
    },
    {
      id: 24,
      text: "24",
    },
  ];

  const cards = data.map((c) => {
    return <Card key={c.id} {...c} />;
  });

  return (
    <div className="body">
      <div className="body-cards">{cards}</div>
    </div>
  );
}

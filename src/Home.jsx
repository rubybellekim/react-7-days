import Card from "./components/Card";
import { Outlet, Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  const data = [
    {
      id: 21,
      text: "21 joke",
      route: "/21-joke",
    },
    {
      id: 22,
      text: "22 santa",
      route: "/22-which-santa",
    },
    {
      id: 23,
      text: "23 santa2",
      route: "/23-meet-santa",
    },
    {
      id: 24,
      text: "24 tenzies",
      route: "/24-tenzies",
    },
    {
      id: 25,
      text: "25 elf",
      route: "/25-my-elf",
    },
  ];
  const cards = data.map((c) => <Card key={c.id} {...c} />);

  return (
    <div>
      <div className="body-cards">{cards}</div>
      <Outlet />
    </div>
  );
};

export default Home;

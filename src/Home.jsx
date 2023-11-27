import Card from "./components/Card";
import { Outlet, Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  const data = [
    {
      id: 18,
      text: "18 joke",
      route: "/18-joke",
    },
    {
      id: 19,
      text: "19 none",
      route: "/",
    },
    {
      id: 20,
      text: "20 jump",
      route: "/20-santa-jump",
    },
    {
      id: 21,
      text: "21 tree",
      route: "/21-deco-tree",
    },
    {
      id: 22,
      text: "22 tenzies",
      route: "/22-tenzies",
    },
    {
      id: 23,
      text: "23 cake",
      route: "/23-deco-cake",
    },
    {
      id: 24,
      text: "24 elf",
      route: "/24-my-elf",
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

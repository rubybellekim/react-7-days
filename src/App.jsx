import Joke from "./pages/Joke.jsx";
import MyElf from "./pages/MyElf.jsx";
import WhichSanta from "./pages/WhichSanta.jsx";
import MeetSanta from "./pages/MeetSanta.jsx";
import Tenzies from "./pages/Tenzies.jsx";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="21-joke" element={<Joke />} />
          <Route path="22-which-santa" element={<WhichSanta />} />
          <Route path="23-meet-santa" element={<MeetSanta />} />
          <Route path="24-tenzies" element={<Tenzies />} />
          <Route path="25-my-elf" element={<MyElf />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

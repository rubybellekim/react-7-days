import FortuneCookie from "./pages/FortuneCookie.jsx";
import Joke from "./pages/Joke.jsx";
import MyElf from "./pages/MyElf.jsx";
import WhichSanta from "./pages/WhichSanta.jsx";
import FortuneCake from "./pages/FortuneCake.jsx";
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
          <Route path="18-joke" element={<Joke />} />
          <Route path="19" element={<Home />} />
          <Route path="20-which-santa" element={<WhichSanta />} />
          <Route path="21-fortune-cookie" element={<FortuneCookie />} />
          <Route path="22-tenzies" element={<Tenzies />} />
          <Route path="23-fortune-cake" element={<FortuneCake />} />
          <Route path="24-my-elf" element={<MyElf />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

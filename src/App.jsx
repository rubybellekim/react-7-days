import DecoCake from "./pages/DecoCake.jsx";
import DecoTree from "./pages/DecoTree.jsx";
import Joke from "./pages/Joke.jsx";
import MyElf from "./pages/MyElf.jsx";
import Profile from "./pages/Profile.jsx";
import SantaJump from "./pages/SantaJump.jsx";
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
          <Route path="profile" element={<Profile />} />
          <Route path="18-joke" element={<Joke />} />
          <Route path="19" element={<Home />} />
          <Route path="20-santa-jump" element={<SantaJump />} />
          <Route path="21-deco-tree" element={<DecoTree />} />
          <Route path="22-tenzies" element={<Tenzies />} />
          <Route path="23-deco-cake" element={<DecoCake />} />
          <Route path="24-my-elf" element={<MyElf />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

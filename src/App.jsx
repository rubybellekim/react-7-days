import { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <main>
      <Header />
      <Body />
      <Footer />
    </main>
  );
}

export default App;

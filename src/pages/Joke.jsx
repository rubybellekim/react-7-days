import { React, useState, useEffect } from "react";
import "./pages.css";

export default function Joke() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "memes/2-dogs.jpeg",
  });

  const imgList = [
    "2-dogs",
    "bear-christmas",
    "bunnies",
    "cat_and_guy",
    "cat-1",
    "cat-gift",
    "cat02",
    "dog-2",
    "dog-3",
    "dog-4",
    "dog-and-cat",
    "elf",
    "family-2",
    "family1",
    "frozen-1",
    "frozen-2",
    "funny-family",
    "harold-and-kumar",
    "harry-1",
    "jack-black-dear-santa",
    "movie-elf",
    "nicolas-cage-ornament",
    "santa-1",
    "santa-2",
    "santa-and-boy",
    "santa-and-dog",
    "santa-elf",
    "santa-swag",
    "toddler-tree",
    "frog",
    "mashmellow",
    "elf-gift",
    "grumpy-cat",
    "guinea-1",
    "mouse-1",
    "lights",
  ];

  function getMemeImage() {
    const randomNum = Math.floor(Math.random() * imgList.length);
    const imgName = "memes/" + imgList[randomNum] + ".jpeg";

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: imgName,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className="joke">
      <div className="form">
        <input
          type="text"
          placeholder="Top Text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          generate custom meme 🧙🏼‍♂️
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

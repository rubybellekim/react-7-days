import { React, useState, useEffect } from "react";
import { MdOutlineRefresh } from "react-icons/md";
import "./pages.css";

export default function WhichSanta() {
  const [page, setPage] = useState(0);

  const [questions, setQuestions] = useState([
    { name: "A", count: 0 },
    { name: "B", count: 0 },
    { name: "C", count: 0 },
    { name: "D", count: 0 },
  ]);

  const [result, setResult] = useState([]);

  let santaList = [
    {
      keyword: "sheep",
      santa: "Sheep-Cote Cold",
      title: "He tries to suckle yews in farmer’s sheep sheds.",
      contents: (
        <p>
          He is the first Yule Lad who comes to town on the night before the
          12th of December <br />
          and also the first to depart for home on the 25th December. <br />
          Sheep-Cote-Clod was said to harass sheep, <br />
          suck milk from them and was known for having two stiff peg-legs.
        </p>
      ),
      img: "/santa/1_sheep.png",
    },
    {
      keyword: "gully",
      santa: "Gully Gawk",
      title: "He steals foam from buckets of cow milk.",
      contents: (
        <p>
          He is the second Yule Lad who comes to town on the night before the
          13th of December <br />
          and departs for home on the 26th of December. <br />
          Gully Gawk was known to hide in gullies waiting for an opportunity{" "}
          <br />
          to sneak into cowshed and steal the froth of the milk buckets.
        </p>
      ),
      img: "/santa/2_gully_gawk.jpeg",
    },
    {
      keyword: "stubby",
      santa: "Stubby",
      title: "He’s short and steals food from frying pans.",
      contents: (
        <p>
          Stúfur (Stubby) is the third Yule lad <br />
          who comes to town on the night before the 14th of December <br />
          and departs for home on the 27th of December. <br />
          Stubby was known for being unusually short and for stealing pans{" "}
          <br />
          so he could eat the crust left on them.
        </p>
      ),
      img: "/santa/3_stubby.jpeg",
    },
    {
      keyword: "spoon",
      santa: "Spoon Licker",
      title: "He licks spoons.",
      contents: (
        <p>
          Þvörusleikir (Spoon-Licker) is the fourth Yule Lad <br />
          who comes to town on the night before the 15th of December <br />
          and departs for home on the 28th of December. <br />
          Spoon-Licker was known for being tall, thin, <br />
          and for stealing þvörur (long wooden spoons) <br />
          to lick them, hoping to taste something sweet.
        </p>
      ),
      img: "/santa/4_spoon_licker.jpeg",
    },
    {
      keyword: "pot",
      santa: "Pot Scrapper (aka. Pot Licker)",
      title: "He steals unwashed pots and licks them clean.",
      contents: (
        <p>
          Pottaskefill (Pot-Scraper) is the fifth Yule Lad
          <br /> who comes to town on the night before the 16th of December{" "}
          <br />
          and departs for home on the 29th of December. <br />
          Pot-Scraper was known to steal <br />
          and scrape leftovers from pots and pans.
        </p>
      ),
      img: "/santa/5_pot_licker.jpeg",
    },
    {
      keyword: "bowl",
      santa: "Bowl Licker",
      title: "He steals bowls of food from under the bed.",
      contents: (
        <p>
          Askasleikir (Bowl-Licker) is the sixth Yule Lad <br />
          who comes to town on the night before the 17th of December <br />
          and departs for home on the 30th of December. <br />
          Bowl-Licker was known to hide under beds waiting for someone to put
          down their “askur,” <br />
          (a plate used for all meals), which he then licked clean.
        </p>
      ),
      img: "/santa/6_bowl_licker.jpeg",
    },
    {
      keyword: "door-slam",
      santa: "Door Slammer",
      title: "He stomps around and slam doors, keeping everyone awake.",
      contents: (
        <p>
          Hurðaskellir (Door-Slammer) is the seventh Yule Lad <br />
          who comes to town on the night before the 18th of December <br />
          and departs for home on the 31st of December.
          <br />
          Door-Slammer was known to be the loudest one, slamming doors,
          <br />
          especially during nighttime, waking people up in the process.
        </p>
      ),
      img: "/santa/7_door_slammer.jpeg",
    },
    {
      keyword: "skyr",
      santa: "Skyr Gobbler",
      title: "He eats up all the icelandic yogurt(skyr).",
      contents: (
        <p>
          Skyrgámur (Skyr-Gobbler) is the eighth Yule Lad <br />
          who comes to town on the night before the 19th of December <br />
          and departs on the 1st of January. <br />
          Skyr-Gobbler was known to be particularly fond of skyr, <br />
          an Icelandic dairy product similar to yogurt.
        </p>
      ),
      img: "/santa/8_skyr_gobbler.jpeg",
    },
    {
      keyword: "sausage",
      santa: "Sausage Swiper",
      title: "He loves stolen sausages.",
      contents: (
        <p>
          Bjúgnakrækir (Sausage-Swiper) is the ninth Yule Lad <br />
          who comes to town on the night before the 20th of December <br />
          and departs for home on the 2nd of January.
          <br />
          Sausage-Swiper was known to hide in the rafters <br />
          and snatch sausages that were being smoked.
        </p>
      ),
      img: "/santa/9_sausage_swiper.jpeg",
    },
    {
      keyword: "window",
      santa: "Window Peeper",
      title:
        "He likes to creep outside windows and sometimes steal the stuff he sees inside.",
      contents: (
        <p>
          Gluggagægir (Window-Peeper) is the tenth Yule Lad <br />
          who comes to town on the night before the 21st of December <br />
          and departs for home on the 3rd of January. <br />
          Window-Peeper was known for being probably the creepiest one,
          <br /> he would peek inside people’s windows <br />
          to see if there was anything to steal.
        </p>
      ),
      img: "/santa/10_window_peeper.jpeg",
    },
    {
      keyword: "door-sniff",
      santa: "Door Sniffer",
      title:
        "He has a huge nose and an insatiable appetite for stolen baked goods.",
      contents: (
        <p>
          Gáttaþefur (Doorway-Sniffer) is the eleventh Yule Lad <br />
          who comes to town on the night before the 22nd of December and departs
          for home on the 4th of January. <br />
          Doorway-Sniffer was known to have an extremely long, large nose <br />
          and an amazing sense of smell <br />
          he usually used to seek out the Icelandic traditional leaf bred
          (Laufabrauð).
        </p>
      ),
      img: "/santa/11_door_sniffer.jpeg",
    },
    {
      keyword: "meat",
      santa: "Meat Hook",
      title: "He snatches up any meat left out, especially smoked lamb.",
      contents: (
        <p>
          Ketkrókur (Meat-Hook) is the twelfth Yule Lad <br />
          who comes to town on the night before the 23rd of December <br />
          and departs for home on the 5th of January. <br />
          Meat-Hook was known for being crazy about meat <br />
          and he would use a hook to steal a smoked lamb hanging from the
          rafters.
        </p>
      ),
      img: "/santa/12_meat_hook.jpeg",
    },
    {
      keyword: "candle",
      santa: "Candle Beggar",
      title: "He steals candles, made from fat, from children.",
      contents: (
        <p>
          Kertasníkir (Candle-Stealer) is the thirteenth Yule Lad
          <br /> who comes on the night before the 24th of December <br />
          and departs for home on the 6th of January. <br />
          Candle-Stealer was known for being the one who followed children{" "}
          <br />
          to steal their candles (which used to be edible, made from fat).{" "}
          <br />
          Kids often put one candle for him in their shoe
          <br /> that is in the window and get some extra treat from him in
          reward.
        </p>
      ),
      img: "/santa/13_candle_beggar.jpeg",
    },
  ];

  const questionList = [
    {
      q: [
        <p>
          Q1. You've stumbled upon a clandestine holiday buffet before the party
          begins. <br /> Which hidden treat do you slyly sample?
        </p>,
      ],
      a: [
        { type: "A", text: "a) Mysterious Marshmallow Medley" },
        { type: "B", text: "b) Covert Caramel Crunch" },
        { type: "C", text: "c) Secretive Saffron Scones" },
        { type: "D", text: "d) Undercover Ube Utopia" },
      ],
    },

    {
      q: [
        <p>
          Q2. You've infiltrated a workshop where holiday crafts are being made.
          <br />
          What covert creation do you sneak away to impress your friends with
          your crafting skills?
        </p>,
      ],
      a: [
        { type: "A", text: "a) Milkyway Snow Globe Secret" },
        { type: "B", text: "b) Hush-Hush Handmade Holiday Hat" },
        { type: "C", text: "c) Subtle Starry String Art" },
        { type: "D", text: "d) Magical Christmas Card Concoction" },
      ],
    },

    {
      q: [
        <p>
          Q3. At the heart of the festive dance floor, there's a magical
          dance-off happening. <br />
          What undercover dance move do you bust out when the spotlight is on
          someone else?
        </p>,
      ],
      a: [
        { type: "A", text: "a) Muted Moonwalk Magic" },
        { type: "B", text: "b) Aggressive Salsa Spin" },
        { type: "C", text: "c) Stealthy Swing Step" },
        { type: "D", text: "d) Click Cha-Cha-Cha" },
      ],
    },

    {
      q: [
        <p>
          You find a mysterious holiday gift with no tag. <br />
          What covert action do you take to discover its sender?
        </p>,
      ],
      a: [
        { type: "A", text: "a) Gift Collector - Doesn't matter who sent it" },
        {
          type: "B",
          text: "b) Covert Interrogation - Question friends subtly",
        },
        { type: "C", text: "c) Sneaky Surveillance - Watch from a distance" },
        {
          type: "D",
          text: "d) Undercover Detective - Examine the wrapping for clues",
        },
      ],
    },

    {
      q: [
        <p>
          While exploring the Gnome's icy domain, you discover a frozen feast.{" "}
          <br />
          What frosty delicacy do you quietly sample?
        </p>,
      ],
      a: [
        { type: "A", text: "a) Arctic Apple Ambrosia" },
        { type: "B", text: "b) Beef Jerky Sorbet Surprise" },
        { type: "C", text: "c) Rocket-Infused Ice Cream" },
        { type: "D", text: "d) Polar Pineapple Popsicles" },
      ],
    },

    {
      q: [
        <p>
          You're tasked with organizing a festive game for the holiday
          gathering. <br />
          What undercover activity do you plan to keep everyone entertained?
        </p>,
      ],
      a: [
        { type: "A", text: "a) Silent Snowball Toss" },
        { type: "B", text: "b) Mission Candy Cane Hunt" },
        { type: "C", text: "c) Stocking Stuffer Relay" },
        { type: "D", text: "d) Under-the-Radar Reindeer Race" },
      ],
    },

    {
      q: [
        <p>
          You're in charge of decorating the holiday tree, and you have a
          variety of ornaments to choose from. <br />
          What decision do you make to create the perfect tree?
        </p>,
      ],
      a: [
        {
          type: "A",
          text: "a) Muted Monochrome - Stick to a single color scheme",
        },
        {
          type: "B",
          text: "b) Undercover Eclectic - Mix and match various ornaments",
        },
        {
          type: "C",
          text: "c) Literature Theme - Decorate with ornaments that tell a story",
        },
        {
          type: "D",
          text: "d) Symmetrical Perfectionist - Arrange ornaments in perfect balance",
        },
      ],
    },
  ];

  const handleClickAnswer = (type, idx) => {
    let ls = questions;

    console.log(questionList.length);

    //after submitting the last answer, showing result page
    if (page === questionList.length) {
      //   console.log("page end");
      //   console.log("A count: " + questions[0].count);

      let a = questions[0].count;
      let b = questions[1].count;
      let c = questions[2].count;
      let d = questions[3].count;

      //sheep-cote cold d
      if (a >= 2 && c >= 2 && b <= 1) {
        setResult(santaList[0]);
        console.log("result" + result);
        //gully gawk d
      } else if (a >= 2 && d >= 2 && b <= 2 && b != 0) {
        setResult(santaList[1]);
        console.log("result" + result);
        //stubby d
      } else if (c >= 3 && d >= 2 && b === 1) {
        setResult(santaList[2]);
        console.log("result" + result);
        //spoon licker d
      } else if (a >= 2 && d >= 2 && b === 0) {
        setResult(santaList[3]);
        console.log("result" + result);
        //pot licker d
      } else if (b >= 2 && c >= 3 && a === 1) {
        setResult(santaList[4]);
        console.log("result" + result);
        //bowl licker d
      } else if (a >= 2 && b >= 2 && d === 1) {
        setResult(santaList[5]);
        console.log("result" + result);
        //door slammer d
      } else if (d >= 4 && a + b <= 1) {
        setResult(santaList[6]);
        console.log("result" + result);
        //skyr gobbler d
      } else if (a >= 4 && c + d === 0) {
        setResult(santaList[7]);
        console.log("result" + result);
        //sausage swiper d
      } else if (b + c >= 4 && d >= 2) {
        setResult(santaList[8]);
        console.log("result" + result);
        //window peeper d
      } else if (c >= 3 && b === 1) {
        setResult(santaList[9]);
        console.log("result" + result);
        //door sniffer d
      } else if (a >= 2 && b >= 2 && c === 1) {
        setResult(santaList[10]);
        console.log("result" + result);
        //meat hook d
      } else if (b >= 3 && c + d >= 2) {
        setResult(santaList[11]);
        console.log("result" + result);
        //candle beggar
        //test: 1, 2, 2, 2
      } else {
        setResult(santaList[12]);
        console.log("result" + result);
      }

      // switch (countArr) {
      //   case countArr[0].a < 2:
      //     setResult(santaList[0].santa);
      //     console.log("result: " + result);
      //     break;

      //   case countArr[0].b > 2:
      //     setResult(santaList[1].santa);
      //     console.log("result: " + result);
      //     break;

      //   default:
      //     setResult("default");
      // }
    }

    // }

    for (let i = 0; i < ls.length; i++) {
      if (ls[i].name === type) {
        ls[i].count = ls[i].count + 1;
      }
    }
    setQuestions(ls);
    setPage(page + 1);

    console.log(questions);
  };

  const refresh = () => {
    window.location.reload();
  };

  const restart = (
    <button className="restartBtn" onClick={refresh}>
      <MdOutlineRefresh />
    </button>
  );

  return (
    <div className="santaTest">
      {page === 0 ? (
        <div className="startPageLayout">
          <img src="/santa/yule-lads.png" className="startPageImg" />
          <h1 className="santa-title">Which Santa Are You?</h1>
          <h5 className="santa-description">
            Unlike most other countries that only have one Santa Claus, Iceland
            has thirteen. <br />
            They are called Jólasveinar (Yule lads or perhaps Christmas boys)
            and take turns <br />
            visiting our children the 13 nights leading up to Christmas Eve.{" "}
            <br />
            Children place one of their shoes on the windowsill of their rooms
            on each of those nights. <br />
            For those children that behave well during that day the Yule lads
            will leave candy or a small treat <br />
            but for those who behave badly can expect a rotten potato.
            <br />
            The Yule lads are a part of an Icelandic Christmas folklore that
            depict mountain-dwelling characters <br />
            and trolls who come to town during the Christmas period. <br />
            The parents of the Yule lads are trolls called Grýla (mother) and
            Leppalúði (father). <br />
            In the tails Grýla is a scary troll who has the ability to detect
            when children misbehave, hunts them down, <br />
            and takes them back to her cave for making stew of them. <br />
            Leppalúði is known as the lazy husband who does not do much other
            than enjoy Grýla's food. <br />
            This “nice” couple own a big black cat known as the Christmas cat
            (jólakötturinn). <br />
            The Christmas cat is vicious and likes to hunt children who do not
            receive anything new to wear <br />
            for Christmas and eats them - not a typically well received notion
            in modern cultures. <br />
            Traditionally the Yule lads behaved as you would expect trolls to
            behave <br />
            and they received their names as to describe their mischievious
            behaviour such as Door-Slammer <br />
            who likes to slam doors loudly, Spoon-Licker who likes to steal
            unwashed spoons <br />
            with traces of food and lick them clean etc.
          </h5>
          <button onClick={() => setPage(1)} className="roll-btn">
            Start
          </button>
        </div>
      ) : page <= questionList.length ? (
        <div className="questionLayout">
          <div className="santaTitle">
            <div> {`${page} / ${questionList.length}`} </div>
          </div>

          {questionList.map((val, idx) => (
            <div
              className="questionList"
              style={{ display: page === idx + 1 ? "flex" : "none" }}
              key={idx}
            >
              <div className="questionItemLayout">
                {val.q.map((qval, qidx) => (
                  <div key={qidx} className="box">
                    <div>{qval}</div>
                  </div>
                ))}
              </div>

              <div>
                {val.a.map((aval, aidx) => (
                  <div
                    key={aidx}
                    className="answerBox"
                    onClick={() => handleClickAnswer(aval.type, idx)}
                  >
                    {" "}
                    {aval.text}
                  </div>
                ))}
              </div>
              {restart}
            </div>
          ))}
        </div>
      ) : (
        <div className="resultPage">
          <div className="resultSanta">
            <img src={result.img} className="santa-img" />
            <h1 className="santa-name">Result: {result.santa}</h1>
            <h3 className="santa-intro">{result.title}</h3>
            <p className="santa-contents">{result.contents}</p>
          </div>
          <div className="resultBtn">{restart}</div>
        </div>
      )}
    </div>
  );
}

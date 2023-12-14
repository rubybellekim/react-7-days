import { React, useState, useEffect } from "react";
import "./pages.css";

export default function WhichSanta() {
  const [page, setPage] = useState(0);

  const [Questions, setQuestions] = useState([
    { name: "A", count: 0 },
    { name: "B", count: 0 },
    { name: "C", count: 0 },
    { name: "D", count: 0 },
  ]);

  const questionList = [
    {
      q: ["question1"],
      a: [
        { type: "A", text: "answer1" },
        { type: "B", text: "answer2" },
        { type: "C", text: "answer3" },
        { type: "D", text: "answer4" },
      ],
    },

    {
      q: ["question2"],
      a: [
        { type: "A", text: "answer" },
        { type: "B", text: "answer" },
        { type: "C", text: "answer" },
        { type: "D", text: "answer" },
      ],
    },

    {
      q: ["question3"],
      a: [
        { type: "A", text: "answer" },
        { type: "B", text: "answer" },
        { type: "C", text: "answer" },
        { type: "D", text: "answer" },
      ],
    },

    {
      q: ["question"],
      a: [
        { type: "A", text: "answer" },
        { type: "B", text: "answer" },
        { type: "C", text: "answer" },
        { type: "D", text: "answer" },
      ],
    },

    {
      q: ["question"],
      a: [
        { type: "A", text: "answer" },
        { type: "B", text: "answer" },
        { type: "C", text: "answer" },
        { type: "D", text: "answer" },
      ],
    },

    {
      q: ["question"],
      a: [
        { type: "A", text: "answer" },
        { type: "B", text: "answer" },
        { type: "C", text: "answer" },
        { type: "D", text: "answer" },
      ],
    },

    {
      q: ["question"],
      a: [
        { type: "A", text: "answer" },
        { type: "B", text: "answer" },
        { type: "C", text: "answer" },
        { type: "D", text: "answer" },
      ],
    },
  ];

  const handleClickAnswer = (type, idx) => {
    let ls = questionList;
    for (let i = 0; i < ls.length; i++) {
      if (ls[i].name === type) {
        ls[i].count = ls[i].count + 1;
      }
    }

    setQuestions(ls);
    setPage(page + 1);
  };

  return (
    <div className="santaTest">
      {page === 0 ? (
        <div className="startPageLayout">
          <div className="startLogo">Which Santa Are You?</div>
          <div onClick={() => setPage(1)} className="startBtn">
            Start
          </div>
        </div>
      ) : page <= questionList.length ? (
        <div className="questionLayout">
          <div className="santaTitle">
            <div>Test</div>
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
                    <div>GO</div> <div>{qval}</div>
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
            </div>
          ))}
        </div>
      ) : (
        <div className="resultPage">Result</div>
      )}
    </div>
  );
}

import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import PiecePlayNav from "@/components/PiecePlayNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const sections = [<One next={next} />, <Two next={next} pre={pre} />];
  const [index, setIndex] = useState(0);

  function next() {
    if (index + 1 < sections.length) {
      setIndex(index => index + 1);
    }
  }

  function pre() {
    if (index + 1 > 1) {
      setIndex(index => index - 1);
    }
  }

  function direct() {
    router.push("/lessons/pieceplay/3");
  }

  function One({ next }) {
    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Piece Play</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              In this lesson, we are going to study basic strategies involving
              the chess pieces.
            </p>
            <p className="text-body">
              You already know how each piece can move, and you are capable of
              understanding the roll each piece can play in a tactical
              situation.
            </p>
          </div>
          <div className="arrows-div">
            <FontAwesomeIcon className="left-arrow-locked" icon={faLeftLong} />
            <FontAwesomeIcon
              onClick={next}
              className="right-arrow"
              icon={faRightLong}
            />
          </div>
          <div className="pages-div">
            <p className="pages-text">
              {index + 1}/{sections.length}
            </p>
          </div>
        </div>
      </div>
    );
  }

  function Two({ next, pre }) {
    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Strategy</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              But there is one more aspect to every game of chess than tactics,
              and that is <strong>strategy</strong>. Strategy involves
              evaluating a position and setting long-term goals and plans before
              making a move.
            </p>
            <p className="text-body">
              Generally the more you know about chess, the better you are at
              understanding a position and developing plans around it. And the
              pieces on the board are important factors that heavily influence
              this strategic aspect.
            </p>
          </div>
          <div className="arrows-div">
            <FontAwesomeIcon
              onClick={pre}
              className="left-arrow"
              icon={faLeftLong}
            />
            <FontAwesomeIcon
              onClick={next}
              className="right-arrow"
              icon={faRightLong}
            />
          </div>
          <div className="pages-div">
            <p className="pages-text">
              {index + 1}/{sections.length}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight2={true} />
      {sections[index]}
    </div>
  );
}

import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess());
  const [arrows, setArrows] = useState([]);

  function next() {
    router.push("/lessons/basic-checkmates/back-rank/1");
  }

  function pre() {
    router.push("/lessons/intro/checkmate/7");
  }

  return (
    <div className="flex">
      <IntroNav highlight7={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Lesson Summary</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              In this lesson you learned board setup, names of the pieces, their
              values, and how they move. You also learned how a game of chess is
              won by checkmate. That's awesome!
            </p>
            <p className="text-body">
              In the next lesson, you will learn some basic checkmates.
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
            <p className="pages-text">8/8</p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
          />
        </div>
      </div>
    </div>
  );
}

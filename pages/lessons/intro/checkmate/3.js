import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("8/8/7p/3pk3/2n5/8/1B6/K7 b - - 0 1"),
  );
  const [arrows, setArrows] = useState([["b2", "e5"]]);

  function next() {
    router.push("/lessons/intro/checkmate/4");
  }

  function pre() {
    router.push("/lessons/intro/checkmate/2");
  }

  function getAway() {
    game.move("Ke4");
    setGame({ ...game });
    setTimeout(() => {
      setArrows([]);
    }, 300);
  }

  return (
    <div className="flex">
      <IntroNav highlight7={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Responding to a Check</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              When you are in check, you <span className="underline">must</span>{" "}
              make a move that gets your king out of the check; any other move
              is illegal.
            </p>
            <p className="text-body">
              There are up to three ways you can react to a check:
            </p>
            <p className="text-body">
              1- You can get out of the way of the attack by moving your king to
              a square that's safe.
            </p>
            <button
              onClick={getAway}
              style={{ marginTop: "0" }}
              className="lesson-btn"
            >
              Get away
            </button>
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
            <p className="pages-text">3/8</p>
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
            boardOrientation={"black"}
          />
        </div>
      </div>
    </div>
  );
}

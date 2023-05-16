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
    router.push("/lessons/intro/checkmate/6");
  }

  function pre() {
    router.push("/lessons/intro/checkmate/4");
  }

  function capturePiece() {
    game.move("Nxb2");
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
              3- You can capture the piece that's attacking your king.
            </p>
            <button onClick={capturePiece} className="lesson-btn">
              capture
            </button>
            <p className="text-body">
              If you're in check and you can't do any of these three things, you
              are lost!
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
            <p className="pages-text">5/8</p>
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

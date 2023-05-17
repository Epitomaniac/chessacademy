import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("3r2k1/3r1pp1/7p/8/8/8/Q4PPP/6K1 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [squares, setSquares] = useState({});
  const [message, setMessage] = useState("");

  function next() {
    router.push("/lessons/basic-checkmates/back-rank/5");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/back-rank/3");
  }

  function play() {
    game.move("Qa1");
    setGame({ ...game });
    setTimeout(() => {
      setMessage("White tries to protect the back rank with the queen.");
    }, 300);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Protecting The Back Rank</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Sometimes you can't protect your back rank with a single piece
              because your opponent has a greater attacking force. Press the
              button to see why.
            </p>
            <button onClick={play} className="lesson-btn">
              Play
            </button>
            <p className="text-body">{message}</p>
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
            <p className="pages-text">4/6</p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
            customArrowColor={"rgba(0,255,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={squares}
          />
        </div>
      </div>
    </div>
  );
}

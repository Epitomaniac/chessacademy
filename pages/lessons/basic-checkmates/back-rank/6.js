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
    new Chess("3r2k1/5pp1/7p/8/8/8/5PPP/3Q2K1 b - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [squares, setSquares] = useState({});
  const [message, setMessage] = useState("");

  function next() {
    router.push("/lessons/basic-checkmates/battery/1");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/back-rank/5");
  }

  function play() {
    game.move("Rxd1");
    setGame({ ...game });
    setTimeout(() => {
      setArrows([["d1", "g1"]]);
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
              And as you guessed, black takes the queen and checkmates white!
            </p>
            <button onClick={play} className="lesson-btn">
              Play
            </button>
            <p className="text-body">
              White lost because black had the advantage in numbers.
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
            <p className="pages-text">6/6</p>
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
            customSquareStyles={squares}
          />
        </div>
      </div>
    </div>
  );
}

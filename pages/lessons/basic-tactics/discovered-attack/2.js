import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import TacticsNav from "@/components/TacticsNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("r2r3k/ppqpp1pp/8/8/2NP4/7P/PP4P1/1QR2R1K w - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [message, setMessage] = useState("");

  function next() {
    router.push("/lessons/basic-tactics/discovered-attack/3");
  }

  function pre() {
    router.push("/lessons/basic-tactics/discovered-attack/1");
  }

  function play() {
    game.move("Ne5");
    setGame({ ...game });
    setTimeout(() => {
      setArrows([
        ["c1", "c7"],
        ["e5", "f7"],
      ]);
      setMessage(
        "Not only the knight unleashed the rook's attack on the queen, but also moved to a square that threatens a fork.",
      );
    }, 300);
  }

  return (
    <div className="flex">
      <TacticsNav highlight4={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Discovered Attack</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Take a look at this position. White's rook and black's queen are
              lined up together, but the knight is blocking the rook's attack.
              Anywhere it jumps creates an attack on the queen.
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
            <p className="pages-text">2/7</p>
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
            customSquareStyles={{}}
          />
        </div>
      </div>
    </div>
  );
}

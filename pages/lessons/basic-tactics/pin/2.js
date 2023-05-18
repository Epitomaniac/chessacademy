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
    new Chess("3k4/8/5n2/6B1/1P6/1K6/8/8 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([["g5", "d8"]]);

  function next() {
    router.push("/lessons/basic-tactics/pin/3");
  }

  function pre() {
    router.push("/lessons/basic-tactics/pin/1");
  }

  return (
    <div className="flex">
      <TacticsNav highlight2={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Absolute Pin</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              This type of pin where moving the pinned piece is illegal is
              called <strong>absolute pin</strong>. The absolute pin only occurs
              when a piece is pinned to the king.
            </p>
            <p className="text-body">
              Only the long-range pieces- the queen, the rook, and the bishop
              are capable of pinning another piece.
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

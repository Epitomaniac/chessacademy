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
    router.push("/lessons/basic-tactics/pin/2");
  }

  return (
    <div className="flex">
      <TacticsNav highlight2={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Pin</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The <strong>pin</strong> is a tactic in which a piece cannot or
              must not move because the more valuable piece behind it will be
              exposed or captured.
            </p>
            <p className="text-body">
              Take a look at this position. Black's knight cannot move because
              then the black king will be checked. Here moving the knight is
              illegal.
            </p>
            <p className="text-body">
              The knight is <strong>pinned to</strong> the king.
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
            <p className="pages-text">1/7</p>
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

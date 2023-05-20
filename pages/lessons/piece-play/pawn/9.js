import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import PiecePlayNav from "@/components/PiecePlayNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess(
      "rnbqkb1r/pppn1ppp/4p3/3pP3/3P4/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 0 1",
    ),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/pawn/10");
  }

  function pre() {
    router.push("/lessons/piece-play/pawn/8");
  }

  function pawnBreak() {
    game.move("c5");
    setGame({ ...game });
    setTimeout(() => {
      setArrows([["c5", "d4"]]);
    }, 300);
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Pawn Break</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              A <strong>pawn break</strong> is the act of pushing a pawn with
              the goal of breaking the opponent's pawn structure and opening the
              position.
            </p>
            <button onClick={pawnBreak} className="lesson-btn">
              Break in the center
            </button>
            <p className="text-body">
              Pawn breaks can happen for many reasons, most important of which
              is to free up the pieces and undermine the opponent's strong grip
              on the center.
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
            <p className="pages-text">9/15</p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            boardOrientation={"black"}
          />
        </div>
      </div>
    </div>
  );
}

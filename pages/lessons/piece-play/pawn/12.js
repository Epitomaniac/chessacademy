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
    new Chess("8/p2p1p2/1p6/8/1P4P1/P2P3P/8/8 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/pawn/13");
  }

  function pre() {
    router.push("/lessons/piece-play/pawn/11");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Isolated Pawn</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              An <strong>isolated pawn</strong> is a pawn that can't be defended
              by another pawn. Isolated pawns are weak and often an easy target
              for the opponent's pieces to attack.
            </p>
            <p className="text-body">
              In this position white has one isolated pawn while black has two.
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
            <p className="pages-text">12/15</p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{
              d3: { border: "2px solid red", borderRadius: "50%" },
              d7: { border: "2px solid red", borderRadius: "50%" },
              f7: { border: "2px solid red", borderRadius: "50%" },
            }}
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

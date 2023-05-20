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
    new Chess("8/8/1pp1k1P1/5p2/2P2P2/1PK5/8/8 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/pawn/14");
  }

  function pre() {
    router.push("/lessons/piece-play/pawn/12");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Passed Pawn</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              A <strong>passed pawn</strong> is a pawn that can's be attacked or
              blocked by another pawn. Passed pawns are powerful strategic
              assets, especially toward the end of the game where there aren't
              many pieces to stop them from becoming a queen.
            </p>
            <p className="text-body">
              White has a passed pawn and is winning due to the fact that
              black's king can't stop the passed pawn and defend his own pawns
              at the same time.
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
            <p className="pages-text">13/15</p>
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
              g6: { border: "2px solid green", borderRadius: "50%" },
            }}
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

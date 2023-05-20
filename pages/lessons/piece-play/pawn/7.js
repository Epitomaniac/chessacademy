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
    new Chess("8/8/3p4/2pPp3/2P1P3/8/8/8 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/pawn/8");
  }

  function pre() {
    router.push("/lessons/piece-play/pawn/6");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Pawn Structure</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Pawn chains have the potential to get locked together, since pawns
              can only move forward.
            </p>
            <p className="text-body">
              Since the <strong>pawn structure</strong>, that is how pawns are
              placed on the board, determines the{" "}
              <span className="underline">character</span> of a position, when
              pawns are locked like this in the center, we call the position a{" "}
              <strong>closed position</strong>.
            </p>
            <p className="text-body">
              Subsequently, when the center pawns are not locked, we call the
              position an <strong>open position</strong>.
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
            <p className="pages-text">7/15</p>
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
            customSquareStyles={{}}
          />
        </div>
      </div>
    </div>
  );
}

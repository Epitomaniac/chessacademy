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
    new Chess("8/8/8/5P2/4P3/3P4/2P5/8 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([["c2", "f5"]]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/pawn/6");
  }

  function pre() {
    router.push("/lessons/piece-play/pawn/4");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Pawn Chain</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Since pawns capture and defend diagonally, they are able to
              support each other and form what's known as{" "}
              <strong>pawn chains</strong>. A pawn chain is a group of pawns
              that are protecting each other on a diagonal.
            </p>
            <p className="text-body">
              Pawn chains are very tough to break by minor or major pieces,
              since these pieces are too valuable to lose to capture protected
              pawns.
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
            <p className="pages-text">5/15</p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(0,255,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
          />
        </div>
      </div>
    </div>
  );
}

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
    new Chess("2r5/1p1p1pp1/p3p2p/8/4P3/1P6/P1P2PPP/3R4 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([
    ["d1", "d7"],
    ["c8", "c2"],
  ]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/rook/4");
  }

  function pre() {
    router.push("/lessons/piece-play/rook/2");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight2={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Half-open File</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              A <strong>half-open file</strong> or semi-open file is a file
              where there are only pawns of one color.
            </p>
            <p className="text-body">
              The pawns on a half-open file can be attacked by the side that has
              no pawns on it, usually with a rook.
            </p>
            <p className="text-body">
              The board shows a position where rooks are attacking the half-open
              files.
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
            <p className="pages-text">3/4</p>
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
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

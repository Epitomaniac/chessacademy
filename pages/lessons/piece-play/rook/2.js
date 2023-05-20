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
    new Chess("r5k1/1bpq1pp1/1p1p1n1p/8/8/1QPP1N2/1P1N1PPP/4R1K1 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([
    ["e1", "e8"],
    ["a8", "a1"],
  ]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/rook/3");
  }

  function pre() {
    router.push("/lessons/piece-play/rook/1");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight2={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Open File</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              An <strong>open file</strong> is a file with no pawns on it.
            </p>
            <p className="text-body">
              It is a good strategy to put your rooks on open files, since they
              can control all the squares in it, either directly or indirectly.
            </p>
            <p className="text-body">
              The board shows a position where rooks are already very well
              placed.
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
            <p className="pages-text">2/4</p>
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

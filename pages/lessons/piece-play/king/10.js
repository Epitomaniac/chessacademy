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
    new Chess("4k1nr/4pppp/8/8/8/8/4PPPP/4K2R w K - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  function next() {
    router.push("/lessons/piece-play/king/11");
  }

  function pre() {
    router.push("/lessons/piece-play/king/9");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight6={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Rules of Castling</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              There are four conditions that must be met before castling is
              allowed:
            </p>
            <p className="text-body">
              1- The squares between the king and the castling rook must be
              free.
            </p>
            <p className="text-body">Here white can castle while black can't</p>
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
            <p className="pages-text">10/13</p>
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

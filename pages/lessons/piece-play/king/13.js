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
    new Chess("r3k1r1/pp2pp1p/b7/4B3/8/8/PP2PP1P/1R2K2R w - - 0 1"),
  );
  const [arrows, setArrows] = useState([
    ["g8", "g1"],
    ["e5", "b8"],
  ]);
  const [draggable, setDraggable] = useState(false);
  const [visible, setVisible] = useState(false);

  function next() {
    router.push("/lessons/...");
  }

  function pre() {
    router.push("/lessons/piece-play/king/12");
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
              4- The squares along the king's path must not be attacked by an
              enemy piece. In other words, the king can't castle through or to
              check.
            </p>
            <p className="text-body">
              White can't castle short because the black rook is attacking the
              square the white king would land on. Black however can castle long
              because the the two squares the king would travel on are safe.
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
            <p className="pages-text">13/13</p>
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
              g1: { backgroundColor: "rgba(255,0,0, 0.5)" },
              d8: { backgroundColor: "rgba(0,255,0, 0.5)" },
              c8: { backgroundColor: "rgba(0,255,0, 0.5)" },
            }}
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

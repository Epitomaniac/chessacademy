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
    new Chess("8/8/8/8/4P3/3P1P2/8/8 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/bishop/7");
  }

  function pre() {
    router.push("/lessons/piece-play/bishop/5");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight3={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Bishop and Pawn Coordination</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              However without the bishop, white's pawn structure is left with
              many weaknesses.
            </p>
            <p className="text-body">
              When you have your pawns controlling mostly one color square. Try
              to keep a bishop of opposite color to cover the weaknesses.
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
            <p className="pages-text">6/8</p>
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
              e3: { border: "2px solid red", borderRadius: "50%" },
              f4: { border: "2px solid red", borderRadius: "50%" },
              d4: { border: "2px solid red", borderRadius: "50%" },
            }}
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

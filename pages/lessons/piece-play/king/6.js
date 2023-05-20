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
      "rnbqk2r/ppp1ppbp/5np1/3p4/3P4/3BPN2/PPP2PPP/RNBQK2R w KQkq - 0 1",
    ),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/king/7");
  }

  function pre() {
    router.push("/lessons/piece-play/king/5");
  }

  function castle() {
    game.move("O-O");
    setGame({ ...game });
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight6={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Castling</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              There's a special move in chess that is called{" "}
              <strong>castling</strong>. Castling is done in combination with
              the king and one of the rooks.
            </p>
            <button onClick={castle} className="lesson-btn">
              Castle
            </button>
            <p className="text-body">
              Castling is done to remove the king from the center and keep it
              protected behind pawns, while also bringing the rook out of its
              initial square in the corner.
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
            <p className="pages-text">6/13</p>
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

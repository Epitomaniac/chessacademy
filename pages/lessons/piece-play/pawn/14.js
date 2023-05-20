import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import PiecePlayNav from "@/components/PiecePlayNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/5p2/8/4P3/8/8/8/8 b - - 0 1"));
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/pawn/15");
  }

  function pre() {
    router.push("/lessons/piece-play/pawn/13");
  }

  function play() {
    game.load("8/5p2/8/4P3/8/8/8/8 b - - 0 1");
    setGame({ ...game });
    setTimeout(() => {
      game.move("f5");
      setGame({ ...game });
      setTimeout(() => {
        setArrows([["f7", "f5"]]);
      }, 300);
    }, 500);
    setTimeout(() => {
      game.move("exf6");
      setGame({ ...game });
      setTimeout(() => {
        setArrows([["e5", "f6"]]);
      }, 300);
    }, 1500);
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">En Passant</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              When any of your pawn steps inside your opponent's side of the
              board (5th rank from your bottom edge of the board), it can
              capture any pawn that moves two squares forward on an adjacent
              file. This especial move is called <strong>en passant</strong>,
              which is french for in passing.
            </p>
            <p style={{ paddingTop: "0" }} className="text-body">
              The pawn captures diagonally towards the square behind the pawn
              that has moved.
            </p>
            <button
              style={{ marginTop: "0" }}
              onClick={play}
              className="lesson-btn"
            >
              Play
            </button>
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
            <p className="pages-text">14/15</p>
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

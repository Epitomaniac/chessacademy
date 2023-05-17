import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("7k/r5pp/8/p7/8/7P/3R1PP1/6K1 b - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [squares, setSquares] = useState({});

  function next() {
    router.push("/lessons/basic-checkmates/back-rank/4");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/back-rank/2");
  }

  function protect() {
    game.undo();
    game.move("Ra8");
    setGame({ ...game });
    setTimeout(() => {
      setArrows([["a8", "h8"]]);
    }, 300);
  }

  function move() {
    game.undo();
    game.move("h6");
    setGame({ ...game });
    setTimeout(() => {
      setArrows([["h8", "h7"]]);
    }, 300);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Protecting The Back Rank</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The only pieces that can give back-rank mate are rooks and queens.
              They are also the best protectors of the back rank.
            </p>
            <p className="text-body">
              To protect your back rank, either do it with a piece, or move your
              pawns to give your king a escape square in case of a check.
            </p>
            <div className="flex">
              <button onClick={protect} className="lesson-btn">
                Protect
              </button>
              <button onClick={move} className="lesson-btn">
                Move Pawn
              </button>
            </div>
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
            <p className="pages-text">3/6</p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
            customArrowColor={"rgba(0,255,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={squares}
            boardOrientation={"black"}
          />
        </div>
      </div>
    </div>
  );
}

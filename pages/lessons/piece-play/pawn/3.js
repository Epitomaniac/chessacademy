import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import PiecePlayNav from "@/components/PiecePlayNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/k4P2/8/6K1/8/8/8/8 w - - 0 1"));
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/pawn/4");
  }

  function pre() {
    router.push("/lessons/piece-play/pawn/2");
  }

  function promote() {
    game.move("f8=Q");
    setGame({ ...game });
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Baby Queens</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Even though pawns are the least valuable pieces, they have great
              potential; they can become queens! but only if they reach the last
              rank.
            </p>
            <button onClick={promote} className="lesson-btn">
              Make a queen
            </button>
            <p className="text-body">
              This is called a <strong>promotion</strong>. We promoted the pawn
              to a queen. Technically, you can turn all of your pawns to queens;
              there's no limitation for that. The promotion happens in one move.
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
            <p className="pages-text">3/15</p>
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

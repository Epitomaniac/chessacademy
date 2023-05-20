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
    new Chess("1k1r2r1/1pp1q1p1/p2p1b2/3Q4/8/P2B3P/1PPP4/1K1R1R2 b - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/queen/4");
  }

  function pre() {
    router.push("/lessons/piece-play/queen/2");
  }

  function play() {
    game.move("Rh8");
    setGame({ ...game });
    setTimeout(() => {
      game.move("Qg2");
      setGame({ ...game });
    }, 800);
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight5={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Queen Duties</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Avoid giving your queen petty tasks while they can be done by
              other pieces. The queen is a powerful piece and it is best
              utilized when her full potential is used.
            </p>
            <button onClick={play} className="lesson-btn">
              Play
            </button>
            <p className="text-body">
              White unnecessarily ties the queen to the defense of the pawn
              while it could be defended by the bishop or the rook.
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

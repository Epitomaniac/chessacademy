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
    new Chess("4r3/p4p1p/1pk3p1/8/3R4/1KP5/1P3PPP/8 b - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/bishop/1");
  }

  function pre() {
    router.push("/lessons/piece-play/rook/3");
  }

  function play() {
    game.move("Re2");
    setGame({ ...game });
    setTimeout(() => {
      setArrows([
        ["e2", "b2"],
        ["e2", "h2"],
      ]);
    }, 300);
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight2={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Rooks on 7th</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              A rook on seventh or second ranks (depends if you are white or
              black) is very damaging, as it can feast on the pawns that are
              often found there.
            </p>
            <button onClick={play} className="lesson-btn">
              Play
            </button>
            <p className="text-body">
              Black is better for having an active rook on the second rank.
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
            <p className="pages-text">4/4</p>
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

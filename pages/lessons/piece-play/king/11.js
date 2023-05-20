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
    new Chess("4k2r/4pppp/8/8/8/8/4PPPP/4K2R w Kk - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);
  const [visible, setVisible] = useState(false);

  function next() {
    router.push("/lessons/piece-play/king/12");
  }

  function pre() {
    router.push("/lessons/piece-play/king/10");
  }

  function play() {
    game.move("O-O");
    setGame({ ...game });
    setTimeout(() => {
      game.move("Kd8");
      setGame({ ...game });
    }, 500);
    setTimeout(() => {
      game.move("h3");
      setGame({ ...game });
    }, 1000);
    setTimeout(() => {
      game.move("Ke8");
      setGame({ ...game });
      setVisible(true);
    }, 1500);
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
              2- Both the king and the castling rook must not have moved before.
            </p>
            <button onClick={play} className="lesson-btn">
              Play
            </button>
            {visible && (
              <p className="text-body">
                Although the black king returns to his home square, black can't
                castle because the king has moved before.
              </p>
            )}
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
            <p className="pages-text">11/13</p>
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

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
    router.push("/lessons/piece-play/pawn/5");
  }

  function pre() {
    router.push("/lessons/piece-play/pawn/3");
  }

  function makeRook() {
    game.undo();
    setGame({ ...game });
    setTimeout(() => {
      game.move("f8=R");
      setGame({ ...game });
    }, 500);
  }

  function makeBishop() {
    game.undo();
    setGame({ ...game });
    setTimeout(() => {
      game.move("f8=B");
      setGame({ ...game });
    }, 500);
  }

  function makeKnight() {
    game.undo();
    setGame({ ...game });
    setTimeout(() => {
      game.move("f8=N");
      setGame({ ...game });
    }, 500);
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Under-promotion</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Although pawns <span className="underline">have to</span> promote
              when they reach the last rank, they have the option to promote to
              not only a queen, but to any piece other than a king or a pawn.
            </p>
            <div style={{ justifyContent: "space-between" }} className="flex">
              <button
                style={{ marginTop: "0" }}
                onClick={makeRook}
                className="lesson-btn"
              >
                Make a rook
              </button>
              <button
                style={{ marginTop: "0" }}
                onClick={makeBishop}
                className="lesson-btn"
              >
                Make a bishop
              </button>
              <button
                style={{ marginTop: "0" }}
                onClick={makeKnight}
                className="lesson-btn"
              >
                Make a knight
              </button>
            </div>

            <p style={{ paddingTop: "0" }} className="text-body">
              This is called an <strong>under-promotion</strong>. You may be
              wondering the point of this, but believe me, there are rare
              situations where an under-promotion makes sense.
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
            <p className="pages-text">4/15</p>
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

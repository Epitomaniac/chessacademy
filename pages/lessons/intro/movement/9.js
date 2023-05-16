import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/2p5/8/8/8/8/4P3/8 w - - 0 1"));
  const [visible, setVisible] = useState(false);

  function next() {
    router.push("/lessons/intro/movement/10");
  }

  function pre() {
    router.push("/lessons/intro/movement/8");
  }

  function moveTwo() {
    game.move("e4");
    setGame({ ...game });
    setVisible(true);
  }

  function moveOne() {
    game.move("c6");
    setGame({ ...game });
  }

  return (
    <div className="flex">
      <IntroNav highlight5={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Pawn</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              However, the pawn has the option to move two squares forward if it
              is on the square where it first started the game with (if it
              hasn't moved before).
            </p>
            <button onClick={moveTwo} className="lesson-btn">
              Move two squares
            </button>
            {visible && (
              <button onClick={moveOne} className="lesson-btn">
                Move one square
              </button>
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
            <p className="pages-text">9/11</p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    </div>
  );
}

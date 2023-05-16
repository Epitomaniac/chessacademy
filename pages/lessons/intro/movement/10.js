import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/8/8/4r3/3P4/8/8 w - - 0 1"));

  function next() {
    router.push("/lessons/intro/movement/11");
  }

  function pre() {
    router.push("/lessons/intro/movement/9");
  }

  function capture() {
    game.move("dxe4");
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
              The pawn is the only piece that captures differently from how it
              moves. It can only capture diagonally.
            </p>
            <button onClick={capture} className="lesson-btn">
              Capture
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
            <p className="pages-text">10/11</p>
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

import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("8/8/8/8/2PPPPP1/4N3/8/8 w - - 0 1"),
  );
  const [jumped, setJumped] = useState(false);

  function next() {
    router.push("/lessons/intro/movement/6");
  }

  function pre() {
    router.push("/lessons/intro/movement/4");
  }

  function jump() {
    if (!jumped) {
      game.move("Nd5");
      setJumped(true);
      setGame(game => {
        return { ...game };
      });
    }
    if (jumped) {
      game.undo();
      setJumped(false);
      setGame(game => {
        return { ...game };
      });
    }
  }

  return (
    <div className="flex">
      <IntroNav highlight5={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Knight</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Apart from its unique movement, the knight is also unique in that
              it's the only piece that can jump over other pieces.
            </p>
            <button onClick={jump} className="lesson-btn">
              Jump
            </button>
            <p className="text-body">
              The knight is a versatile short-range minor piece.
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
            <p className="pages-text">5/11</p>
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

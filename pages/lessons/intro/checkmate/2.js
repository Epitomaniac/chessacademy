import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/4k3/8/4K3/8/8/8 w - - 0 1"));

  function next() {
    router.push("/lessons/intro/checkmate/3");
  }

  function pre() {
    router.push("/lessons/intro/checkmate/1");
  }

  return (
    <div className="flex">
      <IntroNav highlight7={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Kings Can't Give Check</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              You can attack your opponent's king with any piece other than your
              own king.
            </p>
            <p className="text-body">
              In this position, the kings can never enter the highlighted
              squares because they are unable to give each other checks.
            </p>
            <p className="text-body">
              So during the game, there must be at least a square between the
              two kings.
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
            <p className="pages-text">2/8</p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customSquareStyles={{
              f5: { backgroundColor: "rgba(255,0,0, 0.5)" },
              e5: { backgroundColor: "rgba(255,0,0, 0.5)" },
              d5: { backgroundColor: "rgba(255,0,0, 0.5)" },
            }}
          />
        </div>
      </div>
    </div>
  );
}

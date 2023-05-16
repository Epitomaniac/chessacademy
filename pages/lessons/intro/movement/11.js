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
    new Chess("8/8/8/2rpr3/3P4/2n1n3/8/8 w - - 0 1"),
  );

  function next() {
    router.push("/lessons/intro/movement-quiz/1");
  }

  function pre() {
    router.push("/lessons/intro/movement/10");
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
              The pawn cannot capture in a straight line. It also cannot capture
              backwards.
            </p>
            <p className="text-body">
              In this position the pawn can capture either of the rooks, but
              cannot capture the black pawn or the knights.
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
            <p className="pages-text">11/11</p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
            customArrows={[
              ["d4", "e5"],
              ["d4", "c5"],
            ]}
            customArrowColor={"rgba(0, 255, 0, 0.5)"}
          />
        </div>
      </div>
    </div>
  );
}

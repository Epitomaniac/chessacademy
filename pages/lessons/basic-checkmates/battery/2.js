import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("1k6/1Q6/8/8/8/8/6B1/8 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([
    ["b7", "b8"],
    ["b7", "c8"],
    ["b7", "a8"],
    ["b7", "a7"],
    ["b7", "c7"],
    ["g2", "b7"],
  ]);
  const [squares, setSquares] = useState({});

  function next() {
    router.push("/lessons/basic-checkmates/battery/3");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/battery/1");
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight2={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Battery</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Here black is checkmated. The white queen is giving check while
              controlling all of black's escape squares. Black's king can't
              capture white's queen because it is defended by the bishop.
            </p>
            <p style={{ paddingTop: "0px" }} className="text-body">
              Whenever a side's queen hugs the opponent's king at the side of
              the board like this and the queen can't be captured, it is
              checkmate.
            </p>
            <p style={{ paddingTop: "0px" }} className="text-body">
              White's using a battery to deliver mate, which is a common
              strategy.
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
            <p className="pages-text">2/4</p>
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
            customArrows={arrows}
          />
        </div>
      </div>
    </div>
  );
}

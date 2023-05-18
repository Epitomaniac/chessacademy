import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import TacticsNav from "@/components/TacticsNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("2r4k/1p3qp1/p5pp/8/5b2/PP1B4/Q1P3P1/1K3R2 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);

  function next() {
    router.push("/lessons/basic-tactics/pin/4");
  }

  function pre() {
    router.push("/lessons/basic-tactics/pin/2");
  }

  return (
    <div className="flex">
      <TacticsNav highlight2={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Relative Pin</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The other type of pin where the pinned piece is able to move is
              called <strong>relative pin</strong>. Here the bishop can move,
              but then white would take the more valuable queen behind it.
            </p>
            <p className="text-body">
              The pin is powerful in the sense that even if the pinned piece can
              be defended, like in this case, it still can't move and is
              therefore vulnerable to additional attacks.
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
            <p className="pages-text">3/7</p>
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
            customSquareStyles={{}}
          />
        </div>
      </div>
    </div>
  );
}

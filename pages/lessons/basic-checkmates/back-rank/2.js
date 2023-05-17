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
    new Chess("7k/r5pp/8/p7/8/7P/3R1PP1/6K1 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);

  function next() {
    router.push("/lessons/basic-checkmates/back-rank/3");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/back-rank/1");
  }

  function giveMate() {
    game.move("Rd8");
    setGame({ ...game });
    setTimeout(() => {
      setArrows([["d8", "h8"]]);
    }, 300);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Back Rank</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The back rank is important because the kings often stay there for
              the majority of the game, and if you fail to protect your back
              rank, unexpected checkmates could happen!
            </p>
            <button onClick={giveMate} className="lesson-btn">
              Give mate
            </button>
            <p className="text-body">
              Here white checkmates black because black's king is trapped behind
              its own pawns and the back rank is left unprotected.
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
            <p className="pages-text">2/6</p>
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

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
    new Chess("1k2Q3/ppp5/1q6/8/8/7P/5PP1/6K1 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([["e8", "b8"]]);

  function next() {
    router.push("/lessons/intro/checkmate/7");
  }

  function pre() {
    router.push("/lessons/intro/checkmate/5");
  }

  return (
    <div className="flex">
      <IntroNav highlight7={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Checkmate</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              In this position black is in check, but can't get out of the
              check. It can't get away from the queen's attack, it can't block
              the check, and it can't capture the queen that is giving the
              check.
            </p>
            <p className="text-body">
              This is called a <strong>checkmate</strong>. In chess, the goal is
              to give check in a way that is impossible to get out of, which is
              the same as giving checkmate.
            </p>
            <p className="text-body">
              The checkmate is also called a <strong>mate</strong>.
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
            <p className="pages-text">6/8</p>
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

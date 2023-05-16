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
    new Chess("8/8/7p/3pk3/2n5/8/1B6/K7 b - - 0 1"),
  );
  const [arrows, setArrows] = useState([["b2", "e5"]]);

  function next() {
    router.push("/lessons/intro/checkmate/5");
  }

  function pre() {
    router.push("/lessons/intro/checkmate/3");
  }

  function blockCheck() {
    game.move("d4");
    setGame({ ...game });
    setTimeout(() => {
      setArrows([]);
    }, 300);
  }

  return (
    <div className="flex">
      <IntroNav highlight7={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Responding to a Check</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              2- You can block the check by placing one of your pieces in front
              of your king so that it's not attacked anymore.
            </p>
            <button onClick={blockCheck} className="lesson-btn">
              Block check
            </button>
            <p className="text-body">
              <strong>Important:</strong> You{" "}
              <span className="underline">cannot</span> block the check if the
              piece that's attacking your king is a knight, because knights can
              attack over other pieces.
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
            <p className="pages-text">4/8</p>
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
            boardOrientation={"black"}
          />
        </div>
      </div>
    </div>
  );
}

import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/4k3/8/8/8/8/KR6 w - - 0 1"));
  const [customArrows, setCustomArrows] = useState(null);

  function next() {
    router.push("/lessons/intro/checkmate/2");
  }

  function giveCheck() {
    game.move("Re1");
    setGame({ ...game });
    setTimeout(() => {
      setCustomArrows([["e1", "e6"]]);
    }, 300);
  }

  return (
    <div className="flex">
      <IntroNav highlight7={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Check</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              In chess the side who captures the other side's king wins the
              game.
            </p>
            <p className="text-body">
              The move that attacks the opponent's king is called a{" "}
              <strong>check</strong>.
            </p>
            <button onClick={giveCheck} className="lesson-btn">
              Give a check
            </button>
            <p className="text-body">
              When the opponent attacks your king, you are{" "}
              <strong>in check</strong>.
            </p>
          </div>
          <div className="arrows-div">
            <FontAwesomeIcon className="left-arrow-locked" icon={faLeftLong} />
            <FontAwesomeIcon
              onClick={next}
              className="right-arrow"
              icon={faRightLong}
            />
          </div>
          <div className="pages-div">
            <p className="pages-text">1/8</p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
            customArrows={customArrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
          />
        </div>
      </div>
    </div>
  );
}

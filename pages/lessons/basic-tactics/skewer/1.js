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
    new Chess("4Q3/8/8/8/4K3/8/8/r6k b - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);

  function next() {
    router.push("/lessons/basic-tactics/skewer/2");
  }

  function play() {
    game.move("Re1+");
    setGame({ ...game });
    setTimeout(() => {
      game.move("Kf4");
      setGame({ ...game });
    }, 1000);
    setTimeout(() => {
      game.move("Rxe8");
      setGame({ ...game });
    }, 2000);
  }

  return (
    <div className="flex">
      <TacticsNav highlight3={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Skewer</h2>
          </div>
          <div className="text-body-div">
            <p style={{ lineHeight: "22px" }} className="text-body">
              The <strong>skewer</strong> is a tactic in which a piece is
              attacked and pressured to move so that the piece behind it can be
              captured.
            </p>
            <p
              style={{ paddingTop: "0", lineHeight: "22px" }}
              className="text-body"
            >
              The skewer is kind of the opposite of a pin; the difference is
              that this time usually the more valuable piece comes under the
              attack first.
            </p>
            <p
              style={{ paddingTop: "0", lineHeight: "22px" }}
              className="text-body"
            >
              Just like the pin, only the long-range pieces can skewer.
            </p>
            <button
              style={{ marginTop: "0", marginBottom: "0" }}
              onClick={play}
              className="lesson-btn"
            >
              Play
            </button>
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
            <p className="pages-text">1/5</p>
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

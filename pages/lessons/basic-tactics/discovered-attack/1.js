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
    new Chess("8/8/8/8/8/8/6pp/2RK3k w - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);

  function next() {
    router.push("/lessons/basic-tactics/discovered-attack/2");
  }

  function play() {
    game.move("Kd2#");
    setGame({ ...game });
    setTimeout(() => {
      setArrows([["c1", "h1"]]);
    }, 300);
  }

  return (
    <div className="flex">
      <TacticsNav highlight4={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Discovered Attack</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              A <strong>Discovered attack</strong> is a tactic in which one
              piece moves out of the way of a friendly piece and lets it unleash
              an attack.
            </p>
            <p className="text-body">
              Discovered attacks that give check are called discovered check.
            </p>
            <button
              style={{ marginTop: "0" }}
              onClick={play}
              className="lesson-btn"
            >
              Play
            </button>
            <p style={{ paddingTop: "0" }} className="text-body">
              White checkmated black by just moving the king out of the way. How
              cool is that!
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
            <p className="pages-text">1/7</p>
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

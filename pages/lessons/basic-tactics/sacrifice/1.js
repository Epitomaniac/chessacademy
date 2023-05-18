import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import TacticsNav from "@/components/TacticsNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("8/ppb1kp2/2Pq4/8/8/1B5Q/PP3rPP/3R3K b - - 0 31"),
  );
  const [arrows, setArrows] = useState([["d1", "h1"]]);
  const [message, setMessage] = useState("");

  function next() {
    router.push("/lessons/basic-tactics/sacrifice/2");
  }

  function play() {
    game.move("Qxd1+");
    setGame({ ...game });
    setMessage(
      "But black sacrifices the valuable queen to remove the crucial defender of the back rank!",
    );
  }

  return (
    <div className="flex">
      <TacticsNav highlight6={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Sacrifice</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              A <strong>Sacrifice</strong> (informally called a sac) is a tactic
              in which one side intentionally loses a piece to win a more
              valuable piece, deliver checkmate, or get a better position.
            </p>
            <p style={{ paddingTop: "0" }} className="text-body">
              Take a look at this position; white's rook is protecting the back
              rank.
            </p>
            <button
              style={{ marginTop: "0", marginBottom: "0" }}
              onClick={play}
              className="lesson-btn"
            >
              Play
            </button>
            <p style={{ paddingTop: "0" }} className="text-body">
              {message}
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
            customArrowColor={"rgba(0,255,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            boardOrientation={"black"}
          />
        </div>
      </div>
    </div>
  );
}

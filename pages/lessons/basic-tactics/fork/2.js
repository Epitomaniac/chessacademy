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
    new Chess("8/8/5R2/2Q5/4n3/8/8/8 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([
    ["e4", "f6"],
    ["e4", "c5"],
  ]);

  function next() {
    router.push("/lessons/basic-tactics/fork/3");
  }

  function pre() {
    router.push("/lessons/basic-tactics/fork/1");
  }

  return (
    <div className="flex">
      <TacticsNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Fork</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The first tactical theme we are going to learn is the{" "}
              <strong>fork</strong>. A fork, like the name suggests, is a tactic
              in which a piece attacks two or more pieces at the same time.
            </p>
            <p className="text-body">
              Here black has forked the queen and the rook. White is forced to
              lose one of its pieces.
            </p>
            <p className="text-body">
              All pieces (including pawns) are able to fork.
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
            <p className="pages-text">2/8</p>
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

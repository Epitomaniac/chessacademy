import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import PiecePlayNav from "@/components/PiecePlayNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("8/8/8/5P2/4P3/3P4/2P5/8 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/pawn/7");
  }

  function pre() {
    router.push("/lessons/piece-play/pawn/5");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Base</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              However, pawn chains have a glaring weakness; the pawn that starts
              the chain cannot defend itself and is vulnerable to attacks.
            </p>
            <p style={{ paddingTop: "0" }} className="text-body">
              The first pawn in the chain is called the <strong>base</strong> of
              the pawn chain.
            </p>
            <p style={{ paddingTop: "0" }} className="text-body">
              Often the good strategy when dealing with pawn chains is to attack
              their base, and if you're the side that has a pawn chain, it's a
              good idea to keep its base protected.
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
            <p className="pages-text">6/15</p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{
              c2: { border: "2px solid red", borderRadius: "50%" },
            }}
          />
        </div>
      </div>
    </div>
  );
}

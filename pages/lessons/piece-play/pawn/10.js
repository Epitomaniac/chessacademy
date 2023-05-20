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
    new Chess("6k1/5p2/7p/6p1/8/8/5PPP/6K1 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([
    ["h2", "g3"],
    ["g2", "h3"],
    ["g2", "f3"],
    ["f2", "g3"],
  ]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/pawn/11");
  }

  function pre() {
    router.push("/lessons/piece-play/pawn/9");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Pawns as Defense</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              In terms of defense, pawns are strongest when they are close
              together on a rank. When they move, they almost always create
              weaknesses that can't be easily defended.
            </p>
            <p className="text-body">
              White's king is pretty safe, whereas blacks defense is full of
              holes and weaknesses.
            </p>
            <p className="text-body">
              Don't move your pawns in front of your king unless you have a good
              reason to!
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
            <p className="pages-text">10/15</p>
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
              f6: { border: "2px solid red", borderRadius: "50%" },
              g7: { border: "2px solid red", borderRadius: "50%" },
              h6: { border: "2px solid red", borderRadius: "50%" },
              h5: { border: "2px solid red", borderRadius: "50%" },
              h7: { border: "2px solid red", borderRadius: "50%" },
            }}
            boardOrientation={"black"}
          />
        </div>
      </div>
    </div>
  );
}

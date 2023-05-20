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
    new Chess("n7/8/7n/8/8/2N2N2/8/8 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/knight/2");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight4={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Knight</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Since knights are short-range pieces, they like to stay near the
              center from where they could access all parts of the board in just
              a few moves.
            </p>
            <p className="text-body">
              Knights on the corners are miserable, while putting a knight on
              the edge is often not a good idea.
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
              f3: { border: "2px solid green", borderRadius: "50%" },
              c3: { border: "2px solid green", borderRadius: "50%" },
              a8: { border: "2px solid red", borderRadius: "50%" },
              h6: { border: "2px solid red", borderRadius: "50%" },
            }}
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

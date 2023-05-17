import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("4k1R1/7R/8/8/8/8/8/8 b - - 0 1"));
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);
  const [clickable, setClickable] = useState(true);

  function next() {
    router.push("/lessons/basic-checkmates/king-queen/1");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/two-rooks/6");
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight5={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Summary</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              If you can't move your rook forward because it can be captured by
              the king, place it as far away from the king as possible without
              allowing the king toward the center.
            </p>
            <p className="text-body">
              If the king attacks one of your rooks, place it as far away from
              the king as possible while keeping your rooks side by side to be
              able to deliver ladder mate.
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
            <p className="pages-text">7/7</p>
          </div>
        </div>
        <div
          style={!clickable ? { pointerEvents: "none" } : null}
          className="board"
        >
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
            arePiecesDraggable={draggable}
          />
        </div>
      </div>
    </div>
  );
}

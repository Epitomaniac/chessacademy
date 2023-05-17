import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/8/3k4/8/8/8/8 w - - 0 1"));
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/rook-queen/6");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/rook-queen/4");
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight4={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Cage</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The secret to understanding how a checkmate is delivered is to
              imagine your opponent's king in a cage.
            </p>
            <p className="text-body">
              On an empty board, the king is imprisoned in an 8 X 8 cage. This
              is as big as the cage can ever be since the king has all the 64
              squares to go to. But what happens if we place a major piece on
              the board, like a rook for example?
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
            <p className="pages-text">5/13</p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

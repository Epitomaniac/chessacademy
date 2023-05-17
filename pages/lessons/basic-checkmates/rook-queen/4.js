import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("1Q2k3/R7/8/8/8/4K3/8/8 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([
    ["a7", "h7"],
    ["b8", "h8"],
  ]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/rook-queen/5");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/rook-queen/3");
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight4={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Mate on the Edge</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              By now you must have realized that giving checkmate is all about
              limiting the freedom of your opponent's king as much as possible.
              When facing a lonely king, usually the most efficient way to give
              mate is to force him to the edge of the board.
            </p>
            <p className="text-body">
              Take a look at this position; the white rook is controlling all of
              black king's escape squares while the queen is delivering mate.
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
            <p className="pages-text">4/13</p>
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

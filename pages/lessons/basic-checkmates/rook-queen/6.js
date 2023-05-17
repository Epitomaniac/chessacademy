import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/8/3k4/8/2R5/8/8 w - - 0 1"));
  const [arrows, setArrows] = useState([
    ["c3", "c8"],
    ["c3", "h3"],
  ]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/rook-queen/7");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/rook-queen/5");
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
              Now his highness can't enjoy the royal freedom he used to have
              with an empty board! The king is now in a 5 X 5 cage, which is
              only 25 squares.
            </p>
            <p className="text-body">
              Since checkmate is about limiting{" "}
              <span className="underline">all</span> of the squares a king has
              access to, our goal is to force the king to an area of the board
              that gives him less freedom, which is one of the 4 edges.
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
            <p className="pages-text">6/13</p>
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

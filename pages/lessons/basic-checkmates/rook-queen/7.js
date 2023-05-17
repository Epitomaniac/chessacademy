import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/8/8/4k3/8/8/QR5K w - - 0 1"));
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);
  const [message, setMessage] = useState("");

  function next() {
    router.push("/lessons/basic-checkmates/rook-queen/8");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/rook-queen/6");
  }

  function play() {
    game.move("Rb3");
    setGame({ ...game });
    setTimeout(() => {
      setMessage(
        "We begin by limiting the king's access to the bottom of the board.",
      );
      setArrows([["b3", "h3"]]);
    }, 300);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight4={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Ladder</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Alright, now we know what to do: 1-Force the king to the edge of
              the board; it doesn't matter which one. In this case we have
              chosen the top edge of the board. 2-Deliver checkmate once the
              king is trapped.
            </p>
            <button onClick={play} className="lesson-btn">
              Play
            </button>
            <p className="text-body">{message}</p>
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
            <p className="pages-text">7/13</p>
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

import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/2k5/R7/1R6/8/8/8 w - - 0 1"));
  const [arrows, setArrows] = useState([["c6", "b6"]]);
  const [message, setMessage] = useState("");
  const [draggable, setDraggable] = useState(true);
  const [clickable, setClickable] = useState(true);

  function next() {
    router.push("/lessons/basic-checkmates/two-rooks/4");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/two-rooks/2");
  }

  function play() {
    game.move("Rh4");
    setGame({ ...game });
    setTimeout(() => {
      setMessage(
        "The rook is now going to push the king safely from the other side of the board!",
      );
    }, 300);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight5={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Hare and the Tortoise</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              This is actually more of a minor inconvenience than a problem. All
              we need to do is keep our rooks as far away as possible to the
              king while not allowing the king to escape toward the center.
              Here's how:
            </p>
            <button className="lesson-btn" onClick={play}>
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
            <p className="pages-text">3/7</p>
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

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
    new Chess("8/3k4/Q7/1R6/8/8/8/7K w - - 0 1"),
  );
  const [arrows, setArrows] = useState([["a6", "h6"]]);
  const [draggable, setDraggable] = useState(true);
  const [clickable, setClickable] = useState(true);
  const [moved, setMoved] = useState(false);
  const [message, setMessage] = useState("");

  function next() {
    router.push("/lessons/basic-checkmates/rook-queen/13");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/rook-queen/11");
  }

  function makeMove(sourceSquare, targetSquare) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });
    if (move == null) {
      setArrows([["a6", "h6"]]);
      return false;
    }
    if (!moved) {
      if (move.san == "Rb7+") {
        setGame({ ...game });
        setMessage("Nice! Can you finish the job?");
        setDraggable(false);
        setArrows([
          ["b7", "h7"],
          ["a6", "h6"],
        ]);
        setTimeout(() => {
          game.move("Kd8");
          setGame({ ...game });
          setArrows([
            ["b7", "h7"],
            ["a6", "h6"],
          ]);
          setMoved(true);
          setDraggable(true);
        }, 1000);
        return true;
      } else {
        setGame({ ...game });
        setMessage("Try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
          setArrows([["a6", "h6"]]);
        }, 1000);
        return true;
      }
    } else if (moved) {
      if (move.san == "Qa8#") {
        setGame({ ...game });
        setMessage("Well done :) Black is checkmated. White wins.");
        setDraggable(false);
        setClickable(false);
        setArrows([
          ["b7", "h7"],
          ["a8", "h8"],
        ]);
        return true;
      } else {
        setGame({ ...game });
        setMessage("Try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
          setArrows([
            ["b7", "h7"],
            ["a6", "h6"],
          ]);
        }, 1000);
        return true;
      }
    }
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
            <p className="text-body">You know what to do right?</p>
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
            <p className="pages-text">12/13</p>
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
            arePiecesDraggable={draggable}
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
            onPieceDrop={makeMove}
          />
        </div>
      </div>
    </div>
  );
}

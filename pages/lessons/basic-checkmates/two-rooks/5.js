import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/1k6/6R1/7R/8/8/8 b - - 0 1"));
  const [arrows, setArrows] = useState([]);
  const [message, setMessage] = useState("");
  const [draggable, setDraggable] = useState(false);
  const [clickable, setClickable] = useState(true);
  const [disabled, setDisabled] = useState(true);

  function next() {
    router.push("/lessons/basic-checkmates/two-rooks/6");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/two-rooks/4");
  }

  useEffect(() => {
    setTimeout(() => {
      game.move("Kc7");
      setGame({ ...game });
      setDisabled(false);
    }, 1000);
  }, []);

  function makeMove(sourceSquare, targetSquare) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });
    if (move == null) return false;

    if (move.san == "Rh7+") {
      setGame({ ...game });
      setDraggable(false);
      setTimeout(() => {
        game.move("Ke8");
        setMessage("Nice, go on.");
        setDraggable(true);
      }, 1000);
      return true;
    }
    if (move.san == "Rg8#") {
      setGame({ ...game });
      setMessage("Good job :)");
      setDraggable(false);
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
      }, 1000);
      return true;
    }
  }

  function play() {
    game.move("Rg6");
    setGame({ ...game });
    setTimeout(() => {
      game.move("Kd7");
      setGame({ ...game });
      setMessage(
        "I'm sure you know the rest by now. Go ahead the finish the job.",
      );
      setDraggable(true);
      setDisabled(true);
    }, 1000);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight5={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Ladder</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Our rooks are safe and ready to deliver checkmate!
            </p>
            <button disabled={disabled} onClick={play} className="lesson-btn">
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
            <p className="pages-text">5/7</p>
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
            onPieceDrop={makeMove}
          />
        </div>
      </div>
    </div>
  );
}

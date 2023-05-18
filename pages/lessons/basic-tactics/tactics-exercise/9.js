import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import TacticsNav from "@/components/TacticsNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("8/ppkbr3/2nq1QB1/4p3/2P3p1/8/6PP/1R5K w - - 2 33"),
  );
  const [draggable, setDraggable] = useState(true);
  const [clickable, setClickable] = useState(true);
  const [message, setMessage] = useState("");
  const [moveNumber, setMoveNumber] = useState(1);
  const [attempts, setAttempts] = useState(0);

  function next() {
    router.push("/lessons/basic-tactics/tactics-exercise/10");
  }

  function pre() {
    router.push("/lessons/basic-tactics/tactics-exercise/8");
  }

  function makeMove(sourceSquare, targetSquare) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });
    if (move == null) return false;
    if (move.san == "Rxb7+") {
      setGame({ ...game });
      setDraggable(false);
      setTimeout(() => {
        game.move("Kxb7");
        setGame({ ...game });
        setMoveNumber(2);
        setDraggable(true);
      }, 500);
      return true;
    }
    if (move.san == "Qxd6" && moveNumber == 2) {
      setGame({ ...game });
      setDraggable(false);
      setMessage("Correct!");
      setAttempts(0);
    } else {
      setGame({ ...game });
      setMessage("Wrong move, try again");
      setDraggable(false);
      setTimeout(() => {
        setMessage("");
        game.undo();
        setGame({ ...game });
        setDraggable(true);
        setAttempts(attempts => attempts + 1);
      }, 800);
      return true;
    }
  }

  function showAnswer() {
    setAttempts(0);
    setClickable(false);
    setDraggable(false);
    game.load("8/ppkbr3/2nq1QB1/4p3/2P3p1/8/6PP/1R5K w - - 2 33");
    setTimeout(() => {
      game.move("Rxb7+");
      setGame({ ...game });
    }, 1000);
    setTimeout(() => {
      game.move("Kxb7");
      setGame({ ...game });
    }, 1500);
    setTimeout(() => {
      game.move("Qxd6");
      setGame({ ...game });
    }, 2000);
  }

  return (
    <div className="flex">
      <TacticsNav highlight7={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Puzzle #7</h2>
          </div>
          <div className="text-body-div">
            <div style={{ justifyContent: "space-between" }} className="flex">
              <p className="text-body">White to move:</p>
              {attempts >= 3 && (
                <button
                  onClick={showAnswer}
                  style={{ marginTop: "5px" }}
                  className="lesson-btn"
                >
                  Show answer
                </button>
              )}
            </div>
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
            <p className="pages-text">9/12</p>
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
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={[]}
            customSquareStyles={{}}
            arePiecesDraggable={draggable}
            onPieceDrop={makeMove}
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

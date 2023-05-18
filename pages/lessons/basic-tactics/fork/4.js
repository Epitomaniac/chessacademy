import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import TacticsNav from "@/components/TacticsNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("8/2K3R1/8/8/8/8/8/4q2k b - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [clickable, setClickable] = useState(true);
  const [draggable, setDraggable] = useState(true);
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [moves, setMoves] = useState(["Qc3+", "Qe5+"]);
  const [visible, setVisible] = useState(false);

  function next() {
    router.push("/lessons/basic-tactics/fork/5");
  }

  function pre() {
    router.push("/lessons/basic-tactics/fork/3");
  }

  function makeMove(sourceSquare, targetSquare) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });

    if (move == null) return false;

    if (moves.includes(move.san) && moves.length == 2) {
      if (move.san == "Qc3+") {
        setGame({ ...game });
        setMessage1("Good job! Can you find the other fork?");
        setVisible(true);
        setMoves(["Qe5+"]);
        setDraggable(false);
        setClickable(false);
        return true;
      } else if (move.san == "Qe5+") {
        setGame({ ...game });
        setMessage1("Good job! Can you find the other fork?");
        setVisible(true);
        setMoves(["Qc3+"]);
        setDraggable(false);
        setClickable(false);
        return true;
      }
    }
    if (moves.includes(move.san) && moves.length == 1) {
      setGame({ ...game });
      setMessage2("Excellent work :)");
      setDraggable(false);
      setClickable(false);
      return true;
    }
    if (move.san == "Qe7+") {
      setGame({ ...game });
      setMessage1("Yes, it's a fork but you lost your queen :(");
      setDraggable(false);
      setClickable(false);
      setTimeout(() => {
        game.move("Rxe7");
        setGame({ ...game });
        setVisible(true);
      }, 1000);
      return true;
    }
    if (move.san == "Qg3+") {
      setGame({ ...game });
      setMessage1("Yes, it's a fork but you lost your queen :(");
      setDraggable(false);
      setClickable(false);
      setTimeout(() => {
        game.move("Rxg3");
        setGame({ ...game });
        setVisible(true);
      }, 1000);
      return true;
    } else {
      setGame({ ...game });
      setMessage1("Wrong move, try again");
      setDraggable(false);
      setVisible(true);
      return true;
    }
  }

  function tryAgain() {
    setGame(new Chess("8/2K3R1/8/8/8/8/8/4q2k b - - 0 1"));
    setMessage1("");
    setDraggable(true);
    setClickable(true);
    setVisible(false);
  }

  return (
    <div className="flex">
      <TacticsNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Fork</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Black to move and win a piece:</p>
            <p className="text-body">{message1}</p>
            {visible && (
              <button onClick={tryAgain} className="lesson-btn">
                Try again
              </button>
            )}
            <p className="text-body">{message2}</p>
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
            <p className="pages-text">4/8</p>
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
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            onPieceDrop={makeMove}
          />
        </div>
      </div>
    </div>
  );
}

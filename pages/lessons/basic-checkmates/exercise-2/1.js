import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("7R/7R/8/3k4/8/8/8/7K w - - 0 1"));
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(true);
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/exercise-3/1");
  }

  function makeMove(source, target) {
    const move = game.move({
      from: source,
      to: target,
    });

    if (move == null) return false;
    if (game.in_checkmate()) {
      setGame({ ...game });
      setMessage("Excellent work :)");
      setDraggable(false);
      return;
    }
    if (game.in_stalemate()) {
      setGame({ ...game });
      setMessage("Stalemate :(");
      setDraggable(false);
      setVisible(true);
    } else {
      setGame({ ...game });
      setDraggable(false);
      setTimeout(() => {
        const moves = game.moves();
        const capture = moves.filter(move => move.includes("x"));
        const resistHard = moves.filter(
          move =>
            move.includes("e4") ||
            move.includes("e5") ||
            move.includes("d4") ||
            move.includes("d5"),
        );
        const resistMild = moves.filter(
          move =>
            move.includes("e4") ||
            move.includes("e5") ||
            move.includes("d4") ||
            move.includes("d5") ||
            move.includes("f3") ||
            move.includes("f4") ||
            move.includes("e3") ||
            move.includes("d3") ||
            move.includes("c3") ||
            move.includes("c4") ||
            move.includes("c5") ||
            move.includes("c6") ||
            move.includes("d6") ||
            move.includes("e6") ||
            move.includes("f6") ||
            move.includes("f5"),
        );
        const resistLast = moves.filter(
          move =>
            move.includes("g2") ||
            move.includes("f2") ||
            move.includes("e2") ||
            move.includes("d2") ||
            move.includes("c2") ||
            move.includes("b2") ||
            move.includes("b3") ||
            move.includes("b4") ||
            move.includes("b5") ||
            move.includes("b6") ||
            move.includes("b7") ||
            move.includes("c7") ||
            move.includes("d7") ||
            move.includes("e7") ||
            move.includes("f7") ||
            move.includes("g7") ||
            move.includes("g6") ||
            move.includes("g5") ||
            move.includes("g4") ||
            move.includes("g3"),
        );
        const aiMove =
          capture.length != 0
            ? capture[0]
            : resistHard.length != 0
            ? resistHard[0]
            : resistMild.length != 0
            ? resistMild[0]
            : resistLast.length != 0
            ? resistLast[0]
            : moves[Math.floor(Math.random() * moves.length)];
        game.move(aiMove);
        setGame({ ...game });
        if (aiMove === capture[0]) {
          setMessage("You lost a piece :(");
          setDraggable(false);
          setVisible(true);
        } else {
          setDraggable(true);
        }
      }, 1000);
    }

    return true;
  }

  function tryAgain() {
    setMessage("");
    setGame(new Chess("7R/7R/8/3k4/8/8/8/7K w - - 0 1"));
    setVisible(false);
    setDraggable(true);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight8={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Exercise 2</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Deliver checkmate using the available pieces. If you lose one of
              your pieces, or end up in stalemate, you will have to start over!
            </p>
            <p className="text-body">
              The AI king is programmed to stay in the center as long as
              possible to make the checkmate more challenging for you! Good
              luck.
            </p>
            <p className="text-body">{message}</p>
            {visible && (
              <button
                style={{ marginTop: "0" }}
                onClick={tryAgain}
                className="lesson-btn"
              >
                Try again
              </button>
            )}
          </div>
          <div className="arrows-div">
            <FontAwesomeIcon className="left-arrow-locked" icon={faLeftLong} />
            <FontAwesomeIcon
              onClick={next}
              className="right-arrow"
              icon={faRightLong}
            />
          </div>
          <div className="pages-div">
            <p className="pages-text">1/1</p>
          </div>
        </div>
        <div className="board">
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

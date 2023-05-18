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
    new Chess(
      "r2qr1k1/pp3ppp/2pb1p2/4n3/3P2b1/1P3NP1/PBP2PBP/R2QR1K1 b - - 0 12",
    ),
  );
  const [draggable, setDraggable] = useState(true);
  const [clickable, setClickable] = useState(true);
  const [message, setMessage] = useState("");
  const [moveNumber, setMoveNumber] = useState(1);
  const [attempts, setAttempts] = useState(0);

  function next() {
    router.push("/lessons/basic-tactics/tactics-exercise/4");
  }

  function pre() {
    router.push("/lessons/basic-tactics/tactics-exercise/2");
  }

  function makeMove(sourceSquare, targetSquare) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });
    if (move == null) return false;
    if (move.san == "Nxf3+") {
      setGame({ ...game });
      setDraggable(false);
      setTimeout(() => {
        game.move("Bxf3");
        setGame({ ...game });
        setMoveNumber(2);
        setDraggable(true);
      }, 500);
      return true;
    }
    if (move.san == "Rxe1+" && moveNumber == 2) {
      setGame({ ...game });
      setDraggable(false);
      setTimeout(() => {
        game.move("Qxe1");
        setGame({ ...game });
        setMoveNumber(3);
        setDraggable(true);
      }, 500);
      return true;
    }
    if (move.san == "Bxf3" && moveNumber == 3) {
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
    game.load(
      "r2qr1k1/pp3ppp/2pb1p2/4n3/3P2b1/1P3NP1/PBP2PBP/R2QR1K1 b - - 0 12",
    );
    setTimeout(() => {
      game.move("Nxf3+");
      setGame({ ...game });
    }, 1000);
    setTimeout(() => {
      game.move("Bxf3");
      setGame({ ...game });
    }, 1500);
    setTimeout(() => {
      game.move("Rxe1+");
      setGame({ ...game });
    }, 2000);
    setTimeout(() => {
      game.move("Qxe1");
      setGame({ ...game });
    }, 2500);
    setTimeout(() => {
      game.move("Bxf3");
      setGame({ ...game });
    }, 3000);
  }

  return (
    <div className="flex">
      <TacticsNav highlight7={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Puzzle #1</h2>
          </div>
          <div className="text-body-div">
            <div style={{ justifyContent: "space-between" }} className="flex">
              <p className="text-body">Black to move:</p>
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
            <p className="pages-text">3/12</p>
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
            boardOrientation={"black"}
          />
        </div>
      </div>
    </div>
  );
}

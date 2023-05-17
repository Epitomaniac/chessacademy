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
    new Chess("r1b3k1/1p3ppp/p7/2N5/4P3/P6P/r3BPP1/3R2K1 b - - 2 20"),
  );
  const [visible, setVisible] = useState(false);
  const [arrows, setArrows] = useState([]);
  const [message, setMessage] = useState("");
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/mate-exercise/2");
  }

  useEffect(() => {
    setTimeout(() => {
      game.move("Rxe2");
      setGame({ ...game });
      setTimeout(() => {
        setDraggable(true);
      }, 300);
    }, 1000);
  }, []);

  function makeMove(sourceSquare, targetSquare) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });

    if (move == null) return false;

    if (move.san == "Rd8#") {
      setGame({ ...game });
      setMessage("Nice work :)");
      setDraggable(false);
      return true;
    } else {
      setMessage(":( Keep looking");
      setGame({ ...game });
      setDraggable(false);
      setVisible(true);
      return true;
    }
  }

  function tryAgain() {
    setMessage("");
    setVisible(false);
    game.undo();
    setGame({ ...game });
    setDraggable(true);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight3={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Checkmate in One</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">White to move:</p>
            <p className="text-body">Can you find checkmate in 1 move?</p>
            <p className="text-body">{message}</p>
            {visible && (
              <button className="lesson-btn" onClick={tryAgain}>
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
            <p className="pages-text">1/6</p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            onPieceDrop={makeMove}
          />
        </div>
      </div>
    </div>
  );
}

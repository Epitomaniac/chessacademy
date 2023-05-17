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
    new Chess("r4k1r/p2Q1ppp/2p1p3/4P3/4n3/4q3/PPP1N1PP/3RK2R w K - 1 15"),
  );
  const [visible, setVisible] = useState(false);
  const [arrows, setArrows] = useState([]);
  const [message, setMessage] = useState("");
  const [draggable, setDraggable] = useState(false);
  const [clickable, setClickable] = useState(true);

  function next() {
    router.push("/lessons/basic-checkmates/rook-queen/1");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/mate-exercise/5");
  }

  useEffect(() => {
    setTimeout(() => {
      game.move("Qxc6");
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

    if (move.san == "Qf2#") {
      setGame({ ...game });
      setMessage(
        "Nice work :) Black's knight both protects the queen and controls the escape square.",
      );
      setArrows([
        ["e4", "d2"],
        ["e4", "f2"],
      ]);
      setDraggable(false);
      setClickable(false);
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
            <p className="text-body">Black to move:</p>
            <p className="text-body">{message}</p>
            {visible && (
              <button className="lesson-btn" onClick={tryAgain}>
                Try again
              </button>
            )}
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
            <p className="pages-text">6/6</p>
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
            onPieceDrop={makeMove}
            boardOrientation={"black"}
          />
        </div>
      </div>
    </div>
  );
}

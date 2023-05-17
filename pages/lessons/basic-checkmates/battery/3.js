import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("1br2r2/ppq2p1k/2pp2pp/5b2/8/1P5P/PBP1PPP1/2RQRBK1 w - - 0 21"),
  );
  const [arrows, setArrows] = useState([]);
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [visible, setVisible] = useState(false);
  const [draggable, setDraggable] = useState(true);

  function next() {
    router.push("/lessons/basic-checkmates/battery/4");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/battery/2");
  }

  function makeMove(sourceSquare, targetSquare) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });
    if (move == null) return false;
    if (move.san == "Qd4") {
      setGame({ ...game });
      setMessage1("Well done :)");
      setArrows([["b2", "g7"]]);
      setDraggable(false);
      setVisible(true);
      return true;
    } else {
      setGame({ ...game });
      setMessage1(":( Try again");
      setDraggable(false);
      setTimeout(() => {
        setMessage1("");
        game.undo();
        setGame({ ...game });
        setDraggable(true);
      }, 800);
      return true;
    }
  }

  function play() {
    game.move("d5");
    setGame({ ...game });
    setTimeout(() => {
      setArrows([["b8", "h2"]]);
      setMessage2(
        "However black doesn't realize it and tries to create his own battery.",
      );
    }, 300);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight2={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Creating a Battery</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">White to move:</p>
            <p className="text-body">
              Can you find a move that forms a battery?
            </p>
            <p className="text-body">{message1}</p>
            {visible && (
              <p className="text-body">
                White forms a battery and threatens checkmate.
              </p>
            )}
            {visible && (
              <button onClick={play} className="lesson-btn">
                Play
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
            <p className="pages-text">3/4</p>
          </div>
        </div>
        <div
          style={visible ? { pointerEvents: "none" } : null}
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
            onPieceDrop={makeMove}
          />
        </div>
      </div>
    </div>
  );
}

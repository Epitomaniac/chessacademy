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
    new Chess("1r6/1p3k2/2n5/p4NRP/8/8/6P1/6K1 b - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [clickable, setClickable] = useState(true);
  const [draggable, setDraggable] = useState(true);
  const [message1, setMessage1] = useState("");

  function next() {
    router.push("/lessons/basic-tactics/pin/1");
  }

  function pre() {
    router.push("/lessons/basic-tactics/fork/7");
  }

  function makeMove(sourceSquare, targetSquare) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });
    if (move == null) return false;
    if (move.san == "Kf6") {
      setGame({ ...game });
      setMessage1("Kings can fork too!");
      setArrows([
        ["f6", "g5"],
        ["f6", "f5"],
      ]);
      setDraggable(false);
      setClickable(false);
      return true;
    } else {
      setGame({ ...game });
      setMessage1("Wrong move, try again");
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

  return (
    <div className="flex">
      <TacticsNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Fork</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Black to move:</p>
            <p className="text-body">{message1}</p>
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
            <p className="pages-text">8/8</p>
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
            boardOrientation={"black"}
          />
        </div>
      </div>
    </div>
  );
}

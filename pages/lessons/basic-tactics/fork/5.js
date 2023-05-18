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
    new Chess("1k4r1/1pp2p1p/p4p1N/2b1p3/4P1P1/P1P2P2/1P5P/2KR4 b - - 1 22"),
  );
  const [arrows, setArrows] = useState([]);
  const [clickable, setClickable] = useState(true);
  const [draggable, setDraggable] = useState(true);
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");

  function next() {
    router.push("/lessons/basic-tactics/fork/6");
  }

  function pre() {
    router.push("/lessons/basic-tactics/fork/4");
  }

  function makeMove(sourceSquare, targetSquare) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });
    if (move == null) return false;
    if (move.san == "Be3+") {
      setGame({ ...game });
      setMessage1("Good!");
      setArrows([
        ["e3", "h6"],
        ["e3", "c1"],
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
            <p className="pages-text">5/8</p>
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

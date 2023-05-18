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
    new Chess("2r4k/1p3qp1/p5pp/8/5b2/PP1B4/Q1P3P1/1K3R2 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [clickable, setClickable] = useState(true);
  const [draggable, setDraggable] = useState(true);
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");

  function next() {
    router.push("/lessons/basic-tactics/pin/5");
  }

  function pre() {
    router.push("/lessons/basic-tactics/pin/3");
  }

  function makeMove(sourceSquare, targetSquare) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });
    if (move == null) return false;
    if (move.san == "g3") {
      setGame({ ...game });
      setMessage1(
        "Good job! This is called attacking or piling up on the pinned piece. It's often a very good strategy when your opponent has a pinned piece.",
      );
      setMessage2(
        "It's especially effective if the attacker is a pawn, because pawns can sacrifice themselves to capture more valuable pieces.",
      );
      setArrows([
        ["f1", "f7"],
        ["g3", "f4"],
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
      <TacticsNav highlight2={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Exploiting the Pin</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Can you find the move that takes advantage of the pin?
            </p>
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
            <p className="pages-text">4/7</p>
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
            customArrows={arrows}
            customSquareStyles={{}}
            arePiecesDraggable={draggable}
            onPieceDrop={makeMove}
          />
        </div>
      </div>
    </div>
  );
}

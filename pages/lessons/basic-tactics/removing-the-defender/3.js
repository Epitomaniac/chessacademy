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
    new Chess(
      "r3kbnr/1pq1pppp/p1np4/8/3BP1b1/1P1B1N1P/P1P2PP1/RN1QK2R b KQkq - 0 9",
    ),
  );
  const [arrows, setArrows] = useState([]);
  const [clickable, setClickable] = useState(true);
  const [draggable, setDraggable] = useState(true);
  const [message, setMessage] = useState("");
  const [moveNumber, setMoveNumber] = useState(1);

  function next() {
    router.push("/lessons/basic-tactics/removing-the-defender/4");
  }

  function pre() {
    router.push("/lessons/basic-tactics/removing-the-defender/2");
  }

  function makeMove(sourceSquare, targetSquare) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });
    if (move == null) return false;
    if (move.san == "Bxf3") {
      setGame({ ...game });
      setDraggable(false);
      setClickable(false);
      setTimeout(() => {
        game.move("Qxf3");
        setGame({ ...game });
        setMoveNumber(2);
        setDraggable(true);
        setClickable(true);
      }, 500);
      return true;
    }
    if (move.san == "Nxd4" && moveNumber == 2) {
      setGame({ ...game });
      setDraggable(false);
      setClickable(false);
      setMessage("Well done!");
    } else {
      setGame({ ...game });
      setMessage("Wrong move, try again");
      setDraggable(false);
      setTimeout(() => {
        setMessage("");
        game.undo();
        setGame({ ...game });
        setDraggable(true);
      }, 800);
      return true;
    }
  }

  return (
    <div className="flex">
      <TacticsNav highlight5={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Removing the Defender</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Black to move; find the best move.</p>
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
            <p className="pages-text">3/5</p>
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
            boardOrientation={"black"}
          />
        </div>
      </div>
    </div>
  );
}

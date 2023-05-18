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
    new Chess("rnb2b1N/pppkq1pp/5p2/3p3Q/4nP2/3B4/PPPP2PP/RNB1K2R b KQ - 0 9"),
  );
  const [arrows, setArrows] = useState([]);
  const [clickable, setClickable] = useState(true);
  const [draggable, setDraggable] = useState(true);
  const [message, setMessage] = useState("");

  function next() {
    router.push("/lessons/basic-tactics/removing-the-defender/1");
  }

  function pre() {
    router.push("/lessons/basic-tactics/discovered-attack/6");
  }

  function makeMove(sourceSquare, targetSquare) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });
    if (move == null) return false;
    if (move.san == "Ng3+") {
      setGame({ ...game });
      setDraggable(false);
      setClickable(false);
      setTimeout(() => {
        game.move("Kd1");
        setGame({ ...game });
        setDraggable(true);
        setClickable(true);
      }, 500);
      return true;
    }
    if (move.san == "Nxh5") {
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
      <TacticsNav highlight4={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">discovered Attack</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Black to move:</p>
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
            <p className="pages-text">7/7</p>
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

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
    new Chess(
      "1br2r2/ppq2p1k/2p3pp/3p1b2/3Q4/1P5P/PBP1PPP1/2R1RBK1 w - - 0 21",
    ),
  );
  const [arrows, setArrows] = useState([]);
  const [message, setMessage] = useState("");
  const [draggable, setDraggable] = useState(true);

  function next() {
    router.push("/lessons/basic-checkmates/mate-exercise/1");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/battery/3");
  }

  function makeMove(sourceSquare, targetSquare) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });
    if (move == null) return false;
    if (move.san == "Qg7#") {
      setGame({ ...game });
      setMessage("Well done :) White wins.");
      setDraggable(false);
      return true;
    } else {
      setGame({ ...game });
      setMessage("That's not the move!");
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
      <CheckmatesNav highlight2={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Creating a Battery</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Can you punish black's terrible mistake and deliver checkmate?
            </p>
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
            <p className="pages-text">4/4</p>
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
            customArrows={arrows}
            onPieceDrop={makeMove}
          />
        </div>
      </div>
    </div>
  );
}

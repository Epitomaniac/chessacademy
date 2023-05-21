import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import PiecePlayNav from "@/components/PiecePlayNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import PromotionMenu from "@/components/PromotionMenu";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("8/2p3k1/1rPp3r/3Pp3/4Pp1p/5P1P/R7/2R2K2 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(true);
  const [message, setMessage] = useState("");
  const [clickable, setClickable] = useState(true);

  function next() {
    router.push("/lessons/piece-play/piece-play-quiz/6");
  }

  function pre() {
    router.push("/lessons/piece-play/piece-play-quiz/4");
  }

  function makeMove(source, target) {
    const move = game.move({
      from: source,
      to: target,
    });
    if (move == null) return false;
    if (move.san == "Ra7") {
      setGame({ ...game });
      setDraggable(false);
      setArrows([["a7", "c7"]]);
      setMessage(
        "Well done! Attacking the base of the pawn structure which is the weakest point.",
      );
    } else {
      setGame({ ...game });
      setDraggable(false);
      setMessage("Try again");
      setTimeout(() => {
        game.undo();
        setGame({ ...game });
        setMessage("");
        setDraggable(true);
      }, 1000);
    }
    return true;
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight7={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Quiz: Piece Play</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Can you find the best move for white?</p>
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
            <p className="pages-text">5/20</p>
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
            boardOrientation={"white"}
            onPieceDrop={makeMove}
          />
        </div>
      </div>
    </div>
  );
}

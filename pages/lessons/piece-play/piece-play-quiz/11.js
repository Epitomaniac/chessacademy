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
    new Chess("r3r3/5kp1/2p1pp2/3p4/1p1P4/6P1/1P2PP1P/R3RK2 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(true);
  const [message, setMessage] = useState("");
  const [clickable, setClickable] = useState(true);
  const [visible, setVisible] = useState(false);

  function next() {
    router.push("/lessons/piece-play/piece-play-quiz/12");
  }

  function pre() {
    router.push("/lessons/piece-play/piece-play-quiz/10");
  }

  function makeMove(source, target) {
    const move = game.move({
      from: source,
      to: target,
    });
    if (move == null) return false;
    if (move.san == "Rec1") {
      setGame({ ...game });
      setDraggable(false);
      setClickable(false);
      setArrows([["c1", "c6"]]);
      setMessage(
        "Well done! White attacks black's pawn on the half-open file. Even if black exchanges rooks, that still gives white control of the open file",
      );
    } else if (move.san == "Rac1") {
      setGame({ ...game });
      setDraggable(false);
      setClickable(false);
      setMessage(
        "It's not a good move, white just gave up control of the open file and allowed black to get an active rook on the second rank.",
      );
      setTimeout(() => {
        game.move("Ra2");
        setGame({ ...game });
        setTimeout(() => {
          setArrows([["a2", "b2"]]);
          setVisible(true);
        }, 300);
      }, 500);
    } else if (move.san == "Rxa8") {
      setGame({ ...game });
      setDraggable(false);
      setClickable(false);
      setMessage(
        "It's not a good move, white just gave up control of the open file.",
      );
      setTimeout(() => {
        game.move("Rxa8");
        setGame({ ...game });
        setTimeout(() => {
          setVisible(true);
          setArrows([["a8", "a1"]]);
        }, 300);
      }, 500);
    } else {
      setGame({ ...game });
      setDraggable(false);
      setClickable(false);
      setMessage("Try again");
      setVisible(true);
    }
    return true;
  }

  function tryAgain() {
    setArrows([]);
    setVisible(false);
    game.load("r3r3/5kp1/2p1pp2/3p4/1p1P4/6P1/1P2PP1P/R3RK2 w - - 0 1");
    setGame({ ...game });
    setDraggable(true);
    setClickable(true);
    setMessage("");
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
            <p className="text-body">How can white improve one of his rooks?</p>
            <p className="text-body">{message}</p>
            {visible && (
              <button onClick={tryAgain} className="lesson-btn">
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
            <p className="pages-text">11/20</p>
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

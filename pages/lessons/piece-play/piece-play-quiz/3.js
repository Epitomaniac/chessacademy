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
    new Chess("5K2/2q1P3/5kp1/7p/8/6PP/8/8 w - - 0 58"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(true);
  const [message, setMessage] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const [clickable, setClickable] = useState(true);

  function next() {
    router.push("/lessons/piece-play/piece-play-quiz/4");
  }

  function pre() {
    router.push("/lessons/piece-play/piece-play-quiz/2");
  }

  function makeMove(source, target) {
    const move = game.move({
      from: source,
      to: target,
      promotion: "q",
    });
    if (move == null) return false;
    if (move.san == "e8=Q") {
      setGame({ ...game });
      setDraggable(false);
      setMenuVisible(true);
      game.undo();
      setGame({ ...game });
    } else {
      setGame({ ...game });
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

  function queenPicked() {
    setMenuVisible(false);
    game.move("e8=Q");
    setGame({ ...game });
    setMessage("Try again");
    setTimeout(() => {
      game.undo();
      setGame({ ...game });
      setMessage("");
      setDraggable(true);
    }, 1000);
  }

  function rookPicked() {
    setMenuVisible(false);
    game.move("e8=R");
    setGame({ ...game });
    setMessage("Try again");
    setTimeout(() => {
      game.undo();
      setGame({ ...game });
      setMessage("");
      setDraggable(true);
    }, 1000);
  }

  function bishopPicked() {
    setMenuVisible(false);
    game.move("e8=B");
    setGame({ ...game });
    setMessage("Try again");
    setTimeout(() => {
      game.undo();
      setGame({ ...game });
      setMessage("");
      setDraggable(true);
    }, 1000);
  }

  function knightPicked() {
    setMenuVisible(false);
    game.move("e8=N+");
    setGame({ ...game });
    setClickable(false);
    setArrows([
      ["e8", "f6"],
      ["e8", "c7"],
    ]);
    setMessage("Nice job!");
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
            <p className="pages-text">3/20</p>
          </div>
        </div>
        <div
          style={!clickable ? { pointerEvents: "none" } : null}
          onClick={() => {
            setMenuVisible(false);
            setDraggable(true);
          }}
          className="board"
        >
          <PromotionMenu
            queenFunc={queenPicked}
            rookFunc={rookPicked}
            bishopFunc={bishopPicked}
            knightFunc={knightPicked}
            style={!menuVisible ? { display: "none" } : null}
          />
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

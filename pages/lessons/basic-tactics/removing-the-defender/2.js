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
      "r4rk1/1bpqbpp1/2nppn1p/p7/Pp1P3B/2PQ1N2/1PBNPPPP/R2R2K1 w Qq - 0 1",
    ),
  );
  const [arrows, setArrows] = useState([]);
  const [message, setMessage] = useState("");
  const [clickable, setClickable] = useState(true);
  const [draggable, setDraggable] = useState(true);

  function next() {
    router.push("/lessons/basic-tactics/removing-the-defender/3");
  }

  function pre() {
    router.push("/lessons/basic-tactics/removing-the-defender/1");
  }

  function makeMove(sourceSquare, targetSquare) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });
    if (move == null) return false;
    if (move.san == "Bxf6") {
      setGame({ ...game });
      setDraggable(false);
      setClickable(false);
      setTimeout(() => {
        game.move("Bxf6");
        setGame({ ...game });
        setDraggable(true);
        setClickable(true);
      }, 500);
      return true;
    }
    if (move.san == "Qh7#") {
      setGame({ ...game });
      setDraggable(false);
      setClickable(false);
      setMessage("Good job!");
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
            <h2 className="text-title">Undefended Square</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Often a piece is tasked with defending an important square rather
              than another piece, which could be removed to deliver decisive
              attacks.
            </p>
            <p className="text-body">
              White has formed a battery to deliver mate, but the black knight
              is defending that square. Can you find the move that solves the
              problem?
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
            <p className="pages-text">2/5</p>
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
          />
        </div>
      </div>
    </div>
  );
}

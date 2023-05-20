import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import PiecePlayNav from "@/components/PiecePlayNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("8/2p5/3p4/8/3P4/8/8/8 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(true);
  const [message, setMessage] = useState("");

  function next() {
    router.push("/lessons/piece-play/rook/1");
  }

  function pre() {
    router.push("/lessons/piece-play/pawn/14");
  }

  function makeMove(sourceSquare, targetSquare) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });
    if (move == null) return false;
    if (move.san == "d5") {
      setGame({ ...game });
      setDraggable(false);
      setTimeout(() => {
        game.move("c5");
        setGame({ ...game });
        setDraggable(true);
      }, 500);
      return true;
    }
    if (move.san == "dxc6") {
      setGame({ ...game });
      setDraggable(false);
      setMessage("That's right :)");
      return true;
    }
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">En Passant</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              <strong>Important:</strong> If you don't capture the pawn
              immediately after it moves two squares forward, you can't capture
              it anymore. In other words you have only one chance to capture en
              passant for each pawn that advances two squares forward.
            </p>
            <p className="text-body">
              Go ahead and push your pawn and then capture the black pawn en
              passant once it moves two squares forward.
            </p>
            <p style={{ paddingTop: "0px" }} className="text-body">
              {message}
            </p>
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
            <p className="pages-text">15/15</p>
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
            customSquareStyles={{}}
            boardOrientation={"white"}
            onPieceDrop={makeMove}
          />
        </div>
      </div>
    </div>
  );
}

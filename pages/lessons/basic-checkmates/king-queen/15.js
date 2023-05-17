import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/6Qk/5K2/8/8/8/8/8 b - - 0 1"));
  const [arrows, setArrows] = useState([]);
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [squares, setSquares] = useState({});
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/exercise-1/1");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/king-queen/14");
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight6={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Summary</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Only give check if you think it's necessary.
            </p>
            <p className="text-body">
              Once the opponent's king reaches one of the edges of the board,
              make sure the king can't escape back toward the center by placing
              your queen along the rank or file that the king is in.
            </p>
            <p className="text-body">
              Finally, bring your king close to support the queen and deliver
              checkmate by hugging the opponent's king while she is defended by
              your king.
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
            customArrows={arrows}
            customSquareStyles={squares}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
            arePiecesDraggable={draggable}
          />
        </div>
      </div>
    </div>
  );
}

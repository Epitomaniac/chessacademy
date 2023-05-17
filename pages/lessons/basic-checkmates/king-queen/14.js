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
    router.push("/lessons/basic-checkmates/king-queen/15");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/king-queen/13");
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
              To checkmate with a king and queen against a lonely king:
            </p>
            <p className="text-body">
              Bring your queen as close to the opponent's king as possible
              without losing it.
            </p>
            <p className="text-body">
              If the king moves away, get closer. If not, bring your own king
              forward to support the queen and force the opponent's king back.
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
            <p className="pages-text">14/15</p>
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

import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/5K2/7k/5Q2/8/8/8/8 w - - 0 1"));
  const [arrows, setArrows] = useState([
    ["f5", "h7"],
    ["f5", "h5"],
    ["f7", "g7"],
  ]);
  const [message, setMessage] = useState("");
  const [squares, setSquares] = useState({});
  const [visible, setVisible] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/king-queen/12");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/king-queen/10");
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight6={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Stalemate</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The bad news, or the good news depending if you are attacking or
              defending, is that in case of an stalemate, the game automatically
              ends and no winner is declared. The game ends in a draw.
            </p>
            <p className="text-body">
              If you have a winning position like this, stalemate is something
              you should avoid wholeheartedly, and if you're the defending side,
              a stalemate can save you from losing the game.
            </p>
            <p style={{ paddingTop: "0px" }} className="text-body">
              Alright, back to the position.
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
            <p className="pages-text">11/15</p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customArrows={arrows}
            customSquareStyles={squares}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

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
    new Chess("3r2k1/3r1pp1/7p/8/8/8/5PPP/Q5K1 b - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [squares, setSquares] = useState({});
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [visible, setVisible] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/back-rank/6");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/back-rank/4");
  }

  function play1() {
    game.move("Rd1");
    setGame({ ...game });
    setTimeout(() => {
      setMessage1("Black gives the check anyway!");
      setVisible(true);
    }, 300);
  }

  function play2() {
    game.move("Qxd1");
    setGame({ ...game });
    setTimeout(() => {
      setMessage2(
        "White has to take the rook because there is no other legal move to play.",
      );
    }, 300);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Protecting The Back Rank</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">But it' not enough!</p>
            <button onClick={play1} className="lesson-btn">
              Play
            </button>
            <p className="text-body">{message1}</p>
            {visible && (
              <button onClick={play2} className="lesson-btn">
                Play
              </button>
            )}
            <p className="text-body">{message2}</p>
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
            <p className="pages-text">5/6</p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
            customArrowColor={"rgba(0,255,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={squares}
          />
        </div>
      </div>
    </div>
  );
}

import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/2k5/8/1QK5/8/8/8 b - - 0 1"));
  const [arrows, setArrows] = useState([]);
  const [message, setMessage] = useState("");
  const [squares, setSquares] = useState({});
  const [visible, setVisible] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/king-queen/6");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/king-queen/4");
  }

  useEffect(() => {
    setTimeout(() => {
      game.move("Kc7");
      setGame({ ...game });
      setVisible(true);
    }, 1000);
  }, []);

  function play() {
    game.move("Qb5");
    setGame({ ...game });
    setTimeout(() => {
      setMessage(
        "We move forward and make the cage even smaller. This is what we always do if the king gives way or is pushed back by force, until the opponent's king enters one of the four sides of the board.",
      );
    }, 300);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight6={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Cage Shrinks</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">The king is pushed back, What do we do?</p>
            {visible && (
              <button onClick={play} className="lesson-btn">
                Play
              </button>
            )}
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
            <p className="pages-text">5/15</p>
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

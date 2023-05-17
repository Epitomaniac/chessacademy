import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/8/3k4/1Q6/8/8/K7 b - - 0 1"));
  const [arrows, setArrows] = useState([]);
  const [message, setMessage] = useState("");
  const [squares, setSquares] = useState({});
  const [visible, setVisible] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/king-queen/4");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/king-queen/2");
  }

  useEffect(() => {
    setTimeout(() => {
      game.move("Kc6");
      setGame({ ...game });
      setVisible(true);
      setMessage(
        "Now what? Our queen can't force the king back anymore. Giving checks just allows the king to stay in the center of the board. This is where we need to bring our king to support the queen.",
      );
    }, 1000);
  }, []);

  function play() {
    game.move("Kb2");
    setGame({ ...game });
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight6={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Enter the King</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">The king decided to stay close!</p>
            <p className="text-body">{message}</p>
            {visible && (
              <button onClick={play} className="lesson-btn">
                Play
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
            <p className="pages-text">3/15</p>
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

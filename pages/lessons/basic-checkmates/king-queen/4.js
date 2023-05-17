import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("8/8/2k5/8/1Q6/8/1K6/8 b - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [message, setMessage] = useState("");
  const [squares, setSquares] = useState({});
  const [visible, setVisible] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/king-queen/5");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/king-queen/3");
  }

  useEffect(() => {
    setTimeout(() => {
      game.move("Kd5");
      setGame({ ...game });
      setVisible(true);
    }, 1000);
  }, []);

  function play() {
    game.move("Kc3");
    setGame({ ...game });
    setTimeout(() => {
      game.move("Kc6");
      setGame({ ...game });
    }, 1000);
    setTimeout(() => {
      game.move("Kc4");
      setGame({ ...game });
      setTimeout(() => {
        setArrows([["c4", "d5"]]);
        setMessage(
          "Now the black king can't stay close to the queen and has to go back!",
        );
      }, 300);
    }, 2000);
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
            <p className="text-body">
              We bring the king closer and closer until he is able to support
              the queen.
            </p>
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
            <p className="pages-text">4/15</p>
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

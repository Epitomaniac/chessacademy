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
    new Chess("8/8/4k3/2Q5/3K4/8/8/8 b - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [message, setMessage] = useState("");
  const [squares, setSquares] = useState({});
  const [visible, setVisible] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/king-queen/8");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/king-queen/6");
  }

  useEffect(() => {
    setTimeout(() => {
      game.move("Kf6");
      setGame({ ...game });
      setVisible(true);
    }, 1000);
  }, []);

  function play() {
    game.move("Qe5");
    setGame({ ...game });
    setTimeout(() => {
      setMessage(
        "The black king has no choice but to get closer to either the top edge or the right one. Regardless of what he does, our strategy is the same as before: Which is to limit black king's freedom, keeping our king and queen close together, and forcing the king back.",
      );
    }, 300);
    setTimeout(() => {
      game.move("Kf7");
      setGame({ ...game });
    }, 1000);
    setTimeout(() => {
      game.move("Kd5");
      setGame({ ...game });
    }, 2000);
    setTimeout(() => {
      game.move("Kg6");
      setGame({ ...game });
    }, 3000);
    setTimeout(() => {
      game.move("Ke6");
      setGame({ ...game });
    }, 4000);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight6={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Pushing the King Further Back</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Continuing to push the king back.</p>
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
            <p className="pages-text">7/15</p>
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

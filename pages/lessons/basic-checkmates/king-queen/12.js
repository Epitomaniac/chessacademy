import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/7k/4K3/4Q3/8/8/8/8 w - - 0 1"));
  const [arrows, setArrows] = useState([]);
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [squares, setSquares] = useState({});
  const [visible, setVisible] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/king-queen/13");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/king-queen/11");
  }

  function play1() {
    game.move("Qg3");
    setGame({ ...game });
    setTimeout(() => {
      setMessage1(
        "We trap the king on the edge of the board while staying safely away from him in fear of a stalemate!",
      );
      setArrows([["g3", "g8"]]);
    }, 300);
    setTimeout(() => {
      game.move("Kh6");
      setGame({ ...game });
      setArrows([["g3", "g8"]]);
      setTimeout(() => {
        setVisible(true);
      }, 300);
    }, 1000);
  }

  function play2() {
    game.move("Kf6");
    setGame({ ...game });
    setTimeout(() => {
      setMessage2(
        "Bringing the king closer to support the queen delivering the final blow!",
      );
    }, 300);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight6={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Avoiding the Stalemate</h2>
          </div>
          <div className="text-body-div">
            <p style={{ paddingTop: "0" }} className="text-body">
              Our other option is much safer.
            </p>
            <button
              style={{ marginTop: "0" }}
              onClick={play1}
              className="lesson-btn"
            >
              Play
            </button>
            <p style={{ paddingTop: "0" }} className="text-body">
              {message1}
            </p>
            {visible && (
              <button
                style={{ marginTop: "0" }}
                onClick={play2}
                className="lesson-btn"
              >
                Play
              </button>
            )}
            <p style={{ paddingTop: "0" }} className="text-body">
              {message2}
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
            <p className="pages-text">12/15</p>
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

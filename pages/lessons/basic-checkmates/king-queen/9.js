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
    router.push("/lessons/basic-checkmates/king-queen/10");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/king-queen/8");
  }

  function play1() {
    game.move("Kf7");
    setGame({ ...game });
    setTimeout(() => {
      setMessage1("The black king has only one move.");
    }, 300);
    setTimeout(() => {
      game.move("Kh6");
      setGame({ ...game });
      setTimeout(() => {
        setVisible(true);
      }, 300);
    }, 1000);
  }

  function play2() {
    game.move("Qf5");
    setGame({ ...game });
    setTimeout(() => {
      setMessage2("We also bring our queen closer.");
    }, 300);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight6={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Lurking Danger</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Let's see what happens if we carelessly bring our pieces close to
              the black king when he is on the edge of the board.
            </p>
            <button onClick={play1} className="lesson-btn">
              Play
            </button>
            <p style={{ paddingTop: "0px" }} className="text-body">
              {message1}
            </p>
            {visible && (
              <button onClick={play2} className="lesson-btn">
                Play
              </button>
            )}
            <p style={{ paddingTop: "0px" }} className="text-body">
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
            <p className="pages-text">9/15</p>
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

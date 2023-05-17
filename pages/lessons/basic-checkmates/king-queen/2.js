import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/8/3k4/8/8/8/KQ6 w - - 0 1"));
  const [arrows, setArrows] = useState([]);
  const [message, setMessage] = useState("");
  const [squares, setSquares] = useState({});

  function next() {
    router.push("/lessons/basic-checkmates/king-queen/3");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/king-queen/1");
  }

  function play() {
    game.move("Qb4");
    setGame({ ...game });
    setTimeout(() => {
      setArrows([
        ["b4", "b8"],
        ["b4", "h4"],
        ["b4", "f8"],
      ]);
      setMessage(
        "Notice how we didn't need to give checks. The king now has only three moves, one of which stays close to the queen. and two moves away. ",
      );
      setSquares({
        c6: { backgroundColor: "green" },
        e6: { backgroundColor: "green" },
        e5: { backgroundColor: "green" },
      });
    }, 300);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight6={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Cage Again</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              We begin by limiting the king's freedom as much as possible;
              remember the cage thing? We need to hug the king while keeping our
              own queen safe from capture
            </p>
            <button onClick={play} className="lesson-btn">
              Play
            </button>
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
            <p className="pages-text">2/15</p>
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

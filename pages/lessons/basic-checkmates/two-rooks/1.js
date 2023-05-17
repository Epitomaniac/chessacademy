import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/8/4k3/8/8/8/RR6 w - - 0 1"));
  const [arrows, setArrows] = useState([]);
  const [message, setMessage] = useState("");

  function next() {
    router.push("/lessons/basic-checkmates/two-rooks/2");
  }

  function play() {
    game.move("Rb4");
    setGame({ ...game });
    setTimeout(() => {
      setMessage(
        "We begin with the same tactic: limiting the king's access to the center of the board, pushing it more and more towards the edge.",
      );
      setArrows([["b4", "h4"]]);
    }, 300);
    setTimeout(() => {
      game.move("Kd5");
      setGame({ ...game });
      setArrows([["b4", "h4"]]);
    }, 1000);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight5={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Ladder Again</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Delivering checkmate with two rooks is basically the same as with
              a queen and a rook but you need to take some extra steps since
              unlike queens, rooks can be attacked by a king.
            </p>
            <button onClick={play} className="lesson-btn">
              Play
            </button>
            <p className="text-body">{message}</p>
          </div>
          <div className="arrows-div">
            <FontAwesomeIcon className="left-arrow-locked" icon={faLeftLong} />
            <FontAwesomeIcon
              onClick={next}
              className="right-arrow"
              icon={faRightLong}
            />
          </div>
          <div className="pages-div">
            <p className="pages-text">1/7</p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import TacticsNav from "@/components/TacticsNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("3n1rk1/q5pp/p1b5/8/6B1/1N5P/P5P1/3Q1R1K w - - 0 1"),
  );
  const [arrows, setArrows] = useState([["f8", "d8"]]);
  const [message, setMessage] = useState("");

  function next() {
    router.push("/lessons/basic-tactics/removing-the-defender/2");
  }

  function play() {
    game.move("Rxf8+");
    setGame({ ...game });
    setTimeout(() => {
      game.move("Kxf8");
      setGame({ ...game });
    }, 1000);
    setTimeout(() => {
      game.move("Qxd8");
      setGame({ ...game });
      setMessage(
        "White captures the rook, which leaves the knight free to take on the next move!",
      );
    }, 2000);
  }

  return (
    <div className="flex">
      <TacticsNav highlight5={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Removing the Defender</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              <strong>Removing the defender</strong> is a tactic in which a
              piece that has a defensive role is captured, leaving an
              unprotected piece or square that can be taken advantage of.
            </p>
            <p className="text-body">
              Here the black rook is defending the knight.
            </p>
            <button
              style={{ marginTop: "0" }}
              onClick={play}
              className="lesson-btn"
            >
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
            <p className="pages-text">1/5</p>
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
            customSquareStyles={{}}
          />
        </div>
      </div>
    </div>
  );
}

import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/2k5/R7/7R/8/8/8 b - - 0 1"));
  const [arrows, setArrows] = useState([]);
  const [message, setMessage] = useState("");
  const [draggable, setDraggable] = useState(false);
  const [clickable, setClickable] = useState(false);
  const [visible, setVisible] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/two-rooks/5");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/two-rooks/3");
  }

  useEffect(() => {
    setTimeout(() => {
      game.move("Kb6");
      setGame({ ...game });
      setArrows([["b6", "a5"]]);
      setVisible(true);
    }, 1000);
  }, []);

  function play() {
    game.move("Rg5");
    setGame({ ...game });
    setTimeout(() => {
      setMessage(
        "No problem! Notice that we didn't put the rook all the way to the right side of the board, because we need to keep our rooks side by side to be able to deliver the ladder mate. We don't want them to stumble into each other.",
      );
      setArrows([
        ["g5", "g8"],
        ["h4", "h8"],
      ]);
    }, 300);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight5={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Hare and the Tortoise</h2>
          </div>
          <div className="text-body-div">
            {visible && (
              <>
                <p className="text-body">
                  The stubborn king continues to harass the rooks!
                </p>
                <button className="lesson-btn" onClick={play}>
                  Play
                </button>
              </>
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
            <p className="pages-text">4/7</p>
          </div>
        </div>
        <div
          style={!clickable ? { pointerEvents: "none" } : null}
          className="board"
        >
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
            arePiecesDraggable={draggable}
          />
        </div>
      </div>
    </div>
  );
}

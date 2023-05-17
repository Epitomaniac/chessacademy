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
    new Chess("8/8/4k3/8/Q7/1R6/8/7K w - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/rook-queen/12");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/rook-queen/10");
  }

  function play1() {
    game.move("Rb5");
    setGame({ ...game });
    setTimeout(() => {
      setMessage1("Access denied.");
      setArrows([["b5", "h5"]]);
    }, 300);
    setTimeout(() => {
      game.move("Kd6");
      setArrows([["b5", "h5"]]);
      setVisible(true);
      setGame({ ...game });
    }, 1000);
  }

  function play2() {
    setDisabled(true);
    game.move("Qa6");
    setGame({ ...game });
    setTimeout(() => {
      setMessage2("Continuing to push the king back");
      setArrows([
        ["b5", "h5"],
        ["a6", "h6"],
      ]);
    }, 300);
    setTimeout(() => {
      game.move("Kd7");
      setArrows([
        ["b5", "h5"],
        ["a6", "h6"],
      ]);
      setVisible(true);
      setGame({ ...game });
    }, 1000);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight4={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Ladder</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Instead of giving check, we close the southern border.
            </p>
            <button disabled={disabled} onClick={play1} className="lesson-btn">
              Play
            </button>
            <p className="text-body">{message1}</p>
            {visible && (
              <button onClick={play2} className="lesson-btn">
                Play
              </button>
            )}
            <p className="text-body">{message2}</p>
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
            <p className="pages-text">11/13</p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

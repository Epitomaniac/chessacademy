import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/8/3k4/1R6/8/8/R7 w - - 0 1"));
  const [arrows, setArrows] = useState([["b4", "h4"]]);
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [draggable, setDraggable] = useState(true);
  const [clickable, setClickable] = useState(true);
  const [visible, setVisible] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/two-rooks/3");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/two-rooks/1");
  }

  function makeMove(sourceSquare, targetSquare) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });
    if (move == null) {
      setArrows([["b4", "h4"]]);
      return false;
    }
    if (move.san == "Ra5+") {
      setGame({ ...game });
      setMessage1("So far everything is working like how we planned.");
      setDraggable(false);
      setArrows([
        ["b4", "h4"],
        ["a5", "h5"],
      ]);
      setClickable(false);
      setVisible(true);
      return true;
    } else {
      setGame({ ...game });
      setMessage1("Try again");
      setDraggable(false);
      setTimeout(() => {
        setMessage1("");
        game.undo();
        setGame({ ...game });
        setDraggable(true);
        setTimeout(() => {
          setArrows([["b4", "h4"]]);
        }, 300);
      }, 1000);
      return true;
    }
  }

  function play() {
    game.move("Kc6");
    setGame({ ...game });
    setTimeout(() => {
      setMessage2(
        "The king is pushed back, but there is a problem: It's now controlling the square that we need for our rook! And our other rook can't defend that square. If only we had a queen that could do just that!",
      );
      setArrows([["c6", "b6"]]);
    }, 300);
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight5={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Twist</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Push the king further up the board.</p>
            <p className="text-body">{message1}</p>
            {visible && (
              <button className="lesson-btn" onClick={play}>
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
            <p className="pages-text">2/7</p>
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
            onPieceDrop={makeMove}
          />
        </div>
      </div>
    </div>
  );
}

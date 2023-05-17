import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/5K1k/8/8/6Q1/8/8 b - - 0 1"));
  const [arrows, setArrows] = useState([]);
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [squares, setSquares] = useState({});
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/king-queen/14");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/king-queen/12");
  }

  useEffect(() => {
    setTimeout(() => {
      game.move("Kh7");
      setGame({ ...game });
      setDraggable(true);
    }, 1000);
  }, []);

  function makeMove(source, target) {
    const move = game.move({
      from: source,
      to: target,
    });
    if (move == null) return false;

    if (move.san == "Qg7#") {
      setGame({ ...game });
      setDraggable(false);
      setMessage1("Good job :)");
      setMessage2(
        "Although this was a few notches up in terms of difficulty compared to the other checkmates you've learned so far, I assure you there's not much to it. You just need to follow a couple of guidelines, and oh, stay away from stalemate!",
      );
    } else {
      setGame({ ...game });
      setDraggable(false);
      setMessage1("Try again");
      setTimeout(() => {
        game.undo();
        setGame({ ...game });
        setMessage1("");
        setDraggable(true);
      }, 1000);
    }

    return true;
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight6={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Checkmate</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Go ahead and finish the job!</p>
            <p className="text-body">{message1}</p>
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
            <p className="pages-text">13/15</p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customArrows={arrows}
            customSquareStyles={squares}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
            onPieceDrop={makeMove}
            arePiecesDraggable={draggable}
          />
        </div>
      </div>
    </div>
  );
}

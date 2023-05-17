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
    new Chess("8/8/8/8/4k3/1R6/8/Q6K b - - 0 1"),
  );
  const [arrows, setArrows] = useState([["b3", "h3"]]);
  const [draggable, setDraggable] = useState(false);
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [visible1, setVisible1] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/rook-queen/9");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/rook-queen/7");
  }

  useEffect(() => {
    setTimeout(() => {
      game.move("Kf4");
      setGame({ ...game });
      setArrows([["b3", "h3"]]);
      setMessage1(
        "The king doesn't want to go back! So we have to force him back.",
      );
      setVisible1(true);
    }, 1000);
  }, []);

  function play() {
    game.move("Qa4");
    setGame({ ...game });
    setTimeout(() => {
      setArrows([
        ["a4", "h4"],
        ["b3", "h3"],
      ]);
    }, 300);
    setTimeout(() => {
      game.move("Ke5");
      setArrows([
        ["a4", "h4"],
        ["b3", "h3"],
      ]);
      setGame({ ...game });
      setMessage2(
        "We forced the king back. Notice that we didn't move the rook because it was already doing its job. Don't move a piece twice unless it's necessary.",
      );
    }, 1500);
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
            <p className="text-body">{message1}</p>
            {visible1 && (
              <button onClick={play} className="lesson-btn">
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
            <p className="pages-text">8/13</p>
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

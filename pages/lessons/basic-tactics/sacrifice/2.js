import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import TacticsNav from "@/components/TacticsNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("8/ppb1kp2/2P5/8/8/1B5Q/PP3rPP/3q3K w - - 0 32"),
  );
  const [arrows, setArrows] = useState([]);
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [visible, setVisible] = useState(false);

  function next() {
    router.push("/lessons/basic-tactics/sacrifice/3");
  }

  function pre() {
    router.push("/lessons/basic-tactics/sacrifice/1");
  }

  useEffect(() => {
    setTimeout(() => {
      game.move("Bxd1");
      setGame({ ...game });
      setVisible(true);
    }, 1000);
  }, []);

  function play() {
    game.move("Rf1#");
    setGame({ ...game });
    setTimeout(() => {
      setMessage1("Black now delivers checkmate!");
      setMessage2(
        "Obviously, you can sacrifice any of your pieces except your king.",
      );
    }, 300);
  }

  return (
    <div className="flex">
      <TacticsNav highlight6={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Sacrifice</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              White has no choice but to accept the sacrifice.
            </p>
            {visible && (
              <button onClick={play} className="lesson-btn">
                Play
              </button>
            )}
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
            <p className="pages-text">2/5</p>
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
            boardOrientation={"black"}
          />
        </div>
      </div>
    </div>
  );
}

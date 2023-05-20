import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import PiecePlayNav from "@/components/PiecePlayNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("6k1/pp3pp1/7p/8/8/P4P2/1P4PP/5K2 b - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  function next() {
    router.push("/lessons/piece-play/king/5");
  }

  function pre() {
    router.push("/lessons/piece-play/king/3");
  }

  useEffect(() => {
    setTimeout(() => {
      game.move("b5");
      setGame({ ...game });
      setTimeout(() => {
        setVisible1(true);
      }, 300);
    }, 1000);
  }, []);

  function play() {
    game.move("Ke2");
    setGame({ ...game });
    setTimeout(() => {
      game.move("a5");
      setGame({ ...game });
    }, 500);
    setTimeout(() => {
      game.move("Kd3");
      setGame({ ...game });
      setTimeout(() => {
        setVisible2(true);
      }, 300);
    }, 1000);
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight6={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Activating the king</h2>
          </div>
          <div className="text-body-div">
            {visible1 && (
              <>
                <p className="text-body">
                  Blacks decides to keep his king protected and pushes a pawn
                  instead.
                </p>
                <button onClick={play} className="lesson-btn">
                  Play
                </button>
              </>
            )}
            {visible2 && (
              <p className="text-body">
                White on the other hand decides to <strong>activate</strong> her
                king! Black keeps pushing pawns and white keeps bringing her
                king closer to where the action is.
              </p>
            )}
            <p className="text-body"></p>
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
            <p className="pages-text">4/13</p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

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
    new Chess("6k1/5pp1/7p/pp6/8/P2K1P2/1P4PP/8 b - - 1 3"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  function next() {
    router.push("/lessons/piece-play/king/6");
  }

  function pre() {
    router.push("/lessons/piece-play/king/4");
  }

  useEffect(() => {
    setTimeout(() => {
      game.move("b4");
      setGame({ ...game });
    }, 1000);
    setTimeout(() => {
      game.move("axb4");
      setGame({ ...game });
    }, 1500);
    setTimeout(() => {
      game.move("axb4");
      setGame({ ...game });
    }, 2000);
    setTimeout(() => {
      game.move("Kc4");
      setGame({ ...game });
      setTimeout(() => {
        setVisible1(true);
      }, 300);
    }, 2500);
  }, []);

  function play() {
    game.move("Kf8");
    setGame({ ...game });
    setTimeout(() => {
      game.move("Kxb4");
      setGame({ ...game });
      setTimeout(() => {
        setVisible2(true);
      }, 300);
    }, 500);
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
                  White's now going to capture the unguarded pawn!
                </p>
                <button onClick={play} className="lesson-btn">
                  Play
                </button>
              </>
            )}
            {visible2 && (
              <>
                <p className="text-body">
                  Black realizes his mistake and decides to activate his king
                  but it's too late! White now has an extra passed pawn and will
                  easily win the game.
                </p>
                <p className="text-body">
                  If black activated his king sooner, he wouldn't have lost the
                  game.
                </p>
              </>
            )}
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
            <p className="pages-text">5/13</p>
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

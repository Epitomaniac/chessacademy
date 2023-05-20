import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import PiecePlayNav from "@/components/PiecePlayNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess());
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function next() {
    router.push("/lessons/piece-play/knight/1");
  }

  function pre() {
    router.push("/lessons/piece-play/bishop/7");
  }

  function play() {
    setDisabled(true);
    game.move("g3");
    setGame({ ...game });
    setTimeout(() => {
      game.move("d5");
      setGame({ ...game });
    }, 500);
    setTimeout(() => {
      game.move("Bg2");
      setGame({ ...game });
    }, 1000);
    setTimeout(() => {
      game.move("g6");
      setGame({ ...game });
    }, 1500);
    setTimeout(() => {
      game.move("d4");
      setGame({ ...game });
    }, 2000);
    setTimeout(() => {
      game.move("Bg7");
      setGame({ ...game });
    }, 2500);
    setTimeout(() => {
      game.move("b3");
      setGame({ ...game });
    }, 3000);
    setTimeout(() => {
      game.move("b6");
      setGame({ ...game });
    }, 3500);
    setTimeout(() => {
      game.move("Bb2");
      setGame({ ...game });
    }, 4000);
    setTimeout(() => {
      game.move("Bb7");
      setGame({ ...game });
    }, 4500);
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight3={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Fianchetto</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Fianchetto is done by pushing the pawn that is in front of the
              knight at the start of the game and placing the bishop on the
              square that the pawn frees up.
            </p>
            <p className="text-body">
              Press the button to see bishops{" "}
              <span className="underline">finachettoed</span> at the start of
              the game.
            </p>
            <button disabled={disabled} onClick={play} className="lesson-btn">
              Play
            </button>
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
            <p className="pages-text">8/8</p>
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

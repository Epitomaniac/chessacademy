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
    router.push("/lessons/piece-play/knight/5");
  }

  function pre() {
    router.push("/lessons/piece-play/knight/3");
  }

  function play() {
    setDisabled(true);
    game.move("e4");
    setGame({ ...game });
    setTimeout(() => {
      game.move("Nf6");
      setGame({ ...game });
    }, 500);
    setTimeout(() => {
      game.move("e5");
      setGame({ ...game });
    }, 1000);
    setTimeout(() => {
      game.move("Ne4");
      setGame({ ...game });
    }, 1500);
    setTimeout(() => {
      game.move("d3");
      setGame({ ...game });
    }, 2000);
    setTimeout(() => {
      game.move("Nc5");
      setGame({ ...game });
    }, 2500);
    setTimeout(() => {
      game.move("d4");
      setGame({ ...game });
    }, 3000);
    setTimeout(() => {
      game.move("Ne6");
      setGame({ ...game });
    }, 3500);
    setTimeout(() => {
      game.move("d5");
      setGame({ ...game });
    }, 4000);
    setTimeout(() => {
      game.move("Nc5");
      setGame({ ...game });
    }, 4500);
    setTimeout(() => {
      game.move("b4");
      setGame({ ...game });
    }, 5000);
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight4={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Knights and Pawns</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Unlike queens and bishops, knights (and rooks) can be kicked by
              pawns since they can't simultaneously attack a pawn that has
              attacked them.
            </p>
            <button disabled={disabled} onClick={play} className="lesson-btn">
              Play
            </button>
            <p className="text-body">
              Place your knight on squares that are safe from pawn attacks.
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
            <p className="pages-text">4/5</p>
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

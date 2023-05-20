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
    router.push("/lessons/piece-play/king/1");
  }

  function pre() {
    router.push("/lessons/piece-play/queen/3");
  }

  function play() {
    setDisabled(true);
    game.move("e4");
    setGame({ ...game });
    setTimeout(() => {
      game.move("d5");
      setGame({ ...game });
    }, 500);
    setTimeout(() => {
      game.move("exd5");
      setGame({ ...game });
    }, 1000);
    setTimeout(() => {
      game.move("Qxd5");
      setGame({ ...game });
    }, 1500);
    setTimeout(() => {
      game.move("Nc3");
      setGame({ ...game });
    }, 2000);
    setTimeout(() => {
      game.move("Qe5+");
      setGame({ ...game });
    }, 2500);
    setTimeout(() => {
      game.move("Nge2");
      setGame({ ...game });
    }, 3000);
    setTimeout(() => {
      game.move("Qg5");
      setGame({ ...game });
    }, 3500);
    setTimeout(() => {
      game.move("d4");
      setGame({ ...game });
    }, 4000);
    setTimeout(() => {
      game.move("Qa5");
      setGame({ ...game });
    }, 4500);
    setTimeout(() => {
      game.move("Bd2");
      setGame({ ...game });
    }, 5000);
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight5={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Queen Coordination</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Although queens are quite powerful, it is often not a good idea to
              send them alone to the enemy camp. Queens are especially effective
              when they can coordinate with other pieces.
            </p>
            <button
              disabled={disabled}
              style={{ marginTop: "0px" }}
              onClick={play}
              className="lesson-btn"
            >
              Play
            </button>
            <p style={{ paddingTop: "0px" }} className="text-body">
              White is already much better because black wasted moves trying to
              attack with the queen while white used the vulnerable queen to
              bring out the pieces into the game.
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
            <p className="pages-text">4/4</p>
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
            boardOrientation={"black"}
          />
        </div>
      </div>
    </div>
  );
}

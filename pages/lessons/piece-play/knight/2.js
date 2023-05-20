import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import PiecePlayNav from "@/components/PiecePlayNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/4b3/8/8/4N3/8/8 w - - 0 1"));
  const [arrows, setArrows] = useState([
    ["e6", "g4"],
    ["e6", "c4"],
  ]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/knight/3");
  }

  function pre() {
    router.push("/lessons/piece-play/knight/1");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight4={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Knights Getting Dominated</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              If a knight and a bishop are placed within two squares from each
              other in a straight line, the bishop dominates the knight and does
              not let it move forward.
            </p>
            <p className="text-body">
              Here the black bishop is controlling all of the squares the knight
              can move forward to.
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
            <p className="pages-text">2/5</p>
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

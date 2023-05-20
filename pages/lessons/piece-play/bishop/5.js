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
    new Chess("8/8/8/8/4P3/3PBP2/8/8 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([
    ["d3", "c4"],
    ["e4", "d5"],
    ["e4", "f5"],
    ["f3", "g4"],
    ["e3", "f4"],
    ["e3", "d4"],
  ]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/bishop/6");
  }

  function pre() {
    router.push("/lessons/piece-play/bishop/4");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight3={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Bishop and Pawn Coordination</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Apart from allowing the bishop to move freely, pawns of opposite
              color to that of the bishop means that the bishop can control one
              color squares while the pawns control the other.
            </p>
            <p className="text-body">
              Here tha dark-square bishop is controlling the dark-square
              weaknesses while the pawns are conveniently controlling the light
              squares. The bishop and the pawns are coordinating very well.
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
            <p className="pages-text">5/8</p>
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

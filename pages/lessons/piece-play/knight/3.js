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
    new Chess("8/2n3k1/p2p2n1/P1pPp1p1/1p2PpP1/1P3P2/2BB4/6K1 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/knight/4");
  }

  function pre() {
    router.push("/lessons/piece-play/knight/2");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight4={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Knights in Closed Positions</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Since knights can jump over other pieces, they are highly valuable
              in closed positions. In such situations, knights can access
              squares that other pieces cannot reach.
            </p>
            <p className="text-body">
              In this position black is better because of the knight's
              superiority in closed positions and the fact that the mobility of
              white's bishops is diminished.
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
            <p className="pages-text">3/5</p>
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

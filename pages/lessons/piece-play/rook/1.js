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
    new Chess(
      "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP1B1PPP/R2Q1RK1 w Qq - 0 1",
    ),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/rook/2");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight2={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Rook</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Since rooks can't move diagonally and can't jump over other
              pieces, they can't do very well in positions where there are many
              pawns on the board.
            </p>
            <p className="text-body">
              The board shows a position where rooks can't move very well.
            </p>
            <p style={{ paddingTop: "0px" }} className="text-body">
              The rook often doesn't enter the game until the board gets clear
              of most of the pieces, which usually happens towards the end of
              the game.
            </p>
          </div>
          <div className="arrows-div">
            <FontAwesomeIcon className="left-arrow-locked" icon={faLeftLong} />
            <FontAwesomeIcon
              onClick={next}
              className="right-arrow"
              icon={faRightLong}
            />
          </div>
          <div className="pages-div">
            <p className="pages-text">1/4</p>
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

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
      "r2q1rk1/pp1b1ppp/2p1pn2/3p4/3P1B2/2P1PN2/PP1Q1PPP/R4RK1 w Qq - 0 1",
    ),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/bishop/5");
  }

  function pre() {
    router.push("/lessons/piece-play/bishop/3");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight3={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Bad Bishop Management</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              If you have bad bishops, try to keep them outside of the pawn
              chain with the same color.
            </p>
            <p className="text-body">
              Here white's bishop is better than black's bishop because it is
              outside of the pawn chain whereas black's bishop is imprisoned by
              the pawns.
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
            <p className="pages-text">4/8</p>
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

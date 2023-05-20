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
    new Chess("8/1b4b1/8/8/8/8/1B4B1/8 w - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/bishop/8");
  }

  function pre() {
    router.push("/lessons/piece-play/bishop/6");
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
              Bishops are bright into the game in two ways; either through the
              center or by placing them on their longest diagonals.
            </p>
            <p className="text-body">
              The board show a position where bishops are placed on their
              longest diagonals, which consists of 8 squares each. This is
              called <strong>fianchetto</strong> (read: fee-an-ke-tow).
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
            <p className="pages-text">7/8</p>
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
            customSquareStyles={{
              a1: { backgroundColor: "rgba(255,0,0, 0.4)" },
              b2: { backgroundColor: "rgba(255,0,0, 0.4)" },
              c3: { backgroundColor: "rgba(255,0,0, 0.4)" },
              d4: { backgroundColor: "rgba(255,0,0, 0.4)" },
              e5: { backgroundColor: "rgba(255,0,0, 0.4)" },
              f6: { backgroundColor: "rgba(255,0,0, 0.4)" },
              g7: { backgroundColor: "rgba(255,0,0, 0.4)" },
              h8: { backgroundColor: "rgba(255,0,0, 0.4)" },
              h1: { backgroundColor: "rgba(255,0,0, 0.4)" },
              g2: { backgroundColor: "rgba(255,0,0, 0.4)" },
              f3: { backgroundColor: "rgba(255,0,0, 0.4)" },
              e4: { backgroundColor: "rgba(255,0,0, 0.4)" },
              d5: { backgroundColor: "rgba(255,0,0, 0.4)" },
              c6: { backgroundColor: "rgba(255,0,0, 0.4)" },
              b7: { backgroundColor: "rgba(255,0,0, 0.4)" },
              a8: { backgroundColor: "rgba(255,0,0, 0.4)" },
            }}
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

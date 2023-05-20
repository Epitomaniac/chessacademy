import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import PiecePlayNav from "@/components/PiecePlayNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/8/8/3BB3/8/8/8 w - - 0 1"));
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/bishop/2");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight3={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Bishop Pair</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Since bishops are only limited to one color square, having both
              light-square and dark-square bishops means your bishops have
              access to all the squares on the board. Two friendly bishops are
              called the <strong>bishop pair</strong>.
            </p>
            <p className="text-body">
              Having two bishops is usually better than having two knights and
              often better than having a knight and a bishop.
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
            <p className="pages-text">1/8</p>
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
              e5: { backgroundColor: "rgba(255,0,0, 0.4)" },
              d5: { backgroundColor: "rgba(255,0,0, 0.4)" },
              f5: { backgroundColor: "rgba(255,0,0, 0.4)" },
              c5: { backgroundColor: "rgba(255,0,0, 0.4)" },
              f6: { backgroundColor: "rgba(255,0,0, 0.4)" },
              g6: { backgroundColor: "rgba(255,0,0, 0.4)" },
              c6: { backgroundColor: "rgba(255,0,0, 0.4)" },
              b6: { backgroundColor: "rgba(255,0,0, 0.4)" },
              f3: { backgroundColor: "rgba(255,0,0, 0.4)" },
              e3: { backgroundColor: "rgba(255,0,0, 0.4)" },
              h7: { backgroundColor: "rgba(255,0,0, 0.4)" },
              g7: { backgroundColor: "rgba(255,0,0, 0.4)" },
              h8: { backgroundColor: "rgba(255,0,0, 0.4)" },
              a8: { backgroundColor: "rgba(255,0,0, 0.4)" },
              b7: { backgroundColor: "rgba(255,0,0, 0.4)" },
              a7: { backgroundColor: "rgba(255,0,0, 0.4)" },
              f2: { backgroundColor: "rgba(255,0,0, 0.4)" },
              g2: { backgroundColor: "rgba(255,0,0, 0.4)" },
              g1: { backgroundColor: "rgba(255,0,0, 0.4)" },
              h1: { backgroundColor: "rgba(255,0,0, 0.4)" },
              b1: { backgroundColor: "rgba(255,0,0, 0.4)" },
              c2: { backgroundColor: "rgba(255,0,0, 0.4)" },
              a1: { backgroundColor: "rgba(255,0,0, 0.4)" },
              b2: { backgroundColor: "rgba(255,0,0, 0.4)" },
              c3: { backgroundColor: "rgba(255,0,0, 0.4)" },
              d3: { backgroundColor: "rgba(255,0,0, 0.4)" },
            }}
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

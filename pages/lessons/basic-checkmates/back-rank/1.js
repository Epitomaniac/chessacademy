import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("8/pppppppp/8/8/8/8/PPPPPPPP/8 w - - 0 1"),
  );

  function next() {
    router.push("/lessons/basic-checkmates/back-rank/2");
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Back Rank</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Your first row, where you put your king and other pieces behind
              your pawns is called your <strong>back rank</strong>.
            </p>
            <p className="text-body">
              The board shows both white's and black's back ranks.
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
            <p className="pages-text">1/6</p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
            customArrows={[]}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customSquareStyles={{
              a1: { backgroundColor: "#ff00005b" },
              b1: { backgroundColor: "#ff00005b" },
              c1: { backgroundColor: "#ff00005b" },
              d1: { backgroundColor: "#ff00005b" },
              e1: { backgroundColor: "#ff00005b" },
              f1: { backgroundColor: "#ff00005b" },
              g1: { backgroundColor: "#ff00005b" },
              h1: { backgroundColor: "#ff00005b" },
              a8: { backgroundColor: "#ff00005b" },
              b8: { backgroundColor: "#ff00005b" },
              c8: { backgroundColor: "#ff00005b" },
              d8: { backgroundColor: "#ff00005b" },
              e8: { backgroundColor: "#ff00005b" },
              f8: { backgroundColor: "#ff00005b" },
              g8: { backgroundColor: "#ff00005b" },
              h8: { backgroundColor: "#ff00005b" },
            }}
          />
        </div>
      </div>
    </div>
  );
}

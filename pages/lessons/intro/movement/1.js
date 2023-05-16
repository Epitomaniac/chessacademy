import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const chess = new Chess("8/8/8/8/3R4/8/8/8 w - - 0 1");

  function next() {
    router.push("/lessons/intro/movement/2");
  }

  return (
    <div className="flex">
      <IntroNav highlight5={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Rook</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The rook moves in a <splan className="underline">straight</splan>{" "}
              line in every direction and as many squares as it likes to.
            </p>
            <p className="text-body">
              The board shows all the squares the rook can go to in one move.
            </p>
            <p className="text-body">
              The rook is a powerful long-range major piece.
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
            <p className="pages-text">1/11</p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={chess.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
            customSquareStyles={{
              d5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              e4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              f4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              g4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              h4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              c4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              b4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              a4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
            }}
          />
        </div>
      </div>
    </div>
  );
}

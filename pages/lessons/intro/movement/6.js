import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const chess = new Chess("8/8/8/8/3Q4/8/8/8 w - - 0 1");

  function next() {
    router.push("/lessons/intro/movement/7");
  }

  function pre() {
    router.push("/lessons/intro/movement/5");
  }

  return (
    <div className="flex">
      <IntroNav highlight5={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Queen</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The queen can move both in a straight line and diagonally in every
              direction and as many squares as it likes to.
            </p>
            <p className="text-body">
              The board shows all the squares the queen can go to in one move.
            </p>
            <p className="text-body">
              Because of this freedom of movement, the queen is the most
              powerful piece on the board.
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
            <p className="pages-text">6/11</p>
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
              e5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              f6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              g7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              h8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              c3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              b2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              a1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              c5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              b6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              a7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              e3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              f2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              g1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
            }}
          />
        </div>
      </div>
    </div>
  );
}

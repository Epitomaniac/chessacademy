import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const chess = new Chess("8/8/8/8/4N3/8/8/8 w - - 0 1");

  function next() {
    router.push("/lessons/intro/movement/5");
  }

  function pre() {
    router.push("/lessons/intro/movement/3");
  }

  return (
    <div className="flex">
      <IntroNav highlight5={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Knight</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The knight moves two squares forward and one square to the side,
              or one square forward and two squares to the side, in every
              direction, kind of like a capital letter "L".
            </p>
            <p className="text-body">
              The board shows all the squares the knight can go to in one move.
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
            <p className="pages-text">4/11</p>
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
              f6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              c5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              c3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              f2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              g3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              g5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
            }}
          />
        </div>
      </div>
    </div>
  );
}

import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const chess = new Chess("8/8/8/B1ppp3/8/8/8/8 w - - 0 1");

  function next() {
    router.push("/lessons/intro/piece-values/5");
  }

  function pre() {
    router.push("/lessons/intro/piece-values/3");
  }

  return (
    <div className="flex">
      <IntroNav highlight3={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Bishop</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The Bishop is also worth about 3 pawns. So a knight and a bishop
              have about the same value.
            </p>
            <p className="text-body">
              Knights and bishops are called <strong>minor pieces</strong>.
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
            <p className="pages-text">4/7</p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            position={chess.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    </div>
  );
}

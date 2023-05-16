import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const chess = new Chess("3r4/6k1/3b1p2/8/2B5/8/8/K7 w - - 0 1");

  function next() {
    router.push("/lessons/intro/movement/4");
  }

  function pre() {
    router.push("/lessons/intro/movement/2");
  }

  return (
    <div className="flex">
      <IntroNav highlight5={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Bishop</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The bishop is a powerful long-range minor piece, but the downside
              is that it's limited to only one color square. A{" "}
              <strong>dark-squared</strong> bishop can only move in dark squares
              and a <strong>light-squared</strong> bishop is only allowed to
              move in light squares.
            </p>
            <p className="text-body">
              In this position, white's light-squared bishop can't attack any of
              black's pieces because they're all on dark squares.{" "}
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
            <p className="pages-text">3/11</p>
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

import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const chess = new Chess();
  chess.clear();

  function next() {
    router.push("/lessons/intro/placement/2");
  }

  return (
    <div className="flex">
      <IntroNav highlight2={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Start</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Each side begins the game with 16 pieces; 1 king, 1 queen, 2
              rooks, 2 bishops, 2 knights, and 8 pawns.
            </p>
            <p className="text-body">
              One side has the white pieces and the other the black pieces.
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
            position={chess.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
          />
        </div>
      </div>
    </div>
  );
}

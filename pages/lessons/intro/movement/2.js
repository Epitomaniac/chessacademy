import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const chess = new Chess("8/8/8/8/3b4/8/8/8 w - - 0 1");

  function next() {
    router.push("/lessons/intro/movement/3");
  }

  function pre() {
    router.push("/lessons/intro/movement/1");
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
              The bishop moves <splan className="underline">diagonally</splan>{" "}
              in every direction and as many squares as it likes to.
            </p>
            <p className="text-body">
              The board shows all the squares the bishop can go to in one move.
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
            <p className="pages-text">2/11</p>
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

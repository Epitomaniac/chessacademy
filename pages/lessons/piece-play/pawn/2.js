import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import PiecePlayNav from "@/components/PiecePlayNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  function next() {
    router.push("/lessons/piece-play/pawn/3");
  }

  function pre() {
    router.push("/lessons/piece-play/pawn/1");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Strategy</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              But there is one more aspect to every game of chess than tactics,
              and that is <strong>strategy</strong>. Strategy involves
              evaluating a position and setting long-term goals and plans before
              making a move.
            </p>
            <p className="text-body">
              Generally the more you know about chess, the better you are at
              understanding a position and developing plans around it. And the
              pieces on the board are important factors that heavily influence
              this strategic aspect.
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
            <p className="pages-text">2/15</p>
          </div>
        </div>
      </div>
    </div>
  );
}

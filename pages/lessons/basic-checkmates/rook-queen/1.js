import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  function next() {
    router.push("/lessons/basic-checkmates/rook-queen/2");
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight4={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Checkmates: to Give or to Get?</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              In previous sections we became familiar with some common checkmate
              positions that can occur during a game of chess.
            </p>
            <p className="text-body">
              But not all checkmates are as sudden and short as we saw
              previously. Most of the times you have to force checkmate, rather
              than your opponent giving it to you by mistake.
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
            <p className="pages-text">1/13</p>
          </div>
        </div>
      </div>
    </div>
  );
}

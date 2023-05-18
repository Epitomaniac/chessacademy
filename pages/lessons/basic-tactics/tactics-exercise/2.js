import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import TacticsNav from "@/components/TacticsNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  function next() {
    router.push("/lessons/basic-tactics/tactics-exercise/3");
  }

  function pre() {
    router.push("/lessons/basic-tactics/tactics-exercise/1");
  }

  function start() {
    router.push("/lessons/basic-tactics/tactics-exercise/3");
  }

  return (
    <div className="flex">
      <TacticsNav highlight7={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Tactics</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Remember, in an actual game you're not allowed to undo your moves.
              So be patient and don't move a piece until you see the solution in
              your mind.
            </p>
            <p className="text-body">Good luck!</p>
            <button onClick={start} className="lesson-btn">
              Start the test
            </button>
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
            <p className="pages-text">2/12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

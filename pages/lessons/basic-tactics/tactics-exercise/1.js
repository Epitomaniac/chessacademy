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
    router.push("/lessons/basic-tactics/tactics-exercise/2");
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
              This section is going to have a series of tactics puzzles that is
              going to serve as a final test of all the tactical themes you've
              learned so far.
            </p>
            <p className="text-body">
              The puzzles in this section are going be more difficult than the
              ones you did in the previous sections of the lesson, simply
              because you won't know what tactical themes are going to be used
              in the puzzles, and that sometimes several tactics are used in the
              same puzzle.
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
            <p className="pages-text">1/12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

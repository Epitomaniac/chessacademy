import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [rankStyles, setRankStyles] = useState({});
  const [disabled, setDisabled] = useState(false);
  const chess = new Chess();
  chess.clear();

  function next() {
    router.push("/lessons/intro/board/2");
  }

  function showRanks() {
    setDisabled(true);
    setRankStyles({
      a1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      b1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      c1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      d1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      e1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      f1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      g1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      h1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
    });
    setTimeout(() => {
      setRankStyles({});
    }, 300);
    setTimeout(() => {
      setRankStyles({
        a2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 300);
    setTimeout(() => {
      setRankStyles({});
    }, 600);
    setTimeout(() => {
      setRankStyles({
        a3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 600);
    setTimeout(() => {
      setRankStyles({});
    }, 900);
    setTimeout(() => {
      setRankStyles({
        a4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 900);
    setTimeout(() => {
      setRankStyles({});
    }, 1200);
    setTimeout(() => {
      setRankStyles({
        a5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 1200);
    setTimeout(() => {
      setRankStyles({});
    }, 1500);
    setTimeout(() => {
      setRankStyles({
        a6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 1500);
    setTimeout(() => {
      setRankStyles({});
    }, 1800);
    setTimeout(() => {
      setRankStyles({
        a7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 1800);
    setTimeout(() => {
      setRankStyles({});
    }, 2100);
    setTimeout(() => {
      setRankStyles({
        a8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 2100);
    setTimeout(() => {
      setRankStyles({});
      setDisabled(false);
    }, 2400);
  }

  function showFiles() {
    setDisabled(true);
    setRankStyles({
      a1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      a2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      a3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      a4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      a5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      a6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      a7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      a8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
    });
    setTimeout(() => {
      setRankStyles({});
    }, 300);
    setTimeout(() => {
      setRankStyles({
        b1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b3: { backgrsoundColor: "rgba(255, 0, 0, 0.4)" },
        b4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 300);
    setTimeout(() => {
      setRankStyles({});
    }, 600);
    setTimeout(() => {
      setRankStyles({
        c1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 600);
    setTimeout(() => {
      setRankStyles({});
    }, 900);
    setTimeout(() => {
      setRankStyles({
        d1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 900);
    setTimeout(() => {
      setRankStyles({});
    }, 1200);
    setTimeout(() => {
      setRankStyles({
        e1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 1200);
    setTimeout(() => {
      setRankStyles({});
    }, 1500);
    setTimeout(() => {
      setRankStyles({
        f1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 1500);
    setTimeout(() => {
      setRankStyles({});
    }, 1800);
    setTimeout(() => {
      setRankStyles({
        g1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 1800);
    setTimeout(() => {
      setRankStyles({});
    }, 2100);
    setTimeout(() => {
      setRankStyles({
        h1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 2100);
    setTimeout(() => {
      setRankStyles({});
      setDisabled(false);
    }, 2400);
  }

  return (
    <div className="flex">
      <IntroNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Ranks and Files</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              As you can see on the screen, the game of chess is played on a
              board with 64 (8 X 8) squares. Each horizontal row of squares is
              called a<strong> rank</strong>, and each column of squares is
              called a <strong>file</strong>.
            </p>
            <button
              disabled={disabled}
              onClick={showRanks}
              className="lesson-btn"
            >
              Show ranks
            </button>
            <button
              disabled={disabled}
              onClick={showFiles}
              className="lesson-btn"
            >
              Show files
            </button>
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
            <p className="pages-text">1/3</p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            position={chess.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customSquareStyles={rankStyles}
          />
        </div>
      </div>
    </div>
  );
}

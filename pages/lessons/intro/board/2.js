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
    router.push("/lessons/intro/board/3");
  }

  function pre() {
    router.push("/lessons/intro/board/1");
  }

  function showLight() {
    setDisabled(true);
    setRankStyles({
      a2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      b1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      f1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      g2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      h3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
    });
    setTimeout(() => {
      setRankStyles({});
    }, 300);
    setTimeout(() => {
      setRankStyles({
        a4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 300);
    setTimeout(() => {
      setRankStyles({});
    }, 600);
    setTimeout(() => {
      setRankStyles({
        a6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 600);
    setTimeout(() => {
      setRankStyles({});
    }, 900);
    setTimeout(() => {
      setRankStyles({
        a8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        a2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 900);
    setTimeout(() => {
      setRankStyles({});
    }, 1200);
    setTimeout(() => {
      setRankStyles({
        c8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        a4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 1200);
    setTimeout(() => {
      setRankStyles({});
    }, 1500);
    setTimeout(() => {
      setRankStyles({
        e8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        a6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 1500);
    setTimeout(() => {
      setRankStyles({});
    }, 1800);
    setTimeout(() => {
      setRankStyles({
        g8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 1800);
    setTimeout(() => {
      setRankStyles({});
      setDisabled(false);
    }, 2100);
  }

  function showDark() {
    setDisabled(true);
    setRankStyles({
      a3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      b2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      c1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      g1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      h2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
    });
    setTimeout(() => {
      setRankStyles({});
    }, 300);
    setTimeout(() => {
      setRankStyles({
        a5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 300);
    setTimeout(() => {
      setRankStyles({});
    }, 600);
    setTimeout(() => {
      setRankStyles({
        a7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 600);
    setTimeout(() => {
      setRankStyles({});
    }, 900);
    setTimeout(() => {
      setRankStyles({
        b8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        a1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 900);
    setTimeout(() => {
      setRankStyles({});
    }, 1200);
    setTimeout(() => {
      setRankStyles({
        d8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        a3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        e7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        f8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 1200);
    setTimeout(() => {
      setRankStyles({});
    }, 1500);
    setTimeout(() => {
      setRankStyles({
        f8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        g7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        h6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        a5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        c7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        d8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 1500);
    setTimeout(() => {
      setRankStyles({});
    }, 1800);
    setTimeout(() => {
      setRankStyles({
        a7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
        b8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
      });
    }, 1800);
    setTimeout(() => {
      setRankStyles({});
      setDisabled(false);
    }, 2100);
  }

  return (
    <div className="flex">
      <IntroNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Diagonals</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Each row of squares that are diagonally connected is called a
              <strong> diagonal</strong>.
            </p>
            <button
              disabled={disabled}
              onClick={showLight}
              className="lesson-btn"
            >
              Show light-square diagonals
            </button>
            <button
              disabled={disabled}
              onClick={showDark}
              className="lesson-btn"
            >
              Show dark-square diagonals
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
            <p className="pages-text">2/3</p>
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

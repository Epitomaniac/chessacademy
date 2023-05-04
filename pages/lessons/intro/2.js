import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Section2() {
  const router = useRouter();
  const sections = [
    <One next={next} />,
    <Two next={next} pre={pre} />,
    <Three direct={direct} pre={pre} />,
  ];
  const [index, setIndex] = useState(0);

  function next() {
    if (index + 1 < sections.length) {
      setIndex(index => index + 1);
    }
  }

  function pre() {
    if (index + 1 > 1) {
      setIndex(index => index - 1);
    }
  }

  function direct() {
    router.push("/lessons/intro/3");
  }

  function One({ next }) {
    const [rankStyles, setRankStyles] = useState({});
    const [disabled, setDisabled] = useState(false);
    const chess = new Chess();
    chess.clear();

    function showRanks() {
      setDisabled(true);
      setRankStyles({
        a1: { backgroundColor: "#FF7A0B" },
        b1: { backgroundColor: "#FFB200" },
        c1: { backgroundColor: "#FF7A0B" },
        d1: { backgroundColor: "#FFB200" },
        e1: { backgroundColor: "#FF7A0B" },
        f1: { backgroundColor: "#FFB200" },
        g1: { backgroundColor: "#FF7A0B" },
        h1: { backgroundColor: "#FFB200" },
      });
      setTimeout(() => {
        setRankStyles({});
      }, 300);
      setTimeout(() => {
        setRankStyles({
          a2: { backgroundColor: "#FFB200" },
          b2: { backgroundColor: "#FF7A0B" },
          c2: { backgroundColor: "#FFB200" },
          d2: { backgroundColor: "#FF7A0B" },
          e2: { backgroundColor: "#FFB200" },
          f2: { backgroundColor: "#FF7A0B" },
          g2: { backgroundColor: "#FFB200" },
          h2: { backgroundColor: "#FF7A0B" },
        });
      }, 300);
      setTimeout(() => {
        setRankStyles({});
      }, 600);
      setTimeout(() => {
        setRankStyles({
          a3: { backgroundColor: "#FF7A0B" },
          b3: { backgroundColor: "#FFB200" },
          c3: { backgroundColor: "#FF7A0B" },
          d3: { backgroundColor: "#FFB200" },
          e3: { backgroundColor: "#FF7A0B" },
          f3: { backgroundColor: "#FFB200" },
          g3: { backgroundColor: "#FF7A0B" },
          h3: { backgroundColor: "#FFB200" },
        });
      }, 600);
      setTimeout(() => {
        setRankStyles({});
      }, 900);
      setTimeout(() => {
        setRankStyles({
          a4: { backgroundColor: "#FFB200" },
          b4: { backgroundColor: "#FF7A0B" },
          c4: { backgroundColor: "#FFB200" },
          d4: { backgroundColor: "#FF7A0B" },
          e4: { backgroundColor: "#FFB200" },
          f4: { backgroundColor: "#FF7A0B" },
          g4: { backgroundColor: "#FFB200" },
          h4: { backgroundColor: "#FF7A0B" },
        });
      }, 900);
      setTimeout(() => {
        setRankStyles({});
      }, 1200);
      setTimeout(() => {
        setRankStyles({
          a5: { backgroundColor: "#FF7A0B" },
          b5: { backgroundColor: "#FFB200" },
          c5: { backgroundColor: "#FF7A0B" },
          d5: { backgroundColor: "#FFB200" },
          e5: { backgroundColor: "#FF7A0B" },
          f5: { backgroundColor: "#FFB200" },
          g5: { backgroundColor: "#FF7A0B" },
          h5: { backgroundColor: "#FFB200" },
        });
      }, 1200);
      setTimeout(() => {
        setRankStyles({});
      }, 1500);
      setTimeout(() => {
        setRankStyles({
          a6: { backgroundColor: "#FFB200" },
          b6: { backgroundColor: "#FF7A0B" },
          c6: { backgroundColor: "#FFB200" },
          d6: { backgroundColor: "#FF7A0B" },
          e6: { backgroundColor: "#FFB200" },
          f6: { backgroundColor: "#FF7A0B" },
          g6: { backgroundColor: "#FFB200" },
          h6: { backgroundColor: "#FF7A0B" },
        });
      }, 1500);
      setTimeout(() => {
        setRankStyles({});
      }, 1800);
      setTimeout(() => {
        setRankStyles({
          a7: { backgroundColor: "#FF7A0B" },
          b7: { backgroundColor: "#FFB200" },
          c7: { backgroundColor: "#FF7A0B" },
          d7: { backgroundColor: "#FFB200" },
          e7: { backgroundColor: "#FF7A0B" },
          f7: { backgroundColor: "#FFB200" },
          g7: { backgroundColor: "#FF7A0B" },
          h7: { backgroundColor: "#FFB200" },
        });
      }, 1800);
      setTimeout(() => {
        setRankStyles({});
      }, 2100);
      setTimeout(() => {
        setRankStyles({
          a8: { backgroundColor: "#FFB200" },
          b8: { backgroundColor: "#FF7A0B" },
          c8: { backgroundColor: "#FFB200" },
          d8: { backgroundColor: "#FF7A0B" },
          e8: { backgroundColor: "#FFB200" },
          f8: { backgroundColor: "#FF7A0B" },
          g8: { backgroundColor: "#FFB200" },
          h8: { backgroundColor: "#FF7A0B" },
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
        a1: { backgroundColor: "#FF7A0B" },
        a2: { backgroundColor: "#FFB200" },
        a3: { backgroundColor: "#FF7A0B" },
        a4: { backgroundColor: "#FFB200" },
        a5: { backgroundColor: "#FF7A0B" },
        a6: { backgroundColor: "#FFB200" },
        a7: { backgroundColor: "#FF7A0B" },
        a8: { backgroundColor: "#FFB200" },
      });
      setTimeout(() => {
        setRankStyles({});
      }, 300);
      setTimeout(() => {
        setRankStyles({
          b1: { backgroundColor: "#FFB200" },
          b2: { backgroundColor: "#FF7A0B" },
          b3: { backgrsoundColor: "#FFB200" },
          b4: { backgroundColor: "#FF7A0B" },
          b5: { backgroundColor: "#FFB200" },
          b6: { backgroundColor: "#FF7A0B" },
          b7: { backgroundColor: "#FFB200" },
          b8: { backgroundColor: "#FF7A0B" },
        });
      }, 300);
      setTimeout(() => {
        setRankStyles({});
      }, 600);
      setTimeout(() => {
        setRankStyles({
          c1: { backgroundColor: "#FF7A0B" },
          c2: { backgroundColor: "#FFB200" },
          c3: { backgroundColor: "#FF7A0B" },
          c4: { backgroundColor: "#FFB200" },
          c5: { backgroundColor: "#FF7A0B" },
          c6: { backgroundColor: "#FFB200" },
          c7: { backgroundColor: "#FF7A0B" },
          c8: { backgroundColor: "#FFB200" },
        });
      }, 600);
      setTimeout(() => {
        setRankStyles({});
      }, 900);
      setTimeout(() => {
        setRankStyles({
          d1: { backgroundColor: "#FFB200" },
          d2: { backgroundColor: "#FF7A0B" },
          d3: { backgroundColor: "#FFB200" },
          d4: { backgroundColor: "#FF7A0B" },
          d5: { backgroundColor: "#FFB200" },
          d6: { backgroundColor: "#FF7A0B" },
          d7: { backgroundColor: "#FFB200" },
          d8: { backgroundColor: "#FF7A0B" },
        });
      }, 900);
      setTimeout(() => {
        setRankStyles({});
      }, 1200);
      setTimeout(() => {
        setRankStyles({
          e1: { backgroundColor: "#FF7A0B" },
          e2: { backgroundColor: "#FFB200" },
          e3: { backgroundColor: "#FF7A0B" },
          e4: { backgroundColor: "#FFB200" },
          e5: { backgroundColor: "#FF7A0B" },
          e6: { backgroundColor: "#FFB200" },
          e7: { backgroundColor: "#FF7A0B" },
          e8: { backgroundColor: "#FFB200" },
        });
      }, 1200);
      setTimeout(() => {
        setRankStyles({});
      }, 1500);
      setTimeout(() => {
        setRankStyles({
          f1: { backgroundColor: "#FFB200" },
          f2: { backgroundColor: "#FF7A0B" },
          f3: { backgroundColor: "#FFB200" },
          f4: { backgroundColor: "#FF7A0B" },
          f5: { backgroundColor: "#FFB200" },
          f6: { backgroundColor: "#FF7A0B" },
          f7: { backgroundColor: "#FFB200" },
          f8: { backgroundColor: "#FF7A0B" },
        });
      }, 1500);
      setTimeout(() => {
        setRankStyles({});
      }, 1800);
      setTimeout(() => {
        setRankStyles({
          g1: { backgroundColor: "#FF7A0B" },
          g2: { backgroundColor: "#FFB200" },
          g3: { backgroundColor: "#FF7A0B" },
          g4: { backgroundColor: "#FFB200" },
          g5: { backgroundColor: "#FF7A0B" },
          g6: { backgroundColor: "#FFB200" },
          g7: { backgroundColor: "#FF7A0B" },
          g8: { backgroundColor: "#FFB200" },
        });
      }, 1800);
      setTimeout(() => {
        setRankStyles({});
      }, 2100);
      setTimeout(() => {
        setRankStyles({
          h1: { backgroundColor: "#FFB200" },
          h2: { backgroundColor: "#FF7A0B" },
          h3: { backgroundColor: "#FFB200" },
          h4: { backgroundColor: "#FF7A0B" },
          h5: { backgroundColor: "#FFB200" },
          h6: { backgroundColor: "#FF7A0B" },
          h7: { backgroundColor: "#FFB200" },
          h8: { backgroundColor: "#FF7A0B" },
        });
      }, 2100);
      setTimeout(() => {
        setRankStyles({});
        setDisabled(false);
      }, 2400);
    }

    return (
      <div className="container">
        <IntroNav />
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
            <p className="pages-text">
              {index + 1}/{sections.length}
            </p>
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
    );
  }

  function Two({ next, pre }) {
    const [rankStyles, setRankStyles] = useState({});
    const [disabled, setDisabled] = useState(false);
    const chess = new Chess();
    chess.clear();

    function showLight() {
      setDisabled(true);
      setRankStyles({
        a2: { backgroundColor: "#FFB200" },
        b1: { backgroundColor: "#FFB200" },
        f1: { backgroundColor: "#FFB200" },
        g2: { backgroundColor: "#FFB200" },
        h3: { backgroundColor: "#FFB200" },
      });
      setTimeout(() => {
        setRankStyles({});
      }, 300);
      setTimeout(() => {
        setRankStyles({
          a4: { backgroundColor: "#FFB200" },
          b3: { backgroundColor: "#FFB200" },
          c2: { backgroundColor: "#FFB200" },
          d1: { backgroundColor: "#FFB200" },
          e2: { backgroundColor: "#FFB200" },
          f3: { backgroundColor: "#FFB200" },
          g4: { backgroundColor: "#FFB200" },
          h5: { backgroundColor: "#FFB200" },
        });
      }, 300);
      setTimeout(() => {
        setRankStyles({});
      }, 600);
      setTimeout(() => {
        setRankStyles({
          a6: { backgroundColor: "#FFB200" },
          b5: { backgroundColor: "#FFB200" },
          c4: { backgroundColor: "#FFB200" },
          d3: { backgroundColor: "#FFB200" },
          e2: { backgroundColor: "#FFB200" },
          f1: { backgroundColor: "#FFB200" },
          b1: { backgroundColor: "#FFB200" },
          c2: { backgroundColor: "#FFB200" },
          d3: { backgroundColor: "#FFB200" },
          e4: { backgroundColor: "#FFB200" },
          f5: { backgroundColor: "#FFB200" },
          g6: { backgroundColor: "#FFB200" },
          h7: { backgroundColor: "#FFB200" },
        });
      }, 600);
      setTimeout(() => {
        setRankStyles({});
      }, 900);
      setTimeout(() => {
        setRankStyles({
          a8: { backgroundColor: "#FFB200" },
          b7: { backgroundColor: "#FFB200" },
          c6: { backgroundColor: "#FFB200" },
          d5: { backgroundColor: "#FFB200" },
          e4: { backgroundColor: "#FFB200" },
          f3: { backgroundColor: "#FFB200" },
          g2: { backgroundColor: "#FFB200" },
          h1: { backgroundColor: "#FFB200" },
          a2: { backgroundColor: "#FFB200" },
          b3: { backgroundColor: "#FFB200" },
          c4: { backgroundColor: "#FFB200" },
          d5: { backgroundColor: "#FFB200" },
          e6: { backgroundColor: "#FFB200" },
          f7: { backgroundColor: "#FFB200" },
          g8: { backgroundColor: "#FFB200" },
        });
      }, 900);
      setTimeout(() => {
        setRankStyles({});
      }, 1200);
      setTimeout(() => {
        setRankStyles({
          c8: { backgroundColor: "#FFB200" },
          d7: { backgroundColor: "#FFB200" },
          e6: { backgroundColor: "#FFB200" },
          f5: { backgroundColor: "#FFB200" },
          g4: { backgroundColor: "#FFB200" },
          h3: { backgroundColor: "#FFB200" },
          a4: { backgroundColor: "#FFB200" },
          b5: { backgroundColor: "#FFB200" },
          c6: { backgroundColor: "#FFB200" },
          d7: { backgroundColor: "#FFB200" },
          e8: { backgroundColor: "#FFB200" },
        });
      }, 1200);
      setTimeout(() => {
        setRankStyles({});
      }, 1500);
      setTimeout(() => {
        setRankStyles({
          e8: { backgroundColor: "#FFB200" },
          f7: { backgroundColor: "#FFB200" },
          g6: { backgroundColor: "#FFB200" },
          h5: { backgroundColor: "#FFB200" },
          a6: { backgroundColor: "#FFB200" },
          b7: { backgroundColor: "#FFB200" },
          c8: { backgroundColor: "#FFB200" },
        });
      }, 1500);
      setTimeout(() => {
        setRankStyles({});
      }, 1800);
      setTimeout(() => {
        setRankStyles({
          g8: { backgroundColor: "#FFB200" },
          h7: { backgroundColor: "#FFB200" },
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
        a3: { backgroundColor: "#FF7A0B" },
        b2: { backgroundColor: "#FF7A0B" },
        c1: { backgroundColor: "#FF7A0B" },
        g1: { backgroundColor: "#FF7A0B" },
        h2: { backgroundColor: "#FF7A0B" },
      });
      setTimeout(() => {
        setRankStyles({});
      }, 300);
      setTimeout(() => {
        setRankStyles({
          a5: { backgroundColor: "#FF7A0B" },
          b4: { backgroundColor: "#FF7A0B" },
          c3: { backgroundColor: "#FF7A0B" },
          d2: { backgroundColor: "#FF7A0B" },
          e1: { backgroundColor: "#FF7A0B" },
          f2: { backgroundColor: "#FF7A0B" },
          g3: { backgroundColor: "#FF7A0B" },
          h4: { backgroundColor: "#FF7A0B" },
        });
      }, 300);
      setTimeout(() => {
        setRankStyles({});
      }, 600);
      setTimeout(() => {
        setRankStyles({
          a7: { backgroundColor: "#FF7A0B" },
          b6: { backgroundColor: "#FF7A0B" },
          c5: { backgroundColor: "#FF7A0B" },
          d4: { backgroundColor: "#FF7A0B" },
          e3: { backgroundColor: "#FF7A0B" },
          f2: { backgroundColor: "#FF7A0B" },
          g1: { backgroundColor: "#FF7A0B" },
          c1: { backgroundColor: "#FF7A0B" },
          d2: { backgroundColor: "#FF7A0B" },
          e3: { backgroundColor: "#FF7A0B" },
          f4: { backgroundColor: "#FF7A0B" },
          g5: { backgroundColor: "#FF7A0B" },
          h6: { backgroundColor: "#FF7A0B" },
        });
      }, 600);
      setTimeout(() => {
        setRankStyles({});
      }, 900);
      setTimeout(() => {
        setRankStyles({
          b8: { backgroundColor: "#FF7A0B" },
          c7: { backgroundColor: "#FF7A0B" },
          d6: { backgroundColor: "#FF7A0B" },
          e5: { backgroundColor: "#FF7A0B" },
          f4: { backgroundColor: "#FF7A0B" },
          g3: { backgroundColor: "#FF7A0B" },
          h2: { backgroundColor: "#FF7A0B" },
          a1: { backgroundColor: "#FF7A0B" },
          b2: { backgroundColor: "#FF7A0B" },
          c3: { backgroundColor: "#FF7A0B" },
          d4: { backgroundColor: "#FF7A0B" },
          e5: { backgroundColor: "#FF7A0B" },
          f6: { backgroundColor: "#FF7A0B" },
          g7: { backgroundColor: "#FF7A0B" },
          h8: { backgroundColor: "#FF7A0B" },
        });
      }, 900);
      setTimeout(() => {
        setRankStyles({});
      }, 1200);
      setTimeout(() => {
        setRankStyles({
          d8: { backgroundColor: "#FF7A0B" },
          e7: { backgroundColor: "#FF7A0B" },
          f6: { backgroundColor: "#FF7A0B" },
          g5: { backgroundColor: "#FF7A0B" },
          h4: { backgroundColor: "#FF7A0B" },
          a3: { backgroundColor: "#FF7A0B" },
          b4: { backgroundColor: "#FF7A0B" },
          c5: { backgroundColor: "#FF7A0B" },
          d6: { backgroundColor: "#FF7A0B" },
          e7: { backgroundColor: "#FF7A0B" },
          f8: { backgroundColor: "#FF7A0B" },
        });
      }, 1200);
      setTimeout(() => {
        setRankStyles({});
      }, 1500);
      setTimeout(() => {
        setRankStyles({
          f8: { backgroundColor: "#FF7A0B" },
          g7: { backgroundColor: "#FF7A0B" },
          h6: { backgroundColor: "#FF7A0B" },
          a5: { backgroundColor: "#FF7A0B" },
          b6: { backgroundColor: "#FF7A0B" },
          c7: { backgroundColor: "#FF7A0B" },
          d8: { backgroundColor: "#FF7A0B" },
        });
      }, 1500);
      setTimeout(() => {
        setRankStyles({});
      }, 1800);
      setTimeout(() => {
        setRankStyles({
          a7: { backgroundColor: "#FF7A0B" },
          b8: { backgroundColor: "#FF7A0B" },
        });
      }, 1800);
      setTimeout(() => {
        setRankStyles({});
        setDisabled(false);
      }, 2100);
    }

    return (
      <div className="container">
        <IntroNav />
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
            <p className="pages-text">
              {index + 1}/{sections.length}
            </p>
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
    );
  }

  function Three({ direct, pre }) {
    const chess = new Chess();
    chess.clear();

    return (
      <div className="container">
        <IntroNav />
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Board Placement</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              When placing the board on the table and before setting up the
              pieces, make sure the bottom-right corner of the board is always a
              light square.
            </p>
          </div>
          <div className="arrows-div">
            <FontAwesomeIcon
              onClick={pre}
              className="left-arrow"
              icon={faLeftLong}
            />
            <FontAwesomeIcon
              onClick={direct}
              className="right-arrow"
              icon={faRightLong}
            />
          </div>
          <div className="pages-div">
            <p className="pages-text">
              {index + 1}/{sections.length}
            </p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            position={chess.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customSquareStyles={{ h1: { backgroundColor: "#ef8989" } }}
          />
        </div>
      </div>
    );
  }

  return <>{sections[index]}</>;
}

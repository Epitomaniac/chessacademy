import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Section6() {
  const router = useRouter();
  const sections = [
    <One next={next} />,
    <Two next={next} pre={pre} />,
    <Three next={next} pre={pre} />,
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
    router.push("/lessons/intro/6");
  }

  function One({ next }) {
    const chess = new Chess("8/8/8/8/3R4/8/8/8 w - - 0 1");
    return (
      <div className="container">
        <IntroNav />
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Rook</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The rook moves in a <splan className="underline">straight</splan>{" "}
              line in every direction and as many squares as it likes to.
            </p>
            <p className="text-body">
              The board shows all the squares the rook can go to in one move.
            </p>
            <p className="text-body">
              The rook is a powerful long-range major piece.
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
            <p className="pages-text">
              {index + 1}/{sections.length}
            </p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={chess.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
            customArrowColor={"green"}
            customArrows={[
              ["e4", "h4"],
              ["d5", "d8"],
              ["c4", "a4"],
              ["d3", "d1"],
            ]}
          />
        </div>
      </div>
    );
  }

  function Two({ next, pre }) {
    const chess = new Chess("8/8/8/8/3b4/8/8/8 w - - 0 1");
    return (
      <div className="container">
        <IntroNav />
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
            <p className="pages-text">
              {index + 1}/{sections.length}
            </p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={chess.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
            customArrowColor={"green"}
            customArrows={[
              ["e5", "h8"],
              ["c5", "a7"],
              ["e3", "g1"],
              ["c3", "a1"],
            ]}
          />
        </div>
      </div>
    );
  }

  function Three({ next, pre }) {
    const chess = new Chess("5r1k/r5p1/7p/2b5/2B5/8/PP6/1K1R4 w - - 0 1");
    return (
      <div className="container">
        <IntroNav />
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
            arePiecesDraggable={false}
          />
        </div>
      </div>
    );
  }

  return <>{sections[index]}</>;
}

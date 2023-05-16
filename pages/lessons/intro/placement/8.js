import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [position, setPosition] = useState({
    a3: "wN",
    b3: "wB",
    c3: "wP",
    d3: "wP",
    e3: "wP",
    f3: "wR",
    g3: "wP",
    h3: "wP",
    a4: "wQ",
    b4: "wP",
    c4: "wB",
    d4: "wP",
    e4: "wR",
    f4: "wK",
    g4: "wN",
    h4: "wP",
    a5: "bK",
    b5: "bP",
    c5: "bP",
    d5: "bB",
    e5: "bP",
    f5: "bB",
    g5: "bP",
    h5: "bR",
    a6: "bN",
    b6: "bR",
    c6: "bP",
    d6: "bQ",
    e6: "bN",
    f6: "bP",
    g6: "bP",
    h6: "bP",
  });
  const [occupiedSquares, setOccupiedSquares] = useState([
    "a3",
    "b3",
    "c3",
    "d3",
    "e3",
    "f3",
    "g3",
    "h3",
    "a4",
    "b4",
    "c4",
    "d4",
    "e4",
    "f4",
    "g4",
    "h4",
    "a5",
    "b5",
    "c5",
    "d5",
    "e5",
    "f5",
    "g5",
    "h5",
    "a6",
    "b6",
    "c6",
    "d6",
    "e6",
    "f6",
    "g6",
    "h6",
  ]);
  const [message, setMessage] = useState("");

  function next() {
    router.push("/lessons/intro/piece-values/1");
  }

  function pre() {
    router.push("/lessons/intro/placement/7");
  }

  function movePiece(sourceSquare, targetSquare, piece) {
    const found = occupiedSquares.find(square => square === targetSquare);

    if (!found) {
      const newObj = {
        ...position,
        [targetSquare]: piece,
      };
      delete newObj[sourceSquare];
      setPosition(newObj);

      const newArr = occupiedSquares.map(square =>
        square === sourceSquare ? targetSquare : square,
      );
      setOccupiedSquares(newArr);
      return true;
    }
  }

  function done() {
    const answerObj = {
      a1: "wR",
      b1: "wN",
      c1: "wB",
      d1: "wQ",
      e1: "wK",
      f1: "wB",
      g1: "wN",
      h1: "wR",
      a2: "wP",
      b2: "wP",
      c2: "wP",
      d2: "wP",
      e2: "wP",
      f2: "wP",
      g2: "wP",
      h2: "wP",
      a8: "bR",
      b8: "bN",
      c8: "bB",
      d8: "bQ",
      e8: "bK",
      f8: "bB",
      g8: "bN",
      h8: "bR",
      a7: "bP",
      b7: "bP",
      c7: "bP",
      d7: "bP",
      e7: "bP",
      f7: "bP",
      g7: "bP",
      h7: "bP",
    };
    if (
      Object.entries(position).sort().toString() ===
      Object.entries(answerObj).sort().toString()
    ) {
      setMessage("Good job :)");
    } else {
      setMessage(":( Keep trying");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  }

  return (
    <div className="flex">
      <IntroNav highlight2={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Starting Position</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Can you set the starting position now?</p>
            <p className="text-body">
              Click the button after you're finished setting up the pieces.
            </p>
            <div className="lesson-btn-div">
              <button onClick={done} className="lesson-btn">
                Done
              </button>
            </div>
            {message && <p className="text-body">{message}</p>}
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
            <p className="pages-text">8/8</p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            position={position}
            onPieceDrop={movePiece}
          />
        </div>
      </div>
    </div>
  );
}

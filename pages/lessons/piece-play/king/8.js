import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import PiecePlayNav from "@/components/PiecePlayNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/8/8/8/8/8/R3K3 w - - 0 1"));
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(true);
  const [message, setMessage] = useState("");
  const [rookDraggable, setRookDraggable] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [position, setPosition] = useState({
    e1: "wK",
    a1: "wR",
  });
  const [occupiedSquares, setOccupiedSquares] = useState(["e1", "a1"]);

  function next() {
    router.push("/lessons/piece-play/king/9");
  }

  function pre() {
    router.push("/lessons/piece-play/king/7");
  }

  function movePiece(sourceSquare, targetSquare, piece) {
    const found = occupiedSquares.find(square => square === targetSquare);

    if (piece == "wK") {
      if (!found) {
        const newObj = {
          ...position,
          [targetSquare]: piece,
        };
        delete newObj[sourceSquare];
        setPosition(newObj);
        setRookDraggable(true);

        const newArr = occupiedSquares.map(square =>
          square === sourceSquare ? targetSquare : square,
        );
        setOccupiedSquares(newArr);
        return true;
      }
    }

    if (piece == "wR") {
      if (!found && rookDraggable) {
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
  }
  function done() {
    const answerObj = {
      c1: "wK",
      d1: "wR",
    };
    if (
      Object.entries(position).sort().toString() ===
      Object.entries(answerObj).sort().toString()
    ) {
      setMessage("Good job!");
      setDisabled(true);
    } else {
      setMessage("Keep trying");
      setPosition({
        e1: "wK",
        a1: "wR",
      });
      setOccupiedSquares(["e1", "h1"]);
      setRookDraggable(false);
      setTimeout(() => {
        setMessage("");
      }, 1200);
    }
  }

  function castle() {
    setDraggable(false);
    setRookDraggable(false);
    setPosition({
      c1: "wK",
      d1: "wR",
    });
    setTimeout(() => {
      setPosition({
        e1: "wK",
        a1: "wR",
      });
      setDraggable(true);
    }, 1500);
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight6={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Long Castling</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Long castling is done by moving the king two squares towards the
              rook that is further to the king while placing the rook over and
              to the other side of the king. All of this is done in one move!
            </p>
            <button disabled={disabled} onClick={castle} className="lesson-btn">
              Long Castle
            </button>
            <div className="flex">
              <p className="text-body">Go ahead and castle long.</p>
              <button
                style={{ margin: "5px 0px" }}
                onClick={done}
                className="lesson-btn"
              >
                Done
              </button>
              <p className="text-body">{message}</p>
            </div>
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
            <p className="pages-text">8/13</p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            position={position}
            onPieceDrop={movePiece}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

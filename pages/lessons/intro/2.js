import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const sections = [
    <One next={next} />,
    <Two next={next} pre={pre} />,
    <Three next={next} pre={pre} />,
    <Four next={next} pre={pre} />,
    <Five next={next} pre={pre} />,
    <Six next={next} pre={pre} />,
    <Seven next={next} pre={pre} />,
    <Eight direct={direct} pre={pre} />,
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
    const chess = new Chess();
    chess.clear();

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Start</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Each side begins the game with 16 pieces; 1 king, 1 queen, 2
              rooks, 2 bishops, 2 knights, and 8 pawns.
            </p>
            <p className="text-body">
              One side has the white pieces and the other the black pieces.
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
        <div className="board">
          <Chessboard
            position={chess.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
          />
        </div>
      </div>
    );
  }

  function Two({ next, pre }) {
    const chess = new Chess();
    chess.clear();
    const [fen, setFen] = useState(chess.fen());

    function placeRooks() {
      setFen("r6r/8/8/8/8/8/8/R6R w - - 0 1");
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Rook</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">This is the rook:</p>
            <p className="text-body">
              <Image
                alt="white rook"
                width={45}
                height={45}
                src="/white_rook.svg"
              ></Image>
              <Image
                alt="black rook"
                width={45}
                height={45}
                src="/black_rook.svg"
              ></Image>
            </p>
            <p className="text-body">
              Rooks are placed at the corners for each side.
            </p>
            <button onClick={placeRooks} className="lesson-btn">
              Place rooks
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
            position={fen}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    );
  }

  function Three({ next, pre }) {
    const chess = new Chess();
    const [fen, setFen] = useState("r6r/8/8/8/8/8/8/R6R w - - 0 1");

    function placeKnights() {
      setFen("rn4nr/8/8/8/8/8/8/RN4NR w - - 0 1");
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Knight</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">This is the knight:</p>
            <p className="text-body">
              <Image
                alt="white knight"
                width={45}
                height={45}
                src="/white_knight.svg"
              ></Image>
              <Image
                alt="black knight"
                width={45}
                height={45}
                src="/black_knight.svg"
              ></Image>
            </p>
            <p className="text-body">
              Knights are placed beside the rooks (second square from the side).
            </p>
            <button onClick={placeKnights} className="lesson-btn">
              Place knights
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
            position={fen}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    );
  }

  function Four({ next, pre }) {
    const chess = new Chess();
    const [fen, setFen] = useState("rn4nr/8/8/8/8/8/8/RN4NR w - - 0 1");

    function placeBishops() {
      setFen("rnb2bnr/8/8/8/8/8/8/RNB2BNR w - - 0 1");
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Bishop</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">This is the bishop:</p>
            <p className="text-body">
              <Image
                alt="white bishop"
                width={45}
                height={45}
                src="/white_bishop.svg"
              ></Image>
              <Image
                alt="black bishop"
                width={45}
                height={45}
                src="/black_bishop.svg"
              ></Image>
            </p>
            <p className="text-body">
              Bishops are placed beside the knights (third square from the
              side).
            </p>
            <button onClick={placeBishops} className="lesson-btn">
              Place bishops
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
            position={fen}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    );
  }

  function Five({ next, pre }) {
    const chess = new Chess();
    const [fen, setFen] = useState("rnb2bnr/8/8/8/8/8/8/RNB2BNR w - - 0 1");

    function placeQueens() {
      setFen("rnbq1bnr/8/8/8/8/8/8/RNBQ1BNR w - - 0 1");
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Queen</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">This is the queen:</p>
            <p className="text-body">
              <Image
                alt="white queen"
                width={45}
                height={45}
                src="/white_queen.svg"
              ></Image>
              <Image
                alt="black queen"
                width={45}
                height={45}
                src="/black_queen.svg"
              ></Image>
            </p>
            <p className="text-body">
              The queen is placed beside the bishop on the square with the same
              color as the piece. So a white queen is placed on a light square,
              while a black queen is placed on a dark square.
            </p>
            <button
              style={{ marginTop: "0px" }}
              onClick={placeQueens}
              className="lesson-btn"
            >
              Place the queen
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
            position={fen}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    );
  }

  function Six({ next, pre }) {
    const chess = new Chess();
    const [fen, setFen] = useState("rnbq1bnr/8/8/8/8/8/8/RNBQ1BNR w - - 0 1");

    function placeKings() {
      setFen("rnbqkbnr/8/8/8/8/8/8/RNBQKBNR w - - 0 1");
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The King</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">This is the king:</p>
            <p className="text-body">
              <Image
                alt="white king"
                width={45}
                height={45}
                src="/white_king.svg"
              ></Image>
              <Image
                alt="black king"
                width={45}
                height={45}
                src="/black_king.svg"
              ></Image>
            </p>
            <p style={{ paddingTop: "0" }} className="text-body">
              The king is placed beside the bishop on the square that has the
              opposite color as the piece. So a white king is placed on a dark
              square, while a black king is placed on a light square.
            </p>
            <button
              style={{ marginTop: "0" }}
              onClick={placeKings}
              className="lesson-btn"
            >
              Place the king
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
            position={fen}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    );
  }

  function Seven({ next, pre }) {
    const chess = new Chess();
    const [fen, setFen] = useState("rnbqkbnr/8/8/8/8/8/8/RNBQKBNR w - - 0 1");
    const [message, setMessage] = useState(false);
    function placePawns() {
      setFen();
      setTimeout(() => {
        setMessage(true);
      }, 500);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Pawn</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">This is the pawn:</p>
            <p className="text-body">
              <Image
                alt="white pawn"
                width={45}
                height={45}
                src="/white_pawn.svg"
              ></Image>
              <Image
                alt="black pawn"
                width={45}
                height={45}
                src="/black_pawn.svg"
              ></Image>
            </p>
            <p className="text-body">
              The pawns are placed next to each other on the rank that is in
              front of the pieces.
            </p>
            <button onClick={placePawns} className="lesson-btn">
              Place the pawns
            </button>
            {message && (
              <p className="text-body">
                There you go! Now all the pieces are placed.
              </p>
            )}
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
            position={fen}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    );
  }

  function Eight({ direct, pre }) {
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
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            position={position}
            onPieceDrop={movePiece}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <IntroNav highlight2={true} />
      {sections[index]}
    </div>
  );
}

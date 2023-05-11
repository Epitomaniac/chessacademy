import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

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
    <Eight next={next} pre={pre} />,
    <Nine next={next} pre={pre} />,
    <Ten next={next} pre={pre} />,
    <Eleven direct={direct} pre={pre} />,
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
            customSquareStyles={{
              d5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              e4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              f4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              g4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              h4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              c4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              b4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              a4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
            }}
          />
        </div>
      </div>
    );
  }

  function Two({ next, pre }) {
    const chess = new Chess("8/8/8/8/3b4/8/8/8 w - - 0 1");
    return (
      <div className="container">
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
            customSquareStyles={{
              e5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              f6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              g7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              h8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              c3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              b2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              a1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              c5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              b6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              a7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              e3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              f2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              g1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
            }}
          />
        </div>
      </div>
    );
  }

  function Three({ next, pre }) {
    const chess = new Chess("3r4/6k1/3b1p2/8/2B5/8/8/K7 w - - 0 1");
    return (
      <div className="container">
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

  function Four({ next, pre }) {
    const chess = new Chess("8/8/8/8/4N3/8/8/8 w - - 0 1");
    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Knight</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The knight moves two squares forward and one square to the side,
              or one square forward and two squares to the side, in every
              direction, kind of like a capital letter "L".
            </p>
            <p className="text-body">
              The board shows all the squares the knight can go to in one move.
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
            customSquareStyles={{
              f6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              c5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              c3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              f2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              g3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              g5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
            }}
          />
        </div>
      </div>
    );
  }

  function Five({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/8/8/2PPPPP1/4N3/8/8 w - - 0 1"),
    );
    const [jumped, setJumped] = useState(false);

    function jump() {
      if (!jumped) {
        game.move("Nd5");
        setJumped(true);
        setGame(game => {
          return { ...game };
        });
      }
      if (jumped) {
        game.undo();
        setJumped(false);
        setGame(game => {
          return { ...game };
        });
      }
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Knight</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Apart from its unique movement, the knight is also unique in that
              it's the only piece that can jump over other pieces.
            </p>
            <button onClick={jump} className="lesson-btn">
              Jump
            </button>
            <p className="text-body">
              The knight is a versatile short-range minor piece.
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
            position={game.fen()}
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
    const chess = new Chess("8/8/8/8/3Q4/8/8/8 w - - 0 1");
    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Queen</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The queen can move both in a straight line and diagonally in every
              direction and as many squares as it likes to.
            </p>
            <p className="text-body">
              The board shows all the squares the queen can go to in one move.
            </p>
            <p className="text-body">
              Because of this freedom of movement, the queen is the most
              powerful piece on the board.
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
            customSquareStyles={{
              d5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              e4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              f4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              g4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              h4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              c4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              b4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              a4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              e5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              f6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              g7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              h8: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              c3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              b2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              a1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              c5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              b6: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              a7: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              e3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              f2: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              g1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
            }}
          />
        </div>
      </div>
    );
  }

  function Seven({ next, pre }) {
    const chess = new Chess("8/8/8/8/3k4/8/8/8 w - - 0 1");
    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The King</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The King can move both in a straight line and diagonally in every
              direction, but only <span className="underline">one</span> square.
            </p>
            <p className="text-body">
              The board shows all the squares the king can go to in one move.
            </p>
            <p className="text-body">
              The king can be a useful short-range support piece, but you should
              always think about its safety before moving it.
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
            customSquareStyles={{
              d5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              e4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              d3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              c4: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              e5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              c3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              c5: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
              e3: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
            }}
          />
        </div>
      </div>
    );
  }

  function Eight({ next, pre }) {
    const [game, setGame] = useState(new Chess("8/8/8/8/4P3/8/8/8 w - - 0 1"));

    function moveOne() {
      game.move("e5");
      setGame({ ...game });
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Pawn</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Normally, the pawn can only move one square forward.
            </p>
            <button onClick={moveOne} className="lesson-btn">
              Move
            </button>
            <p className="text-body">
              Unlike other pieces, the pawn never moves backwards, so be careful
              when moving your pawns.
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
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    );
  }

  function Nine({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/2p5/8/8/8/8/4P3/8 w - - 0 1"),
    );
    const [visible, setVisible] = useState(false);

    function moveTwo() {
      game.move("e4");
      setGame({ ...game });
      setVisible(true);
    }

    function moveOne() {
      game.move("c6");
      setGame({ ...game });
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Pawn</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              However, the pawn has the option to move two squares forward if it
              is on the square where it first started the game with (if it
              hasn't moved before).
            </p>
            <button onClick={moveTwo} className="lesson-btn">
              Move two squares
            </button>
            {visible && (
              <button onClick={moveOne} className="lesson-btn">
                Move one square
              </button>
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
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    );
  }

  function Ten({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/8/8/4r3/3P4/8/8 w - - 0 1"),
    );

    function capture() {
      game.move("dxe4");
      setGame({ ...game });
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Pawn</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The pawn is the only piece that captures differently from how it
              moves. It can only capture diagonally.
            </p>
            <button onClick={capture} className="lesson-btn">
              Capture
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
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    );
  }

  function Eleven({ direct, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/8/2rpr3/3P4/2n1n3/8/8 w - - 0 1"),
    );

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Pawn</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The pawn cannot capture in a straight line. It also cannot capture
              backwards.
            </p>
            <p className="text-body">
              In this position the pawn can capture either of the rooks, but
              cannot capture the black pawn or the knights.
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
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
            customArrows={[
              ["d4", "e5"],
              ["d4", "c5"],
            ]}
            customArrowColor={"rgba(0, 255, 0, 0.5)"}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <IntroNav highlight5={true} />
      {sections[index]}
    </div>
  );
}

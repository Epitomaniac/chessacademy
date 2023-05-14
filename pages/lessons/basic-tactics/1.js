import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import TacticsNav from "@/components/TacticsNav";
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
    router.push("/lessons/basic-tactics/2");
  }

  function One({ next }) {
    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Tactics</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              In the previous lesson, you became familiar with some common
              checkmate positions and methods. Checkmate is a{" "}
              <strong>tactical</strong> theme.
            </p>
            <p className="text-body">
              In chess, <strong>tactics</strong> happen when pieces are in
              direct confrontation with each other. A tactic is a sequence of
              moves that leads to one side making immediate threats and gains,
              like checkmate, winning a piece, etc.
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
      </div>
    );
  }

  function Two({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/5R2/2Q5/4n3/8/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([
      ["e4", "f6"],
      ["e4", "c5"],
    ]);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Fork</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The first tactical theme we are going to learn is the{" "}
              <strong>fork</strong>. A fork, like the name suggests, is a tactic
              in which a piece attacks two or more pieces at the same time.
            </p>
            <p className="text-body">
              Here black has forked the queen and the rook. White is forced to
              lose one of its pieces.
            </p>
            <p className="text-body">
              All pieces (including pawns) are able to fork.
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
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
          />
        </div>
      </div>
    );
  }

  function Three({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("3q3k/7p/7N/8/3p4/7P/6P1/7K w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [clickable, setClickable] = useState(true);
    const [draggable, setDraggable] = useState(true);
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Nf7+") {
        setGame({ ...game });
        setMessage1(
          "Nice! Forks are especially powerful when the king is also attacked. Here white has forked both the king and the queen, which makes a royal fork! The queen is lost.",
        );
        setMessage2(
          "Knights are expert at forks, since they can attack up to 8 pieces at the same time!",
        );
        setArrows([
          ["f7", "d8"],
          ["f7", "h8"],
        ]);
        setDraggable(false);
        setClickable(false);
        return true;
      } else {
        setGame({ ...game });
        setMessage1("Wrong move, try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage1("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
        }, 800);
        return true;
      }
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Fork</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">White's move, Can you win a piece?</p>
            <p className="text-body">{message1}</p>
            <p className="text-body">{message2}</p>
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
        <div
          style={!clickable ? { pointerEvents: "none" } : null}
          className="board"
        >
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            onPieceDrop={makeMove}
          />
        </div>
      </div>
    );
  }

  function Four({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/2K3R1/8/8/8/8/8/4q2k b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [clickable, setClickable] = useState(true);
    const [draggable, setDraggable] = useState(true);
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [moves, setMoves] = useState(["Qc3+", "Qe5+"]);
    const [visible, setVisible] = useState(false);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });

      if (move == null) return false;

      if (moves.includes(move.san) && moves.length == 2) {
        if (move.san == "Qc3+") {
          setGame({ ...game });
          setMessage1("Good job! Can you find the other fork?");
          setVisible(true);
          setMoves(["Qe5+"]);
          setDraggable(false);
          setClickable(false);
          return true;
        } else if (move.san == "Qe5+") {
          setGame({ ...game });
          setMessage1("Good job! Can you find the other fork?");
          setVisible(true);
          setMoves(["Qc3+"]);
          setDraggable(false);
          setClickable(false);
          return true;
        }
      }
      if (moves.includes(move.san) && moves.length == 1) {
        setGame({ ...game });
        setMessage2("Excellent work :)");
        setDraggable(false);
        setClickable(false);
        return true;
      }
      if (move.san == "Qe7+") {
        setGame({ ...game });
        setMessage1("Yes, it's a fork but you lost your queen :(");
        setDraggable(false);
        setClickable(false);
        setTimeout(() => {
          game.move("Rxe7");
          setGame({ ...game });
          setVisible(true);
        }, 1000);
        return true;
      }
      if (move.san == "Qg3+") {
        setGame({ ...game });
        setMessage1("Yes, it's a fork but you lost your queen :(");
        setDraggable(false);
        setClickable(false);
        setTimeout(() => {
          game.move("Rxg3");
          setGame({ ...game });
          setVisible(true);
        }, 1000);
        return true;
      } else {
        setGame({ ...game });
        setMessage1("Wrong move, try again");
        setDraggable(false);
        setVisible(true);
        return true;
      }
    }

    function tryAgain() {
      setGame(new Chess("8/2K3R1/8/8/8/8/8/4q2k b - - 0 1"));
      setMessage1("");
      setDraggable(true);
      setClickable(true);
      setVisible(false);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Fork</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Black to move and win a piece:</p>
            <p className="text-body">{message1}</p>
            {visible && (
              <button onClick={tryAgain} className="lesson-btn">
                Try again
              </button>
            )}
            <p className="text-body">{message2}</p>
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
        <div
          style={!clickable ? { pointerEvents: "none" } : null}
          className="board"
        >
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            onPieceDrop={makeMove}
          />
        </div>
      </div>
    );
  }

  function Five({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("1k4r1/1pp2p1p/p4p1N/2b1p3/4P1P1/P1P2P2/1P5P/2KR4 b - - 1 22"),
    );
    const [arrows, setArrows] = useState([]);
    const [clickable, setClickable] = useState(true);
    const [draggable, setDraggable] = useState(true);
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Be3+") {
        setGame({ ...game });
        setMessage1("Good!");
        setArrows([
          ["e3", "h6"],
          ["e3", "c1"],
        ]);
        setDraggable(false);
        setClickable(false);
        return true;
      } else {
        setGame({ ...game });
        setMessage1("Wrong move, try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage1("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
        }, 800);
        return true;
      }
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Fork</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Black to move:</p>
            <p className="text-body">{message1}</p>
            <p className="text-body">{message2}</p>
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
        <div
          style={!clickable ? { pointerEvents: "none" } : null}
          className="board"
        >
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            onPieceDrop={makeMove}
            boardOrientation={"black"}
          />
        </div>
      </div>
    );
  }

  function Six({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("3rk3/3n1p1p/pp2p1p1/8/3RPN2/1P3P1P/1PP3P1/5K2 b - - 5 29"),
    );
    const [arrows, setArrows] = useState([]);
    const [clickable, setClickable] = useState(true);
    const [draggable, setDraggable] = useState(true);
    const [message1, setMessage1] = useState("");

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "e5") {
        setGame({ ...game });
        setMessage1("Nice!");
        setArrows([
          ["e5", "f4"],
          ["e5", "d4"],
        ]);
        setDraggable(false);
        setClickable(false);
        return true;
      } else {
        setGame({ ...game });
        setMessage1("Wrong move, try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage1("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
        }, 800);
        return true;
      }
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Fork</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Black to move:</p>
            <p className="text-body">{message1}</p>
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
        <div
          style={!clickable ? { pointerEvents: "none" } : null}
          className="board"
        >
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            onPieceDrop={makeMove}
            boardOrientation={"black"}
          />
        </div>
      </div>
    );
  }

  function Seven({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/2q4k/8/3b2p1/4RPP1/6K1/8/4R3 w - - 2 58"),
    );
    const [arrows, setArrows] = useState([]);
    const [clickable, setClickable] = useState(true);
    const [draggable, setDraggable] = useState(true);
    const [message1, setMessage1] = useState("");

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Re7+") {
        setGame({ ...game });
        setMessage1(
          "The rook is supported by the other rook; white loses a rook but wins a queen!",
        );
        setArrows([
          ["e7", "c7"],
          ["e7", "h7"],
          ["e1", "e7"],
        ]);
        setDraggable(false);
        setClickable(false);
        return true;
      } else {
        setGame({ ...game });
        setMessage1("Wrong move, try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage1("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
        }, 800);
        return true;
      }
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Fork</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">White's turn:</p>
            <p className="text-body">{message1}</p>
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
        <div
          style={!clickable ? { pointerEvents: "none" } : null}
          className="board"
        >
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            onPieceDrop={makeMove}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Eight({ direct, pre }) {
    const [game, setGame] = useState(
      new Chess("1r6/1p3k2/2n5/p4NRP/8/8/6P1/6K1 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [clickable, setClickable] = useState(true);
    const [draggable, setDraggable] = useState(true);
    const [message1, setMessage1] = useState("");

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Kf6") {
        setGame({ ...game });
        setMessage1("Kings can fork too!");
        setArrows([
          ["f6", "g5"],
          ["f6", "f5"],
        ]);
        setDraggable(false);
        setClickable(false);
        return true;
      } else {
        setGame({ ...game });
        setMessage1("Wrong move, try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage1("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
        }, 800);
        return true;
      }
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Fork</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Black to move:</p>
            <p className="text-body">{message1}</p>
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
        <div
          style={!clickable ? { pointerEvents: "none" } : null}
          className="board"
        >
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            onPieceDrop={makeMove}
            boardOrientation={"black"}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <TacticsNav highlight1={true} />
      {sections[index]}
    </div>
  );
}

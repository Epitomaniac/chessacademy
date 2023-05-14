import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import TacticsNav from "@/components/TacticsNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const sections = [
    <One next={next} />,
    <Two next={next} pre={pre} start={start} />,
    <Three next={next} pre={pre} />,
    <Four next={next} pre={pre} />,
    <Five next={next} pre={pre} />,
    <Six next={next} pre={pre} />,
    <Seven next={next} pre={pre} />,
    <Eight next={next} pre={pre} />,
    <Nine next={next} pre={pre} />,
    <Ten next={next} pre={pre} />,
    <Eleven next={next} pre={pre} />,
    <Twelve direct={direct} pre={pre} />,
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
    router.push("/lessons/pieceplay/1");
  }

  function start() {
    setIndex(2);
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
            <p className="pages-text">
              {index + 1}/{sections.length}
            </p>
          </div>
        </div>
      </div>
    );
  }

  function Two({ next, pre, start }) {
    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Tactics</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Remember, in an actual game you're not allowed to undo your moves.
              So be patient and don't move a piece until you see the solution in
              your mind.
            </p>
            <p className="text-body">Good luck!</p>
            <button onClick={start} className="lesson-btn">
              Start the test
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
      </div>
    );
  }

  function Three({ next, pre }) {
    const [game, setGame] = useState(
      new Chess(
        "r2qr1k1/pp3ppp/2pb1p2/4n3/3P2b1/1P3NP1/PBP2PBP/R2QR1K1 b - - 0 12",
      ),
    );
    const [draggable, setDraggable] = useState(true);
    const [clickable, setClickable] = useState(true);
    const [message, setMessage] = useState("");
    const [moveNumber, setMoveNumber] = useState(1);
    const [attempts, setAttempts] = useState(0);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Nxf3+") {
        setGame({ ...game });
        setDraggable(false);
        setTimeout(() => {
          game.move("Bxf3");
          setGame({ ...game });
          setMoveNumber(2);
          setDraggable(true);
        }, 500);
        return true;
      }
      if (move.san == "Rxe1+" && moveNumber == 2) {
        setGame({ ...game });
        setDraggable(false);
        setTimeout(() => {
          game.move("Qxe1");
          setGame({ ...game });
          setMoveNumber(3);
          setDraggable(true);
        }, 500);
        return true;
      }
      if (move.san == "Bxf3" && moveNumber == 3) {
        setGame({ ...game });
        setDraggable(false);
        setMessage("Correct!");
        setAttempts(0);
      } else {
        setGame({ ...game });
        setMessage("Wrong move, try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
          setAttempts(attempts => attempts + 1);
        }, 800);
        return true;
      }
    }

    function showAnswer() {
      setAttempts(0);
      setClickable(false);
      setDraggable(false);
      game.load(
        "r2qr1k1/pp3ppp/2pb1p2/4n3/3P2b1/1P3NP1/PBP2PBP/R2QR1K1 b - - 0 12",
      );
      setTimeout(() => {
        game.move("Nxf3+");
        setGame({ ...game });
      }, 1000);
      setTimeout(() => {
        game.move("Bxf3");
        setGame({ ...game });
      }, 1500);
      setTimeout(() => {
        game.move("Rxe1+");
        setGame({ ...game });
      }, 2000);
      setTimeout(() => {
        game.move("Qxe1");
        setGame({ ...game });
      }, 2500);
      setTimeout(() => {
        game.move("Bxf3");
        setGame({ ...game });
      }, 3000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Puzzle #1</h2>
          </div>
          <div className="text-body-div">
            <div style={{ justifyContent: "space-between" }} className="flex">
              <p className="text-body">Black to move:</p>
              {attempts >= 3 && (
                <button
                  onClick={showAnswer}
                  style={{ marginTop: "5px" }}
                  className="lesson-btn"
                >
                  Show answer
                </button>
              )}
            </div>
            <p className="text-body">{message}</p>
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
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={[]}
            customSquareStyles={{}}
            arePiecesDraggable={draggable}
            onPieceDrop={makeMove}
            boardOrientation={"black"}
          />
        </div>
      </div>
    );
  }

  function Four({ next, pre }) {
    const [game, setGame] = useState(
      new Chess(
        "7k/1p4b1/p1p2r1p/1PP1pq2/P2p2p1/3Pn1P1/RQ4PP/2N1R1K1 b - - 3 34",
      ),
    );
    const [draggable, setDraggable] = useState(true);
    const [clickable, setClickable] = useState(true);
    const [message, setMessage] = useState("");
    const [moveNumber, setMoveNumber] = useState(1);
    const [attempts, setAttempts] = useState(0);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Qf1+") {
        setGame({ ...game });
        setDraggable(false);
        setTimeout(() => {
          game.move("Rxf1");
          setGame({ ...game });
          setMoveNumber(2);
          setDraggable(true);
        }, 500);
        return true;
      }
      if (move.san == "Rxf1#" && moveNumber == 2) {
        setGame({ ...game });
        setDraggable(false);
        setMessage("Correct!");
        setAttempts(0);
      } else {
        setGame({ ...game });
        setMessage("Wrong move, try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
          setAttempts(attempts => attempts + 1);
        }, 800);
        return true;
      }
    }

    function showAnswer() {
      setAttempts(0);
      setClickable(false);
      setDraggable(false);
      game.load(
        "7k/1p4b1/p1p2r1p/1PP1pq2/P2p2p1/3Pn1P1/RQ4PP/2N1R1K1 b - - 3 34",
      );
      setTimeout(() => {
        game.move("Qf1+");
        setGame({ ...game });
      }, 1000);
      setTimeout(() => {
        game.move("Rxf1");
        setGame({ ...game });
      }, 1500);
      setTimeout(() => {
        game.move("Rxf1#");
        setGame({ ...game });
      }, 2000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Puzzle #2</h2>
          </div>
          <div className="text-body-div">
            <div style={{ justifyContent: "space-between" }} className="flex">
              <p className="text-body">Black to move:</p>
              {attempts >= 3 && (
                <button
                  onClick={showAnswer}
                  style={{ marginTop: "5px" }}
                  className="lesson-btn"
                >
                  Show answer
                </button>
              )}
            </div>
            <p className="text-body">{message}</p>
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
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={[]}
            customSquareStyles={{}}
            arePiecesDraggable={draggable}
            onPieceDrop={makeMove}
            boardOrientation={"black"}
          />
        </div>
      </div>
    );
  }

  function Five({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/4p3/k3bpBp/PR5P/4K3/7r/8 w - - 2 61"),
    );
    const [draggable, setDraggable] = useState(true);
    const [clickable, setClickable] = useState(true);
    const [message, setMessage] = useState("");
    const [moveNumber, setMoveNumber] = useState(1);
    const [attempts, setAttempts] = useState(0);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Rb5+") {
        setGame({ ...game });
        setDraggable(false);
        setTimeout(() => {
          game.move("Kxa4");
          setGame({ ...game });
          setMoveNumber(2);
          setDraggable(true);
        }, 500);
        return true;
      }
      if (move.san == "Rxe5" && moveNumber == 2) {
        setGame({ ...game });
        setDraggable(false);
        setMessage("Correct!");
        setAttempts(0);
      } else {
        setGame({ ...game });
        setMessage("Wrong move, try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
          setAttempts(attempts => attempts + 1);
        }, 800);
        return true;
      }
    }

    function showAnswer() {
      setAttempts(0);
      setClickable(false);
      setDraggable(false);
      game.load("8/8/4p3/k3bpBp/PR5P/4K3/7r/8 w - - 2 61");
      setTimeout(() => {
        game.move("Rb5+");
        setGame({ ...game });
      }, 1000);
      setTimeout(() => {
        game.move("Kxa4");
        setGame({ ...game });
      }, 1500);
      setTimeout(() => {
        game.move("Rxe5");
        setGame({ ...game });
      }, 2000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Puzzle #3</h2>
          </div>
          <div className="text-body-div">
            <div style={{ justifyContent: "space-between" }} className="flex">
              <p className="text-body">White to move:</p>
              {attempts >= 3 && (
                <button
                  onClick={showAnswer}
                  style={{ marginTop: "5px" }}
                  className="lesson-btn"
                >
                  Show answer
                </button>
              )}
            </div>
            <p className="text-body">{message}</p>
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
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={[]}
            customSquareStyles={{}}
            arePiecesDraggable={draggable}
            onPieceDrop={makeMove}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Six({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("r3kb1r/pb3ppp/8/2pR4/8/4P1P1/PPP4P/2K2B1R w kq - 1 16"),
    );
    const [draggable, setDraggable] = useState(true);
    const [clickable, setClickable] = useState(true);
    const [message, setMessage] = useState("");
    const [moveNumber, setMoveNumber] = useState(1);
    const [attempts, setAttempts] = useState(0);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Bb5+") {
        setGame({ ...game });
        setDraggable(false);
        setTimeout(() => {
          game.move("Ke7");
          setGame({ ...game });
          setMoveNumber(2);
          setDraggable(true);
        }, 500);
        return true;
      }
      if (move.san == "Rd7+") {
        setGame({ ...game });
        setDraggable(false);
        setTimeout(() => {
          game.move("Ke6");
          setGame({ ...game });
          setMoveNumber(3);
          setDraggable(true);
        }, 500);
        return true;
      }
      if (move.san == "Rxb7" && moveNumber == 3) {
        setGame({ ...game });
        setDraggable(false);
        setMessage("Correct!");
        setAttempts(0);
      } else {
        setGame({ ...game });
        setMessage("Wrong move, try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
          setAttempts(attempts => attempts + 1);
        }, 800);
        return true;
      }
    }

    function showAnswer() {
      setAttempts(0);
      setClickable(false);
      setDraggable(false);
      game.load("r3kb1r/pb3ppp/8/2pR4/8/4P1P1/PPP4P/2K2B1R w kq - 1 16");
      setTimeout(() => {
        game.move("Bb5+");
        setGame({ ...game });
      }, 1000);
      setTimeout(() => {
        game.move("Ke7");
        setGame({ ...game });
      }, 1500);
      setTimeout(() => {
        game.move("Rd7+");
        setGame({ ...game });
      }, 2000);
      setTimeout(() => {
        game.move("Ke6");
        setGame({ ...game });
      }, 2500);
      setTimeout(() => {
        game.move("Rxb7");
        setGame({ ...game });
      }, 3000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Puzzle #4</h2>
          </div>
          <div className="text-body-div">
            <div style={{ justifyContent: "space-between" }} className="flex">
              <p className="text-body">White to move:</p>
              {attempts >= 3 && (
                <button
                  onClick={showAnswer}
                  style={{ marginTop: "5px" }}
                  className="lesson-btn"
                >
                  Show answer
                </button>
              )}
            </div>
            <p className="text-body">{message}</p>
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
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={[]}
            customSquareStyles={{}}
            arePiecesDraggable={draggable}
            onPieceDrop={makeMove}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Seven({ next, pre }) {
    const [game, setGame] = useState(
      new Chess(
        "r1b1rnk1/pp2b2p/1q4p1/3pPB2/3Q1P2/5NN1/PP3K1P/R1B3R1 b - - 0 18",
      ),
    );
    const [draggable, setDraggable] = useState(true);
    const [clickable, setClickable] = useState(true);
    const [message, setMessage] = useState("");
    const [moveNumber, setMoveNumber] = useState(1);
    const [attempts, setAttempts] = useState(0);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Bc5") {
        setGame({ ...game });
        setDraggable(false);
        setTimeout(() => {
          game.move("Be3");
          setGame({ ...game });
          setMoveNumber(2);
          setDraggable(true);
        }, 500);
        return true;
      }
      if (move.san == "Bxd4" && moveNumber == 2) {
        setGame({ ...game });
        setDraggable(false);
        setMessage("Correct!");
        setAttempts(0);
      } else {
        setGame({ ...game });
        setMessage("Wrong move, try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
          setAttempts(attempts => attempts + 1);
        }, 800);
        return true;
      }
    }

    function showAnswer() {
      setAttempts(0);
      setClickable(false);
      setDraggable(false);
      game.load(
        "r1b1rnk1/pp2b2p/1q4p1/3pPB2/3Q1P2/5NN1/PP3K1P/R1B3R1 b - - 0 18",
      );
      setTimeout(() => {
        game.move("Bc5");
        setGame({ ...game });
      }, 1000);
      setTimeout(() => {
        game.move("Be3");
        setGame({ ...game });
      }, 1500);
      setTimeout(() => {
        game.move("Bxd4");
        setGame({ ...game });
      }, 2000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Puzzle #5</h2>
          </div>
          <div className="text-body-div">
            <div style={{ justifyContent: "space-between" }} className="flex">
              <p className="text-body">Black to move:</p>
              {attempts >= 3 && (
                <button
                  onClick={showAnswer}
                  style={{ marginTop: "5px" }}
                  className="lesson-btn"
                >
                  Show answer
                </button>
              )}
            </div>
            <p className="text-body">{message}</p>
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
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={[]}
            customSquareStyles={{}}
            arePiecesDraggable={draggable}
            onPieceDrop={makeMove}
            boardOrientation={"black"}
          />
        </div>
      </div>
    );
  }

  function Eight({ next, pre }) {
    const [game, setGame] = useState(
      new Chess(
        "r1q1k2r/ppp2ppb/3p1b1p/3P3P/2n1PNP1/2N1B3/PPQ5/2KR2R1 w kq - 0 25",
      ),
    );
    const [draggable, setDraggable] = useState(true);
    const [clickable, setClickable] = useState(true);
    const [message, setMessage] = useState("");
    const [moveNumber, setMoveNumber] = useState(1);
    const [attempts, setAttempts] = useState(0);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Qa4+") {
        setGame({ ...game });
        setDraggable(false);
        setTimeout(() => {
          game.move("Qd7");
          setGame({ ...game });
          setMoveNumber(2);
          setDraggable(true);
        }, 500);
        return true;
      }
      if (move.san == "Qxc4" && moveNumber == 2) {
        setGame({ ...game });
        setDraggable(false);
        setMessage("Correct!");
        setAttempts(0);
      } else {
        setGame({ ...game });
        setMessage("Wrong move, try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
          setAttempts(attempts => attempts + 1);
        }, 800);
        return true;
      }
    }

    function showAnswer() {
      setAttempts(0);
      setClickable(false);
      setDraggable(false);
      game.load(
        "r1q1k2r/ppp2ppb/3p1b1p/3P3P/2n1PNP1/2N1B3/PPQ5/2KR2R1 w kq - 0 25",
      );
      setTimeout(() => {
        game.move("Qa4+");
        setGame({ ...game });
      }, 1000);
      setTimeout(() => {
        game.move("Qd7");
        setGame({ ...game });
      }, 1500);
      setTimeout(() => {
        game.move("Qxc4");
        setGame({ ...game });
      }, 2000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Puzzle #6</h2>
          </div>
          <div className="text-body-div">
            <div style={{ justifyContent: "space-between" }} className="flex">
              <p className="text-body">White to move:</p>
              {attempts >= 3 && (
                <button
                  onClick={showAnswer}
                  style={{ marginTop: "5px" }}
                  className="lesson-btn"
                >
                  Show answer
                </button>
              )}
            </div>
            <p className="text-body">{message}</p>
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
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={[]}
            customSquareStyles={{}}
            arePiecesDraggable={draggable}
            onPieceDrop={makeMove}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Nine({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/ppkbr3/2nq1QB1/4p3/2P3p1/8/6PP/1R5K w - - 2 33"),
    );
    const [draggable, setDraggable] = useState(true);
    const [clickable, setClickable] = useState(true);
    const [message, setMessage] = useState("");
    const [moveNumber, setMoveNumber] = useState(1);
    const [attempts, setAttempts] = useState(0);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Rxb7+") {
        setGame({ ...game });
        setDraggable(false);
        setTimeout(() => {
          game.move("Kxb7");
          setGame({ ...game });
          setMoveNumber(2);
          setDraggable(true);
        }, 500);
        return true;
      }
      if (move.san == "Qxd6" && moveNumber == 2) {
        setGame({ ...game });
        setDraggable(false);
        setMessage("Correct!");
        setAttempts(0);
      } else {
        setGame({ ...game });
        setMessage("Wrong move, try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
          setAttempts(attempts => attempts + 1);
        }, 800);
        return true;
      }
    }

    function showAnswer() {
      setAttempts(0);
      setClickable(false);
      setDraggable(false);
      game.load("8/ppkbr3/2nq1QB1/4p3/2P3p1/8/6PP/1R5K w - - 2 33");
      setTimeout(() => {
        game.move("Rxb7+");
        setGame({ ...game });
      }, 1000);
      setTimeout(() => {
        game.move("Kxb7");
        setGame({ ...game });
      }, 1500);
      setTimeout(() => {
        game.move("Qxd6");
        setGame({ ...game });
      }, 2000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Puzzle #7</h2>
          </div>
          <div className="text-body-div">
            <div style={{ justifyContent: "space-between" }} className="flex">
              <p className="text-body">White to move:</p>
              {attempts >= 3 && (
                <button
                  onClick={showAnswer}
                  style={{ marginTop: "5px" }}
                  className="lesson-btn"
                >
                  Show answer
                </button>
              )}
            </div>
            <p className="text-body">{message}</p>
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
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={[]}
            customSquareStyles={{}}
            arePiecesDraggable={draggable}
            onPieceDrop={makeMove}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Ten({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("rn3rk1/pp2Qpp1/1qp1p2p/3nN3/3P4/3B4/P1P2PPP/R4RK1 w - - 4 16"),
    );
    const [draggable, setDraggable] = useState(true);
    const [clickable, setClickable] = useState(true);
    const [message, setMessage] = useState("");
    const [moveNumber, setMoveNumber] = useState(1);
    const [attempts, setAttempts] = useState(0);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Bh7+") {
        setGame({ ...game });
        setDraggable(false);
        setTimeout(() => {
          game.move("Kxh7");
          setGame({ ...game });
          setMoveNumber(2);
          setDraggable(true);
        }, 500);
        return true;
      }
      if (move.san == "Qxf8" && moveNumber == 2) {
        setGame({ ...game });
        setDraggable(false);
        setMessage("Correct!");
        setAttempts(0);
      } else {
        setGame({ ...game });
        setMessage("Wrong move, try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
          setAttempts(attempts => attempts + 1);
        }, 800);
        return true;
      }
    }

    function showAnswer() {
      setAttempts(0);
      setClickable(false);
      setDraggable(false);
      game.load("rn3rk1/pp2Qpp1/1qp1p2p/3nN3/3P4/3B4/P1P2PPP/R4RK1 w - - 4 16");
      setTimeout(() => {
        game.move("Bh7+");
        setGame({ ...game });
      }, 1000);
      setTimeout(() => {
        game.move("Kxh7");
        setGame({ ...game });
      }, 1500);
      setTimeout(() => {
        game.move("Qxf8");
        setGame({ ...game });
      }, 2000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Puzzle #8</h2>
          </div>
          <div className="text-body-div">
            <div style={{ justifyContent: "space-between" }} className="flex">
              <p className="text-body">White to move:</p>
              {attempts >= 3 && (
                <button
                  onClick={showAnswer}
                  style={{ marginTop: "5px" }}
                  className="lesson-btn"
                >
                  Show answer
                </button>
              )}
            </div>
            <p className="text-body">{message}</p>
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
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={[]}
            customSquareStyles={{}}
            arePiecesDraggable={draggable}
            onPieceDrop={makeMove}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Eleven({ next, pre }) {
    const [game, setGame] = useState(
      new Chess(
        "r2r2k1/1p3pp1/1q3n1p/p1p2P2/2Pn1B2/P1Q4P/1P4P1/1B1RR1K1 b - - 6 25",
      ),
    );
    const [draggable, setDraggable] = useState(true);
    const [clickable, setClickable] = useState(true);
    const [message, setMessage] = useState("");
    const [moveNumber, setMoveNumber] = useState(1);
    const [attempts, setAttempts] = useState(0);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Ne2+") {
        setGame({ ...game });
        setDraggable(false);
        setTimeout(() => {
          game.move("Rxe2");
          setGame({ ...game });
          setMoveNumber(2);
          setDraggable(true);
        }, 500);
        return true;
      }
      if (move.san == "Rxd1+" && moveNumber == 2) {
        setGame({ ...game });
        setDraggable(false);
        setMessage("Correct!");
        setAttempts(0);
      } else {
        setGame({ ...game });
        setMessage("Wrong move, try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
          setAttempts(attempts => attempts + 1);
        }, 800);
        return true;
      }
    }

    function showAnswer() {
      setAttempts(0);
      setClickable(false);
      setDraggable(false);
      game.load(
        "r2r2k1/1p3pp1/1q3n1p/p1p2P2/2Pn1B2/P1Q4P/1P4P1/1B1RR1K1 b - - 6 25",
      );
      setTimeout(() => {
        game.move("Ne2+");
        setGame({ ...game });
      }, 1000);
      setTimeout(() => {
        game.move("Rxe2");
        setGame({ ...game });
      }, 1500);
      setTimeout(() => {
        game.move("Rxd1+");
        setGame({ ...game });
      }, 2000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Puzzle #9</h2>
          </div>
          <div className="text-body-div">
            <div style={{ justifyContent: "space-between" }} className="flex">
              <p className="text-body">Black to move:</p>
              {attempts >= 3 && (
                <button
                  onClick={showAnswer}
                  style={{ marginTop: "5px" }}
                  className="lesson-btn"
                >
                  Show answer
                </button>
              )}
            </div>
            <p className="text-body">{message}</p>
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
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={[]}
            customSquareStyles={{}}
            arePiecesDraggable={draggable}
            onPieceDrop={makeMove}
            boardOrientation={"black"}
          />
        </div>
      </div>
    );
  }

  function Twelve({ direct, pre }) {
    const [game, setGame] = useState(
      new Chess("2rr1k2/5ppQ/p3p3/qp6/3b4/1P1B1P2/P4P1P/2RR2K1 w - - 0 25"),
    );
    const [draggable, setDraggable] = useState(true);
    const [clickable, setClickable] = useState(true);
    const [message, setMessage] = useState("");
    const [moveNumber, setMoveNumber] = useState(1);
    const [attempts, setAttempts] = useState(0);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Rxc8") {
        setGame({ ...game });
        setDraggable(false);
        setTimeout(() => {
          game.move("Rxc8");
          setGame({ ...game });
          setMoveNumber(2);
          setDraggable(true);
        }, 500);
        return true;
      }
      if (move.san == "Qh8+" && moveNumber == 2) {
        setGame({ ...game });
        setDraggable(false);
        setTimeout(() => {
          game.move("Ke7");
          setGame({ ...game });
          setMoveNumber(3);
          setDraggable(true);
        }, 500);
        return true;
      }
      if (move.san == "Qxc8" && moveNumber == 3) {
        setGame({ ...game });
        setDraggable(false);
        setMessage("Correct!");
        setAttempts(0);
      } else {
        setGame({ ...game });
        setMessage("Wrong move, try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
          setAttempts(attempts => attempts + 1);
        }, 800);
        return true;
      }
    }

    function showAnswer() {
      setAttempts(0);
      setClickable(false);
      setDraggable(false);
      game.load("2rr1k2/5ppQ/p3p3/qp6/3b4/1P1B1P2/P4P1P/2RR2K1 w - - 0 25");
      setTimeout(() => {
        game.move("Rxc8");
        setGame({ ...game });
      }, 1000);
      setTimeout(() => {
        game.move("Rxc8");
        setGame({ ...game });
      }, 1500);
      setTimeout(() => {
        game.move("Qh8+");
        setGame({ ...game });
      }, 2000);
      setTimeout(() => {
        game.move("Ke7");
        setGame({ ...game });
      }, 2500);
      setTimeout(() => {
        game.move("Qxc8");
        setGame({ ...game });
      }, 3000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Puzzle #10</h2>
          </div>
          <div className="text-body-div">
            <div style={{ justifyContent: "space-between" }} className="flex">
              <p className="text-body">White to move:</p>
              {attempts >= 3 && (
                <button
                  onClick={showAnswer}
                  style={{ marginTop: "5px" }}
                  className="lesson-btn"
                >
                  Show answer
                </button>
              )}
            </div>
            <p className="text-body">{message}</p>
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
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={[]}
            customSquareStyles={{}}
            arePiecesDraggable={draggable}
            onPieceDrop={makeMove}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <TacticsNav highlight7={true} />
      {sections[index]}
    </div>
  );
}

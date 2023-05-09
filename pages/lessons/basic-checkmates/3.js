import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
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
    <Six direct={direct} pre={pre} />,
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
    router.push("/lessons/basic-checkmates/4");
  }

  function One({ next }) {
    const [game, setGame] = useState(
      new Chess("r1b3k1/1p3ppp/p7/2N5/4P3/P6P/r3BPP1/3R2K1 b - - 2 20"),
    );
    const [visible, setVisible] = useState(false);
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");
    const [draggable, setDraggable] = useState(false);
    setTimeout(() => {
      game.move("Rxe2");
      setGame({ ...game });
    }, 1000);

    useEffect(() => {
      setTimeout(() => {
        setDraggable(true);
      }, 1000);
    }, []);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });

      if (move == null) return false;

      if (move.san == "Rd8#") {
        setGame({ ...game });
        setMessage("Nice work :)");
        setDraggable(false);
        return true;
      } else {
        setMessage(":( Keep looking");
        setGame({ ...game });
        setDraggable(false);
        setVisible(true);
        return true;
      }
    }

    function tryAgain() {
      setMessage("");
      setVisible(false);
      game.undo();
      setGame({ ...game });
      setDraggable(true);
    }

    return (
      <div className="flex">
        <CheckmatesNav highlight3={true} />
        <div className="container">
          <div className="text-box">
            <div className="text-title-div">
              <h2 className="text-title">Checkmate in One</h2>
            </div>
            <div className="text-body-div">
              <p className="text-body">White to move:</p>
              <p className="text-body">Can you find checkmate in 1 move?</p>
              <p className="text-body">{message}</p>
              {visible && (
                <button className="lesson-btn" onClick={tryAgain}>
                  Try again
                </button>
              )}
            </div>
            <div className="arrows-div">
              <FontAwesomeIcon
                className="left-arrow-locked"
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
              position={game.fen()}
              boardWidth={325}
              areArrowsAllowed={false}
              showBoardNotation={false}
              arePiecesDraggable={draggable}
              customArrowColor={"rgba(255,0,0, 0.5)"}
              onPieceDrop={makeMove}
            />
          </div>
        </div>
      </div>
    );
  }

  function Two({ next, pre }) {
    const [game, setGame] = useState(
      new Chess(
        "rnbq1rk1/p3bp2/1p1p1n1Q/2pP1B2/2P3P1/1PN2P2/P3N2P/2KR3R b - - 0 18",
      ),
    );
    const [visible, setVisible] = useState(false);
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");
    const [draggable, setDraggable] = useState(false);
    setTimeout(() => {
      game.move("Nxg4");
      setGame({ ...game });
    }, 1000);

    useEffect(() => {
      setTimeout(() => {
        setDraggable(true);
      }, 1000);
    }, []);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });

      if (move == null) return false;

      if (move.san == "Qh7#") {
        setGame({ ...game });
        setMessage("Nice work :)");
        setDraggable(false);
        return true;
      } else {
        setMessage(":( Keep looking");
        setGame({ ...game });
        setDraggable(false);
        setVisible(true);
        return true;
      }
    }

    function tryAgain() {
      setMessage("");
      setVisible(false);
      game.undo();
      setGame({ ...game });
      setDraggable(true);
    }

    return (
      <div className="flex">
        <CheckmatesNav highlight3={true} />
        <div className="container">
          <div className="text-box">
            <div className="text-title-div">
              <h2 className="text-title">Checkmate in One</h2>
            </div>
            <div className="text-body-div">
              <p className="text-body">White to move:</p>
              <p className="text-body">Can you find checkmate in 1?</p>
              <p className="text-body">{message}</p>
              {visible && (
                <button className="lesson-btn" onClick={tryAgain}>
                  Try again
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
          <div className="board">
            <Chessboard
              position={game.fen()}
              boardWidth={325}
              areArrowsAllowed={false}
              showBoardNotation={false}
              arePiecesDraggable={draggable}
              customArrowColor={"rgba(255,0,0, 0.5)"}
              onPieceDrop={makeMove}
            />
          </div>
        </div>
      </div>
    );
  }

  function Three({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("1r3r2/1b3P1k/p5pp/1p6/5R2/1BQ5/PP2q1P1/R6K w - - 5 30"),
    );
    const [visible, setVisible] = useState(false);
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");
    const [draggable, setDraggable] = useState(false);
    setTimeout(() => {
      game.move("Qf6");
      setGame({ ...game });
    }, 1000);

    useEffect(() => {
      setTimeout(() => {
        setDraggable(true);
      }, 1000);
    }, []);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });

      if (move == null) return false;

      if (move.san == "Qxg2#") {
        setGame({ ...game });
        setMessage("Nice work :)");
        setDraggable(false);
        return true;
      } else {
        setMessage(":( Keep looking");
        setGame({ ...game });
        setDraggable(false);
        setVisible(true);
        return true;
      }
    }

    function tryAgain() {
      setMessage("");
      setVisible(false);
      game.undo();
      setGame({ ...game });
      setDraggable(true);
    }

    return (
      <div className="flex">
        <CheckmatesNav highlight3={true} />
        <div className="container">
          <div className="text-box">
            <div className="text-title-div">
              <h2 className="text-title">Checkmate in One</h2>
            </div>
            <div className="text-body-div">
              <p className="text-body">Black to move and mate in 1:</p>
              <p className="text-body">{message}</p>
              {visible && (
                <button className="lesson-btn" onClick={tryAgain}>
                  Try again
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
          <div className="board">
            <Chessboard
              position={game.fen()}
              boardWidth={325}
              areArrowsAllowed={false}
              showBoardNotation={false}
              arePiecesDraggable={draggable}
              customArrowColor={"rgba(255,0,0, 0.5)"}
              onPieceDrop={makeMove}
              boardOrientation={"black"}
            />
          </div>
        </div>
      </div>
    );
  }

  function Four({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("r3n1k1/1p1bqp1p/p1pp4/3P4/8/P1N4P/BPP2PQ1/R5RK b - - 0 1"),
    );
    const [visible, setVisible] = useState(false);
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");
    const [draggable, setDraggable] = useState(false);
    setTimeout(() => {
      game.move("Ng7");
      setGame({ ...game });
    }, 1000);

    useEffect(() => {
      setTimeout(() => {
        setDraggable(true);
      }, 1000);
    }, []);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });

      if (move == null) return false;

      if (move.san == "Qxg7#") {
        setGame({ ...game });
        setMessage("Nice work :)");
        setDraggable(false);
        return true;
      } else {
        setMessage(":( Keep looking");
        setGame({ ...game });
        setDraggable(false);
        setVisible(true);
        return true;
      }
    }

    function tryAgain() {
      setMessage("");
      setVisible(false);
      game.undo();
      setGame({ ...game });
      setDraggable(true);
    }

    return (
      <div className="flex">
        <CheckmatesNav highlight3={true} />
        <div className="container">
          <div className="text-box">
            <div className="text-title-div">
              <h2 className="text-title">Checkmate in One</h2>
            </div>
            <div className="text-body-div">
              <p className="text-body">White to move and win:</p>
              <p className="text-body">{message}</p>
              {visible && (
                <button className="lesson-btn" onClick={tryAgain}>
                  Try again
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
          <div className="board">
            <Chessboard
              position={game.fen()}
              boardWidth={325}
              areArrowsAllowed={false}
              showBoardNotation={false}
              arePiecesDraggable={draggable}
              customArrowColor={"rgba(255,0,0, 0.5)"}
              onPieceDrop={makeMove}
              boardOrientation={"white"}
            />
          </div>
        </div>
      </div>
    );
  }

  function Five({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("1r4k1/5ppp/p1b5/6P1/2pq4/1P3Q1P/2PP2P1/2K1R3 w - - 0 26"),
    );
    const [visible, setVisible] = useState(false);
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");
    const [draggable, setDraggable] = useState(false);
    setTimeout(() => {
      game.move("Qxc6");
      setGame({ ...game });
    }, 1000);

    useEffect(() => {
      setTimeout(() => {
        setDraggable(true);
      }, 1000);
    }, []);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });

      if (move == null) return false;

      if (move.san == "Qa1#") {
        setGame({ ...game });
        setMessage("Nice work :)");
        setDraggable(false);
        return true;
      } else {
        setMessage(":( Keep looking");
        setGame({ ...game });
        setDraggable(false);
        setVisible(true);
        return true;
      }
    }

    function tryAgain() {
      setMessage("");
      setVisible(false);
      game.undo();
      setGame({ ...game });
      setDraggable(true);
    }

    return (
      <div className="flex">
        <CheckmatesNav highlight3={true} />
        <div className="container">
          <div className="text-box">
            <div className="text-title-div">
              <h2 className="text-title">Checkmate in One</h2>
            </div>
            <div className="text-body-div">
              <p className="text-body">Black to move:</p>
              <p className="text-body">{message}</p>
              {visible && (
                <button className="lesson-btn" onClick={tryAgain}>
                  Try again
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
          <div className="board">
            <Chessboard
              position={game.fen()}
              boardWidth={325}
              areArrowsAllowed={false}
              showBoardNotation={false}
              arePiecesDraggable={draggable}
              customArrowColor={"rgba(255,0,0, 0.5)"}
              onPieceDrop={makeMove}
              boardOrientation={"black"}
            />
          </div>
        </div>
      </div>
    );
  }

  function Six({ direct, pre }) {
    const [game, setGame] = useState(
      new Chess("r4k1r/p2Q1ppp/2p1p3/4P3/4n3/4q3/PPP1N1PP/3RK2R w K - 1 15"),
    );
    const [visible, setVisible] = useState(false);
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");
    const [draggable, setDraggable] = useState(false);
    const [clickable, setClickable] = useState(true);
    setTimeout(() => {
      game.move("Qxc6");
      setGame({ ...game });
    }, 1000);

    useEffect(() => {
      setTimeout(() => {
        setDraggable(true);
      }, 1000);
    }, []);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });

      if (move == null) return false;

      if (move.san == "Qf2#") {
        setGame({ ...game });
        setMessage(
          "Nice work :) Black's knight both protects the queen and controls the escape square.",
        );
        setArrows([
          ["e4", "d2"],
          ["e4", "f2"],
        ]);
        setDraggable(false);
        setClickable(false);
        return true;
      } else {
        setMessage(":( Keep looking");
        setGame({ ...game });
        setDraggable(false);
        setVisible(true);
        return true;
      }
    }

    function tryAgain() {
      setMessage("");
      setVisible(false);
      game.undo();
      setGame({ ...game });
      setDraggable(true);
    }

    return (
      <div className="flex">
        <CheckmatesNav highlight3={true} />
        <div className="container">
          <div className="text-box">
            <div className="text-title-div">
              <h2 className="text-title">Checkmate in One</h2>
            </div>
            <div className="text-body-div">
              <p className="text-body">Black to move:</p>
              <p className="text-body">{message}</p>
              {visible && (
                <button className="lesson-btn" onClick={tryAgain}>
                  Try again
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
              customArrows={arrows}
              customArrowColor={"rgba(255,0,0, 0.5)"}
              onPieceDrop={makeMove}
              boardOrientation={"black"}
            />
          </div>
        </div>
      </div>
    );
  }

  return <>{sections[index]}</>;
}

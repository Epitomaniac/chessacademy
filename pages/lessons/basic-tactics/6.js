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
    <Two next={next} pre={pre} />,
    <Three next={next} pre={pre} />,
    <Four next={next} pre={pre} />,
    <Five direct={direct} pre={pre} />,
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
    router.push("/lessons/basic-tactics/7");
  }

  function One({ next }) {
    const [game, setGame] = useState(
      new Chess("8/ppb1kp2/2Pq4/8/8/1B5Q/PP3rPP/3R3K b - - 0 31"),
    );
    const [arrows, setArrows] = useState([["d1", "h1"]]);
    const [message, setMessage] = useState("");

    function play() {
      game.move("Qxd1+");
      setGame({ ...game });
      setMessage(
        "But black sacrifices the valuable queen to remove the crucial defender of the back rank!",
      );
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Sacrifice</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              A <strong>Sacrifice</strong> (informally called a sac) is a tactic
              in which one side intentionally loses a piece to win a more
              valuable piece, deliver checkmate, or get a better position.
            </p>
            <p style={{ paddingTop: "0" }} className="text-body">
              Take a look at this position; white's rook is protecting the back
              rank.
            </p>
            <button
              style={{ marginTop: "0", marginBottom: "0" }}
              onClick={play}
              className="lesson-btn"
            >
              Play
            </button>
            <p style={{ paddingTop: "0" }} className="text-body">
              {message}
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
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
            customArrowColor={"rgba(0,255,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            boardOrientation={"black"}
          />
        </div>
      </div>
    );
  }

  function Two({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/ppb1kp2/2P5/8/8/1B5Q/PP3rPP/3q3K w - - 0 32"),
    );
    const [arrows, setArrows] = useState([]);
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        game.move("Bxd1");
        setGame({ ...game });
        setVisible(true);
      }, 1000);
    }, []);

    function play() {
      game.move("Rf1#");
      setGame({ ...game });
      setTimeout(() => {
        setMessage1("Black now delivers checkmate!");
        setMessage2(
          "Obviously, you can sacrifice any of your pieces except your king.",
        );
      }, 300);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Sacrifice</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              White has no choice but to accept the sacrifice.
            </p>
            {visible && (
              <button onClick={play} className="lesson-btn">
                Play
              </button>
            )}
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
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
            customArrowColor={"rgba(0,255,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            boardOrientation={"black"}
          />
        </div>
      </div>
    );
  }

  function Three({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("1rb2r1k/1pp4P/p2p4/6N1/2P2p2/6R1/PP3P2/2K4R w - - 0 27"),
    );
    const [arrows, setArrows] = useState([]);
    const [clickable, setClickable] = useState(true);
    const [draggable, setDraggable] = useState(true);
    const [message, setMessage] = useState("");
    const [moveNumber, setMoveNumber] = useState(1);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Nf7+") {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setTimeout(() => {
          game.move("Rxf7");
          setGame({ ...game });
          setMoveNumber(2);
          setDraggable(true);
          setClickable(true);
        }, 500);
        return true;
      }
      if (move.san == "Rg8#" && moveNumber == 2) {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setMessage("Well done!");
      } else {
        setGame({ ...game });
        setMessage("Wrong move, try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage("");
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
            <h2 className="text-title">Sacrifice</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">White to move; find the best move.</p>
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
            customArrows={arrows}
            customSquareStyles={{}}
            arePiecesDraggable={draggable}
            onPieceDrop={makeMove}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Four({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("3r1r1k/6p1/5p1p/3B3R/1pP4Q/6PP/1K6/5q2 w - - 0 41"),
    );
    const [arrows, setArrows] = useState([]);
    const [clickable, setClickable] = useState(true);
    const [draggable, setDraggable] = useState(true);
    const [message, setMessage] = useState("");
    const [moveNumber, setMoveNumber] = useState(1);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Rxh6+") {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setTimeout(() => {
          game.move("gxh6");
          setGame({ ...game });
          setMoveNumber(2);
          setDraggable(true);
          setClickable(true);
        }, 500);
        return true;
      }
      if (move.san == "Qxh6#" && moveNumber == 2) {
        setGame({ ...game });
        setArrows([["d5", "g8"]]);
        setDraggable(false);
        setClickable(false);
        setMessage("Well done!");
      } else {
        setGame({ ...game });
        setMessage("Wrong move, try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage("");
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
            <h2 className="text-title">Sacrifice</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">White to move; find the best move.</p>
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
            customArrows={arrows}
            customSquareStyles={{}}
            arePiecesDraggable={draggable}
            onPieceDrop={makeMove}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Five({ direct, pre }) {
    const [game, setGame] = useState(
      new Chess("8/4Q1pk/7p/8/8/Pqr4P/6P1/6RK b - - 2 37"),
    );
    const [arrows, setArrows] = useState([]);
    const [clickable, setClickable] = useState(true);
    const [draggable, setDraggable] = useState(true);
    const [message, setMessage] = useState("");
    const [moveNumber, setMoveNumber] = useState(1);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Rxh3+") {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setTimeout(() => {
          game.move("gxh3");
          setGame({ ...game });
          setMoveNumber(2);
          setDraggable(true);
          setClickable(true);
        }, 500);
        return true;
      }
      if (move.san == "Qxh3#") {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setMessage("Excellent :)");
        return true;
      } else {
        setGame({ ...game });
        setMessage("Wrong move, try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage("");
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
            <h2 className="text-title">Removing the Defender</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Black to move:</p>
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
            customArrows={arrows}
            customSquareStyles={{}}
            arePiecesDraggable={draggable}
            onPieceDrop={makeMove}
            boardOrientation={"black"}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <TacticsNav highlight6={true} />
      {sections[index]}
    </div>
  );
}

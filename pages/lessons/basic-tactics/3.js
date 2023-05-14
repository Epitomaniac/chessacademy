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
    router.push("/lessons/basic-tactics/4");
  }

  function One({ next }) {
    const [game, setGame] = useState(
      new Chess("4Q3/8/8/8/4K3/8/8/r6k b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);

    function play() {
      game.move("Re1+");
      setGame({ ...game });
      setTimeout(() => {
        game.move("Kf4");
        setGame({ ...game });
      }, 1000);
      setTimeout(() => {
        game.move("Rxe8");
        setGame({ ...game });
      }, 2000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Skewer</h2>
          </div>
          <div className="text-body-div">
            <p style={{ lineHeight: "22px" }} className="text-body">
              The <strong>skewer</strong> is a tactic in which a piece is
              attacked and pressured to move so that the piece behind it can be
              captured.
            </p>
            <p
              style={{ paddingTop: "0", lineHeight: "22px" }}
              className="text-body"
            >
              The skewer is kind of the opposite of a pin; the difference is
              that this time usually the more valuable piece comes under the
              attack first.
            </p>
            <p
              style={{ paddingTop: "0", lineHeight: "22px" }}
              className="text-body"
            >
              Just like the pin, only the long-range pieces can skewer.
            </p>
            <button
              style={{ marginTop: "0", marginBottom: "0" }}
              onClick={play}
              className="lesson-btn"
            >
              Play
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

  function Two({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/7p/8/2r5/1kPK2R1/8/8 b - - 17 84"),
    );
    const [arrows, setArrows] = useState([]);
    const [clickable, setClickable] = useState(true);
    const [draggable, setDraggable] = useState(true);
    const [message, setMessage] = useState("");

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Rxc3+") {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setTimeout(() => {
          game.move("Ke4");
          setGame({ ...game });
          setDraggable(true);
          setClickable(true);
        }, 500);
        return true;
      }
      if (move.san == "Rxg3") {
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
            <h2 className="text-title">The skewer</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Black to move; can you find the best move?
            </p>
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
            boardOrientation={"black"}
          />
        </div>
      </div>
    );
  }

  function Three({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("2r3k1/p4ppp/1p2nb2/8/P3Q3/1P4PP/R1B2P1K/2q5 w - - 3 28"),
    );
    const [arrows, setArrows] = useState([]);
    const [clickable, setClickable] = useState(true);
    const [draggable, setDraggable] = useState(true);
    const [message, setMessage] = useState("");

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Qxh7+") {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setTimeout(() => {
          game.move("Kf8");
          setGame({ ...game });
          setDraggable(true);
          setClickable(true);
        }, 500);
        return true;
      }
      if (move.san == "Qh8+") {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setTimeout(() => {
          game.move("Ke7");
          setGame({ ...game });
          setDraggable(true);
          setClickable(true);
        }, 500);
        return true;
      }
      if (move.san == "Qxc8") {
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
            <h2 className="text-title">The skewer</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">White to move:</p>
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
      new Chess("5q2/p3r1kp/3b2p1/3b4/3P3P/P3BrP1/1P1Q1P2/2R2RK1 w - - 3 30"),
    );
    const [arrows, setArrows] = useState([]);
    const [clickable, setClickable] = useState(true);
    const [draggable, setDraggable] = useState(true);
    const [message, setMessage] = useState("");

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Bh6+") {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setTimeout(() => {
          game.move("Kg8");
          setGame({ ...game });
          setDraggable(true);
          setClickable(true);
        }, 500);
        return true;
      }
      if (move.san == "Bxf8") {
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
            <h2 className="text-title">The skewer</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">White to move:</p>
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
      new Chess("5k1r/4b1p1/pB1pqn2/1p2p2p/7r/1N6/PPP3Q1/1K1R1R2 w - - 0 26"),
    );
    const [arrows, setArrows] = useState([]);
    const [clickable, setClickable] = useState(true);
    const [draggable, setDraggable] = useState(true);
    const [message, setMessage] = useState("");

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Qa8+") {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setTimeout(() => {
          game.move("Kf7");
          setGame({ ...game });
          setDraggable(true);
          setClickable(true);
        }, 500);
        return true;
      }
      if (move.san == "Qxh8") {
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
            <h2 className="text-title">The skewer</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">White to move:</p>
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
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex">
      <TacticsNav highlight3={true} />
      {sections[index]}
    </div>
  );
}

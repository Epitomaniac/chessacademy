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
    <Seven direct={direct} pre={pre} />,
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
    router.push("/lessons/basic-tactics/5");
  }

  function One({ next }) {
    const [game, setGame] = useState(
      new Chess("8/8/8/8/8/8/6pp/2RK3k w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);

    function play() {
      game.move("Kd2#");
      setGame({ ...game });
      setTimeout(() => {
        setArrows([["c1", "h1"]]);
      }, 300);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Discovered Attack</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              A <strong>Discovered attack</strong> is a tactic in which one
              piece moves out of the way of a friendly piece and lets it unleash
              an attack.
            </p>
            <p className="text-body">
              Discovered attacks that give check are called discovered check.
            </p>
            <button
              style={{ marginTop: "0" }}
              onClick={play}
              className="lesson-btn"
            >
              Play
            </button>
            <p style={{ paddingTop: "0" }} className="text-body">
              White checkmated black by just moving his king out of the way. How
              cool is that!
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
      new Chess("r2r3k/ppqpp1pp/8/8/2NP4/7P/PP4P1/1QR2R1K w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");

    function play() {
      game.move("Ne5");
      setGame({ ...game });
      setTimeout(() => {
        setArrows([
          ["c1", "c7"],
          ["e5", "f7"],
        ]);
        setMessage(
          "Not only the knight unleashed the rook's attack on the queen, but also moved to a square that threatens a fork.",
        );
      }, 300);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Discovered Attack</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Take a look at this position. White's rook and black's queen are
              lined up together, but the knight is blocking the rook's attack.
              Anywhere it jumps creates an attack on the queen.
            </p>
            <button onClick={play} className="lesson-btn">
              Play
            </button>
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
      new Chess("r2r3k/ppqpp1pp/8/4N3/3P4/7P/PP4P1/1QR2R1K w - - 0 1"),
    );
    const [arrows, setArrows] = useState([
      ["c1", "c7"],
      ["e5", "f7"],
    ]);
    const [message, setMessage] = useState("");

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Tactics Combined</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Black is now forced to either lose the queen or accept a nasty
              fork.
            </p>
            <p className="text-body">
              Here white used two tactical themes together, a discovered attack
              and a fork. Tactics can often be combined to create more
              complicated problems and devastating threats!
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

  function Four({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("r4k1r/ppb2pp1/4p2p/8/Q7/1P1P4/P1P2PPP/q1B2RK1 w - - 0 17"),
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
      if (move.san == "Ba3+") {
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
      if (move.san == "Rxa1") {
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
            <h2 className="text-title">discovered Attack</h2>
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

  function Five({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("2k1r2r/ppp3pp/5p2/3p4/3q3P/3B1b2/PP6/1KRQ4 w - - 0 27"),
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
      if (move.san == "Bf5+") {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setTimeout(() => {
          game.move("Kb8");
          setGame({ ...game });
          setDraggable(true);
          setClickable(true);
        }, 500);
        return true;
      }
      if (move.san == "Qxd4") {
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
            <h2 className="text-title">discovered Attack</h2>
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

  function Six({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/5kPp/p1p2P2/P2rp3/2R4P/2BpK1P1/1P2b3/8 b - - 0 34"),
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
      if (move.san == "d2") {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setTimeout(() => {
          game.move("Bxd2");
          setGame({ ...game });
          setDraggable(true);
          setClickable(true);
        }, 500);
        return true;
      }
      if (move.san == "Bxc4") {
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
            <h2 className="text-title">discovered Attack</h2>
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

  function Seven({ direct, pre }) {
    const [game, setGame] = useState(
      new Chess(
        "rnb2b1N/pppkq1pp/5p2/3p3Q/4nP2/3B4/PPPP2PP/RNB1K2R b KQ - 0 9",
      ),
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
      if (move.san == "Ng3+") {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setTimeout(() => {
          game.move("Kd1");
          setGame({ ...game });
          setDraggable(true);
          setClickable(true);
        }, 500);
        return true;
      }
      if (move.san == "Nxh5") {
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
            <h2 className="text-title">discovered Attack</h2>
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
      <TacticsNav highlight4={true} />
      {sections[index]}
    </div>
  );
}

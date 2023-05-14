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
    router.push("/lessons/basic-tactics/3");
  }

  function One({ next }) {
    const [game, setGame] = useState(
      new Chess("3k4/8/5n2/6B1/1P6/1K6/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([["g5", "d8"]]);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Pin</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The <strong>pin</strong> is a tactic in which a piece cannot or
              must not move because the more valuable piece behind it will be
              exposed or captured.
            </p>
            <p className="text-body">
              Take a look at this position. Black's knight cannot move because
              then the black king will be checked. Here moving the knight is
              illegal.
            </p>
            <p className="text-body">
              The knight is <strong>pinned to</strong> the king.
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
      new Chess("3k4/8/5n2/6B1/1P6/1K6/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([["g5", "d8"]]);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Absolute Pin</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              This type of pin where moving the pinned piece is illegal is
              called <strong>absolute pin</strong>. The absolute pin only occurs
              when a piece is pinned to the king.
            </p>
            <p className="text-body">
              Only the long-range pieces- the queen, the rook, and the bishop
              are capable of pinning another piece.
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
      new Chess("2r4k/1p3qp1/p5pp/8/5b2/PP1B4/Q1P3P1/1K3R2 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Relative Pin</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The other type of pin where the pinned piece is able to move is
              called <strong>relative pin</strong>. Here the bishop can move,
              but then white would take the more valuable queen behind it.
            </p>
            <p className="text-body">
              The pin is powerful in the sense that even if the pinned piece can
              be defended, like in this case, it still can't move and is
              therefore vulnerable to additional attacks.
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
      new Chess("2r4k/1p3qp1/p5pp/8/5b2/PP1B4/Q1P3P1/1K3R2 w - - 0 1"),
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
      if (move.san == "g3") {
        setGame({ ...game });
        setMessage1(
          "Good job! This is called attacking or piling up on the pinned piece. It's often a very good strategy when your opponent has a pinned piece.",
        );
        setMessage2(
          "It's especially effective if the attacker is a pawn, because pawns can sacrifice themselves to capture more valuable pieces.",
        );
        setArrows([
          ["f1", "f7"],
          ["g3", "f4"],
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
            <h2 className="text-title">Exploiting the Pin</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Can you find the move that takes advantage of the pin?
            </p>
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
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            arePiecesDraggable={draggable}
            onPieceDrop={makeMove}
          />
        </div>
      </div>
    );
  }

  function Five({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/6k1/8/1BpPQ1b1/4Pp2/5Pn1/1KP4p/8 b - - 0 55"),
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
      if (move.san == "Bf6") {
        setGame({ ...game });
        setDraggable(false);
        setTimeout(() => {
          game.move("Qxf6+");
          setGame({ ...game });
          setDraggable(true);
        }, 500);
        return true;
      }
      if (move.san == "Kxf6") {
        setGame({ ...game });
        setMessage("Well done :)");
        setDraggable(false);
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
            <h2 className="text-title">The Pin</h2>
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
      new Chess("8/3b2k1/4p2p/3pP1pB/1Rp5/r1P3PP/5PK1/8 w - - 11 47"),
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
      if (move.san == "Rb7") {
        setGame({ ...game });
        setDraggable(false);
        setTimeout(() => {
          game.move("Kf8");
          setGame({ ...game });
          setDraggable(true);
        }, 500);
        return true;
      }
      if (move.san == "Rxd7") {
        setGame({ ...game });
        setMessage("Not bad :)");
        setDraggable(false);
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
            <h2 className="text-title">The Pin</h2>
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
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            onPieceDrop={makeMove}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Seven({ direct, pre }) {
    const [game, setGame] = useState(
      new Chess(
        "2kr3r/1p1q2p1/pR4p1/2bP3n/2p1P3/2N5/P2BB1PP/3Q1R1K b - - 3 22",
      ),
    );
    const [arrows, setArrows] = useState([]);
    const [clickable, setClickable] = useState(true);
    const [draggable, setDraggable] = useState(true);
    const [message, setMessage] = useState("");
    const [square, setSquare] = useState({});

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;

      if (move.san == "Ng3#") {
        setGame({ ...game });
        setMessage(
          "Excellent :) White takes advantage of the pinned pawn and delivers checkmate.",
        );
        setDraggable(false);
        setArrows([
          ["h8", "h1"],
          ["g3", "h1"],
          ["c5", "g1"],
        ]);
        setSquare({
          h2: { border: "2px solid red", borderRadius: "50%" },
        });
        setClickable(false);
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
            <h2 className="text-title">The Pin</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Black to move. This one might be a little difficult; take your
              time.
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
            customSquareStyles={square}
            onPieceDrop={makeMove}
            boardOrientation={"black"}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <TacticsNav highlight2={true} />
      {sections[index]}
    </div>
  );
}

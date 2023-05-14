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
    router.push("/lessons/basic-tactics/6");
  }

  function One({ next }) {
    const [game, setGame] = useState(
      new Chess("3n1rk1/q5pp/p1b5/8/6B1/1N5P/P5P1/3Q1R1K w - - 0 1"),
    );
    const [arrows, setArrows] = useState([["f8", "d8"]]);
    const [message, setMessage] = useState("");

    function play() {
      game.move("Rxf8+");
      setGame({ ...game });
      setTimeout(() => {
        game.move("Kxf8");
        setGame({ ...game });
      }, 1000);
      setTimeout(() => {
        game.move("Qxd8");
        setGame({ ...game });
        setMessage(
          "White captures the rook, which leaves the knight free to take on the next move!",
        );
      }, 2000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Removing the Defender</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              <strong>Removing the defender</strong> is a tactic in which a
              piece that has a defensive role is captured, leaving an
              unprotected piece or square that can be taken advantage of.
            </p>
            <p className="text-body">
              Here the black rook is defending the knight.
            </p>
            <button
              style={{ marginTop: "0" }}
              onClick={play}
              className="lesson-btn"
            >
              Play
            </button>
            <p className="text-body">{message}</p>
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
          />
        </div>
      </div>
    );
  }

  function Two({ next, pre }) {
    const [game, setGame] = useState(
      new Chess(
        "r4rk1/1bpqbpp1/2nppn1p/p7/Pp1P3B/2PQ1N2/1PBNPPPP/R2R2K1 w Qq - 0 1",
      ),
    );
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");
    const [clickable, setClickable] = useState(true);
    const [draggable, setDraggable] = useState(true);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Bxf6") {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setTimeout(() => {
          game.move("Bxf6");
          setGame({ ...game });
          setDraggable(true);
          setClickable(true);
        }, 500);
        return true;
      }
      if (move.san == "Qh7#") {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setMessage("Good job!");
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
            <h2 className="text-title">Undefended Square</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Often a piece is tasked with defending an important square rather
              than another piece, which could be removed to deliver decisive
              attacks.
            </p>
            <p className="text-body">
              White has formed a battery to deliver mate, but the black knight
              is defending that square. Can you find the move that solves the
              problem?
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

  function Three({ next, pre }) {
    const [game, setGame] = useState(
      new Chess(
        "r3kbnr/1pq1pppp/p1np4/8/3BP1b1/1P1B1N1P/P1P2PP1/RN1QK2R b KQkq - 0 9",
      ),
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
      if (move.san == "Bxf3") {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setTimeout(() => {
          game.move("Qxf3");
          setGame({ ...game });
          setMoveNumber(2);
          setDraggable(true);
          setClickable(true);
        }, 500);
        return true;
      }
      if (move.san == "Nxd4" && moveNumber == 2) {
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
            <h2 className="text-title">Removing the Defender</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Black to move; find the best move.</p>
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

  function Four({ next, pre }) {
    const [game, setGame] = useState(
      new Chess(
        "2kr3r/2p3p1/pp1bbp2/2p5/4PnP1/2N1BP1p/PPPR3P/2N2RK1 w - - 4 20",
      ),
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
      if (move.san == "Rxd6") {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setTimeout(() => {
          game.move("cxd6");
          setGame({ ...game });
          setMoveNumber(2);
          setDraggable(true);
          setClickable(true);
        }, 500);
        return true;
      }
      if (move.san == "Bxf4" && moveNumber == 2) {
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
            <h2 className="text-title">Removing the Defender</h2>
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
      new Chess("2r5/p5k1/1p2pq2/5pN1/3n1Q1P/P3R3/6P1/6K1 w - - 1 26"),
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
      if (move.san == "Qxd4") {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setTimeout(() => {
          game.move("Qxd4");
          setGame({ ...game });
          setMoveNumber(2);
          setDraggable(true);
          setClickable(true);
        }, 500);
        return true;
      }
      if (move.san == "Nxe6+" && moveNumber == 2) {
        setGame({ ...game });
        setDraggable(false);
        setClickable(false);
        setTimeout(() => {
          game.move("Kg6");
          setGame({ ...game });
          setDraggable(true);
          setClickable(true);
        }, 500);
        return true;
      }
      if (move.san == "Nxd4") {
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
            <p className="text-body">
              White to move; this one can be a little hard. Try to combine two
              tactics.
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
      <TacticsNav highlight5={true} />
      {sections[index]}
    </div>
  );
}

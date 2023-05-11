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
    router.push("/lessons/basic-checkmates/6");
  }

  function One({ next }) {
    const [game, setGame] = useState(
      new Chess("8/8/8/4k3/8/8/8/RR6 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");

    function play() {
      game.move("Rb4");
      setGame({ ...game });
      setTimeout(() => {
        setMessage(
          "We begin with the same tactic: limiting the king's access to the center of the board, pushing it more and more towards the edge.",
        );
        setArrows([["b4", "h4"]]);
      }, 300);
      setTimeout(() => {
        game.move("Kd5");
        setGame({ ...game });
        setArrows([["b4", "h4"]]);
      }, 1000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Ladder Again</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Delivering checkmate with two rooks is basically the same as with
              a queen and a rook but you need to take some extra steps since
              unlike queens, rooks can be attacked by a king.
            </p>
            <button onClick={play} className="lesson-btn">
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
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Two({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/8/3k4/1R6/8/8/R7 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([["b4", "h4"]]);
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [draggable, setDraggable] = useState(true);
    const [clickable, setClickable] = useState(true);
    const [visible, setVisible] = useState(false);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) {
        setArrows([["b4", "h4"]]);
        return false;
      }
      if (move.san == "Ra5+") {
        setGame({ ...game });
        setMessage1("So far everything is working like how we planned.");
        setDraggable(false);
        setArrows([
          ["b4", "h4"],
          ["a5", "h5"],
        ]);
        setClickable(false);
        setVisible(true);
        return true;
      } else {
        setGame({ ...game });
        setMessage1("Try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage1("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
          setTimeout(() => {
            setArrows([["b4", "h4"]]);
          }, 300);
        }, 1000);
        return true;
      }
    }

    function play() {
      game.move("Kc6");
      setGame({ ...game });
      setTimeout(() => {
        setMessage2(
          "The king is pushed back, but there is a problem: It's now controlling the square that we need for our rook! And our other rook can't defend that square. If only we had a queen that could do just that!",
        );
        setArrows([["c6", "b6"]]);
      }, 300);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Twist</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Push the king further up the board.</p>
            <p className="text-body">{message1}</p>
            {visible && (
              <button className="lesson-btn" onClick={play}>
                Play
              </button>
            )}
            <p style={{ paddingTop: "0px" }} className="text-body">
              {message2}
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
        <div
          style={!clickable ? { pointerEvents: "none" } : null}
          className="board"
        >
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
            arePiecesDraggable={draggable}
            onPieceDrop={makeMove}
          />
        </div>
      </div>
    );
  }

  function Three({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/2k5/R7/1R6/8/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([["c6", "b6"]]);
    const [message, setMessage] = useState("");
    const [draggable, setDraggable] = useState(true);
    const [clickable, setClickable] = useState(true);

    function play() {
      game.move("Rh4");
      setGame({ ...game });
      setTimeout(() => {
        setMessage(
          "The rook is now going to push the king safely from the other side of the board!",
        );
      }, 300);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Hare and the Tortoise</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              This is actually more of a minor inconvenience than a problem. All
              we need to do is keep our rooks as far away as possible to the
              king while not allowing the king to escape toward the center.
              Here's how:
            </p>
            <button className="lesson-btn" onClick={play}>
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
        <div
          style={!clickable ? { pointerEvents: "none" } : null}
          className="board"
        >
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
            arePiecesDraggable={draggable}
          />
        </div>
      </div>
    );
  }

  function Four({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/2k5/R7/7R/8/8/8 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");
    const [draggable, setDraggable] = useState(false);
    const [clickable, setClickable] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        game.move("Kb6");
        setGame({ ...game });
        setArrows([["b6", "a5"]]);
        setVisible(true);
      }, 1000);
    }, []);

    function play() {
      game.move("Rg5");
      setGame({ ...game });
      setTimeout(() => {
        setMessage(
          "No problem! Notice that we didn't put the rook all the way to the right side of the board, because we need to keep our rooks side by side to be able to deliver the ladder mate. We don't want them to stumble into each other.",
        );
        setArrows([
          ["g5", "g8"],
          ["h4", "h8"],
        ]);
      }, 300);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Hare and the Tortoise</h2>
          </div>
          <div className="text-body-div">
            {visible && (
              <>
                <p className="text-body">
                  The stubborn king continues to harass the rooks!
                </p>
                <button className="lesson-btn" onClick={play}>
                  Play
                </button>
              </>
            )}
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
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
            arePiecesDraggable={draggable}
          />
        </div>
      </div>
    );
  }

  function Five({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/1k6/6R1/7R/8/8/8 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");
    const [draggable, setDraggable] = useState(false);
    const [clickable, setClickable] = useState(true);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        game.move("Kc7");
        setGame({ ...game });
        setDisabled(false);
      }, 1000);
    }, []);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;

      if (move.san == "Rh7+") {
        setGame({ ...game });
        setDraggable(false);
        setTimeout(() => {
          game.move("Ke8");
          setMessage("Nice, go on.");
          setDraggable(true);
        }, 1000);
        return true;
      }
      if (move.san == "Rg8#") {
        setGame({ ...game });
        setMessage("Good job :)");
        setDraggable(false);
        return true;
      } else {
        setGame({ ...game });
        setMessage("Try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
        }, 1000);
        return true;
      }
    }

    function play() {
      game.move("Rg6");
      setGame({ ...game });
      setTimeout(() => {
        game.move("Kd7");
        setGame({ ...game });
        setMessage(
          "I'm sure you know the rest by now. Go ahead the finish the job.",
        );
        setDraggable(true);
        setDisabled(true);
      }, 1000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Ladder</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Our rooks are safe and ready to deliver checkmate!
            </p>
            <button disabled={disabled} onClick={play} className="lesson-btn">
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
        <div
          style={!clickable ? { pointerEvents: "none" } : null}
          className="board"
        >
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
            arePiecesDraggable={draggable}
            onPieceDrop={makeMove}
          />
        </div>
      </div>
    );
  }

  function Six({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("4k1R1/7R/8/8/8/8/8/8 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);
    const [clickable, setClickable] = useState(true);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Summary</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">So to deliver checkmate with two rooks:</p>
            <p className="text-body">
              First decide on which side of the board you are going to deliver
              mate. Then move one of your rooks to limit the king's access to
              the opposite direction. Keep your rooks side by side for the
              ladder mate.
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
        <div
          style={!clickable ? { pointerEvents: "none" } : null}
          className="board"
        >
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
            arePiecesDraggable={draggable}
          />
        </div>
      </div>
    );
  }

  function Seven({ direct, pre }) {
    const [game, setGame] = useState(
      new Chess("4k1R1/7R/8/8/8/8/8/8 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);
    const [clickable, setClickable] = useState(true);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Summary</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              If you can't move your rook forward because it can be captured by
              the king, place it as far away from the king as possible without
              allowing the king toward the center.
            </p>
            <p className="text-body">
              If the king attacks one of your rooks, place it as far away from
              the king as possible while keeping your rooks side by side to be
              able to deliver ladder mate.
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
        <div
          style={!clickable ? { pointerEvents: "none" } : null}
          className="board"
        >
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
            arePiecesDraggable={draggable}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight5={true} />
      {sections[index]}
    </div>
  );
}

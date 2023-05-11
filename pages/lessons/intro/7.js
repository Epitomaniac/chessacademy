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
    router.push("/lessons/basic-checkmates/1");
  }

  function One({ next }) {
    const [game, setGame] = useState(
      new Chess("8/8/4k3/8/8/8/8/KR6 w - - 0 1"),
    );
    const [customArrows, setCustomArrows] = useState(null);

    function giveCheck() {
      game.move("Re1");
      setGame({ ...game });
      setTimeout(() => {
        setCustomArrows([["e1", "e6"]]);
      }, 300);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Check</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              In chess the side who captures the other side's king wins the
              game.
            </p>
            <p className="text-body">
              The move that attacks the opponent's king is called a{" "}
              <strong>check</strong>.
            </p>
            <button onClick={giveCheck} className="lesson-btn">
              Give a check
            </button>
            <p className="text-body">
              When the opponent attacks your king, you are{" "}
              <strong>in check</strong>.
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
            customArrows={customArrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
          />
        </div>
      </div>
    );
  }

  function Two({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/4k3/8/4K3/8/8/8 w - - 0 1"),
    );

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Kings Can't Give Check</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              You can attack your opponent's king with any piece other than your
              own king.
            </p>
            <p className="text-body">
              In this position, the kings can never enter the highlighted
              squares because they are unable to give each other checks.
            </p>
            <p className="text-body">
              So during the game, there must be at least a square between the
              two kings.
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
            customSquareStyles={{
              f5: { backgroundColor: "rgba(255,0,0, 0.5)" },
              e5: { backgroundColor: "rgba(255,0,0, 0.5)" },
              d5: { backgroundColor: "rgba(255,0,0, 0.5)" },
            }}
          />
        </div>
      </div>
    );
  }

  function Three({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/7p/3pk3/2n5/8/1B6/K7 b - - 0 1"),
    );

    const [arrows, setArrows] = useState([["b2", "e5"]]);

    function getAway() {
      game.move("Ke4");
      setGame({ ...game });
      setTimeout(() => {
        setArrows([]);
      }, 300);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Responding to a Check</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              When you are in check, you <span className="underline">must</span>{" "}
              make a move that gets your king out of the check; any other move
              is illegal.
            </p>
            <p className="text-body">
              There are up to three ways you can react to a check:
            </p>
            <p className="text-body">
              1- You can get out of the way of the attack by moving your king to
              a square that's safe.
            </p>
            <button
              onClick={getAway}
              style={{ marginTop: "0" }}
              className="lesson-btn"
            >
              Get away
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
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            boardOrientation={"black"}
          />
        </div>
      </div>
    );
  }

  function Four({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/7p/3pk3/2n5/8/1B6/K7 b - - 0 1"),
    );

    const [arrows, setArrows] = useState([["b2", "e5"]]);

    function blockCheck() {
      game.move("d4");
      setGame({ ...game });
      setTimeout(() => {
        setArrows([]);
      }, 300);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Responding to a Check</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              2- You can block the check by placing one of your pieces in front
              of your king so that it's not attacked anymore.
            </p>
            <button onClick={blockCheck} className="lesson-btn">
              Block check
            </button>
            <p className="text-body">
              <strong>Important:</strong> You{" "}
              <span className="underline">cannot</span> block the check if the
              piece that's attacking your king is a knight, because knights can
              attack over other pieces.
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
            boardOrientation={"black"}
          />
        </div>
      </div>
    );
  }

  function Five({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/7p/3pk3/2n5/8/1B6/K7 b - - 0 1"),
    );

    const [arrows, setArrows] = useState([["b2", "e5"]]);

    function capturePiece() {
      game.move("Nxb2");
      setGame({ ...game });
      setTimeout(() => {
        setArrows([]);
      }, 300);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Responding to a Check</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              3- You can capture the piece that's attacking your king.
            </p>
            <button onClick={capturePiece} className="lesson-btn">
              capture
            </button>
            <p className="text-body">
              If you're in check and you can't do any of these three things, you
              are lost!
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
            boardOrientation={"black"}
          />
        </div>
      </div>
    );
  }

  function Six({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("1k2Q3/ppp5/1q6/8/8/7P/5PP1/6K1 w - - 0 1"),
    );

    const [arrows, setArrows] = useState([["e8", "b8"]]);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Checkmate</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              In this position black is in check, but can't get out of the
              check. It can't get away from the queen's attack, it can't block
              the check, and it can't capture the queen that is giving the
              check.
            </p>
            <p className="text-body">
              This is called a <strong>checkmate</strong>. In chess, the goal is
              to give check in a way that is impossible to get out of, which is
              the same as giving checkmate.
            </p>
            <p className="text-body">
              The checkmate is also called a <strong>mate</strong>.
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
          />
        </div>
      </div>
    );
  }

  function Seven({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("1k2Q3/ppp5/1q6/8/8/7P/5PP1/6K1 w - - 0 1"),
    );

    const [arrows, setArrows] = useState([["e8", "b8"]]);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Checkmate</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Black is in check and can't make a legal move. The game
              automatically ends and white is the winner.
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
          />
        </div>
      </div>
    );
  }

  function Eight({ direct, pre }) {
    const [game, setGame] = useState(new Chess());

    const [arrows, setArrows] = useState([]);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Lesson Summary</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              In this lesson you learned board setup, names of the pieces, their
              values, and how they move. You also learned how a game of chess is
              won by checkmate. That's awesome!
            </p>
            <p className="text-body">
              In the next lesson, you will learn some basic checkmates.
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
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <IntroNav highlight7={true} />
      {sections[index]}
    </div>
  );
}

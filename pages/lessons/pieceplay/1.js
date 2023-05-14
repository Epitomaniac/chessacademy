import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import PiecePlayNav from "@/components/PiecePlayNav";
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
            <h2 className="text-title">Piece Play</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              In this lesson, we are going to study basic strategies involving
              the chess pieces.
            </p>
            <p className="text-body">
              You already know how each piece can move, and you are capable of
              understanding the roll each piece can play in a tactical
              situation.
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
    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Strategy</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              But there is one more aspect to every game of chess than tactics,
              and that is <strong>strategy</strong>. Strategy involves
              evaluating a position and setting long-term goals and plans before
              making a move.
            </p>
            <p className="text-body">
              Generally the more you know about chess, the better you are at
              understanding a position and developing plans around it. And the
              pieces on the board are important factors that heavily influence
              this strategic aspect.
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
      </div>
    );
  }

  function Three({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/k4P2/8/6K1/8/8/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    function promote() {
      game.move("f8=Q");
      setGame({ ...game });
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Baby Queens</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Even though pawns are the least valuable piece, they have great
              potential; they can become queens! but only if they reach the last
              rank.
            </p>
            <button onClick={promote} className="lesson-btn">
              Make a queen
            </button>
            <p className="text-body">
              This is called a <strong>promotion</strong>. We promoted the pawn
              to a queen. Technically, you can turn all of your pawns to queens;
              there's no limitation for that. The promotion happens in one move.
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
        <div className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
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
      new Chess("8/k4P2/8/6K1/8/8/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    function makeRook() {
      game.undo();
      setGame({ ...game });
      setTimeout(() => {
        game.move("f8=R");
        setGame({ ...game });
      }, 500);
    }

    function makeBishop() {
      game.undo();
      setGame({ ...game });
      setTimeout(() => {
        game.move("f8=B");
        setGame({ ...game });
      }, 500);
    }

    function makeKnight() {
      game.undo();
      setGame({ ...game });
      setTimeout(() => {
        game.move("f8=N");
        setGame({ ...game });
      }, 500);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Under-promotion</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Although pawns <span className="underline">have to</span> promote
              when they reach the last rank, they have the option to promote to
              not only a queen, but to any piece other than a king or a pawn.
            </p>
            <div style={{ justifyContent: "space-between" }} className="flex">
              <button
                style={{ marginTop: "0" }}
                onClick={makeRook}
                className="lesson-btn"
              >
                Make a rook
              </button>
              <button
                style={{ marginTop: "0" }}
                onClick={makeBishop}
                className="lesson-btn"
              >
                Make a bishop
              </button>
              <button
                style={{ marginTop: "0" }}
                onClick={makeKnight}
                className="lesson-btn"
              >
                Make a knight
              </button>
            </div>

            <p style={{ paddingTop: "0" }} className="text-body">
              This is called an <strong>under-promotion</strong>. You may be
              wondering the point of this, but believe me, there are rare
              situations where an under-promotion makes sense.
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
        <div className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
          />
        </div>
      </div>
    );
  }

  function Five({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/8/5P2/4P3/3P4/2P5/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([["c2", "f5"]]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Pawn Chain</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Since pawns capture and defend diagonally, they are able to
              support each other and form what's known as{" "}
              <strong>pawn chains</strong>. A pawn chain is a group of pawns
              that are protecting each other on a diagonal.
            </p>
            <p className="text-body">
              Pawn chains are very tough to break by minor or major pieces,
              since these pieces are too valuable to lose to capture protected
              pawns.
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
        <div className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(0,255,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
          />
        </div>
      </div>
    );
  }

  function Six({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/8/5P2/4P3/3P4/2P5/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Base</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              However, pawn chains have a glaring weakness; the pawn that starts
              the chain cannot defend itself and is vulnerable to attacks.
            </p>
            <p style={{ paddingTop: "0" }} className="text-body">
              The first pawn in the chain is called the <strong>base</strong> of
              the pawn chain.
            </p>
            <p style={{ paddingTop: "0" }} className="text-body">
              Often the good strategy when dealing with pawn chains is to attack
              their base, and if you're the side that has a pawn chain, it's a
              good idea to keep its base protected.
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
        <div className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{
              c2: { border: "2px solid red", borderRadius: "50%" },
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight1={true} />
      {sections[index]}
    </div>
  );
}

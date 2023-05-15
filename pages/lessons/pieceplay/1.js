import { Chess } from "chess.js";
import { useEffect, useState } from "react";
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
    <Seven next={next} pre={pre} />,
    <Eight next={next} pre={pre} />,
    <Nine next={next} pre={pre} />,
    <Ten next={next} pre={pre} />,
    <Eleven next={next} pre={pre} />,
    <Twelve next={next} pre={pre} />,
    <Thirteen next={next} pre={pre} />,
    <Fourteen next={next} pre={pre} />,
    <Fifteen direct={direct} pre={pre} />,
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
    router.push("/lessons/pieceplay/2");
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
              Even though pawns are the least valuable pieces, they have great
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
        <div style={{ pointerEvents: "none" }} className="board">
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

  function Seven({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/3p4/2pPp3/2P1P3/8/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Pawn Structure</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Pawn chains have the potential to get locked together, since pawns
              can only move forward.
            </p>
            <p className="text-body">
              Since the <strong>pawn structure</strong>, that is how pawns are
              placed on the board, determines the{" "}
              <span className="underline">character</span> of a position, when
              pawns are locked like this in the center, we call the position a{" "}
              <strong>closed position</strong>.
            </p>
            <p className="text-body">
              Subsequently, when the center pawns are not locked, we call the
              position an <strong>open position</strong>.
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

  function Eight({ next, pre }) {
    const [game, setGame] = useState(
      new Chess(
        "rnbqk2r/pp2bppp/4pn2/3p4/2pPP3/2P2N2/PP1NBPPP/R1BQK2R w KQkq - 0 1",
      ),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    function advance() {
      game.move("e5");
      setGame({ ...game });
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Pawn Structure</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              White has the option to close the position by advancing its pawn
              in the center.
            </p>
            <button onClick={advance} className="lesson-btn">
              Close the center
            </button>
            <p className="text-body">
              Whether or not to close the position requires some serious
              long-term thinking and depends on several factors, many of which
              you will learn throughout the course.
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

  function Nine({ next, pre }) {
    const [game, setGame] = useState(
      new Chess(
        "rnbqkb1r/pppn1ppp/4p3/3pP3/3P4/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 0 1",
      ),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    function pawnBreak() {
      game.move("c5");
      setGame({ ...game });
      setTimeout(() => {
        setArrows([["c5", "d4"]]);
      }, 300);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Pawn Break</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              A <strong>pawn break</strong> is the act of pushing a pawn with
              the goal of breaking the opponent's pawn structure and opening the
              position.
            </p>
            <button onClick={pawnBreak} className="lesson-btn">
              Break in the center
            </button>
            <p className="text-body">
              Pawn breaks can happen for many reasons, most important of which
              is to free up the pieces and undermine the opponent's strong grip
              on the center.
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
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            boardOrientation={"black"}
          />
        </div>
      </div>
    );
  }

  function Ten({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("6k1/5p2/7p/6p1/8/8/5PPP/6K1 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([
      ["h2", "g3"],
      ["g2", "h3"],
      ["g2", "f3"],
      ["f2", "g3"],
    ]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Pawns as Defense</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              In terms of defense, pawns are strongest when they are close
              together on a rank. When they move, they almost always create
              weaknesses that can't be easily defended.
            </p>
            <p className="text-body">
              White's king is pretty safe, whereas blacks defense is full of
              holes and weaknesses.
            </p>
            <p className="text-body">
              Don't move your pawns in front of your king unless you have a good
              reason to!
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
              f6: { border: "2px solid red", borderRadius: "50%" },
              g7: { border: "2px solid red", borderRadius: "50%" },
              h6: { border: "2px solid red", borderRadius: "50%" },
              h5: { border: "2px solid red", borderRadius: "50%" },
              h7: { border: "2px solid red", borderRadius: "50%" },
            }}
            boardOrientation={"black"}
          />
        </div>
      </div>
    );
  }

  function Eleven({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/8/8/5P2/5P2/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Doubled Pawns</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              <strong>Doubled pawns</strong> are two pawns that have the same
              color and are on the same file, usually directly in front of each
              other.
            </p>
            <p className="text-body">
              Doubled pawns are usually not a good thing to have because they
              can't defend each other and the pawn in front limits the movement
              of the pawn in the back. They also create many weaknesses when
              placed in front of the king.
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
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Twelve({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/p2p1p2/1p6/8/1P4P1/P2P3P/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Isolated Pawn</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              An <strong>isolated pawn</strong> is a pawn that can't be defended
              by another pawn. Isolated pawns are weak and often an easy target
              for the opponent's pieces to attack.
            </p>
            <p className="text-body">
              In this position white has one isolated pawn while black has two.
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
              d3: { border: "2px solid red", borderRadius: "50%" },
              d7: { border: "2px solid red", borderRadius: "50%" },
              f7: { border: "2px solid red", borderRadius: "50%" },
            }}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Thirteen({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/1pp1k1P1/5p2/2P2P2/1PK5/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Passed Pawn</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              A <strong>passed pawn</strong> is a pawn that can's be attacked or
              blocked by another pawn. Passed pawns are powerful strategic
              assets, especially toward the end of the game where there aren't
              many pieces to stop them from becoming a queen.
            </p>
            <p className="text-body">
              White has a passed pawn and is winning due to the fact that
              black's king can't stop the passed pawn and defend his own pawns
              at the same time.
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
              g6: { border: "2px solid green", borderRadius: "50%" },
            }}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Fourteen({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/5p2/8/4P3/8/8/8/8 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    function play() {
      game.load("8/5p2/8/4P3/8/8/8/8 b - - 0 1");
      game.move("f5");
      setGame({ ...game });
      setTimeout(() => {
        setArrows([["f7", "f5"]]);
      }, 300);
      setTimeout(() => {
        game.move("exf6");
        setGame({ ...game });
        setTimeout(() => {
          setArrows([["e5", "f6"]]);
        }, 300);
      }, 1500);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">En Passant</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              When any of your pawn steps inside your opponent's side of the
              board (5th rank from your bottom edge of the board), it can
              capture any pawn that moves two squares forward on an adjacent
              file. This especial move is called <strong>en passant</strong>,
              which is french for in passing.
            </p>
            <p style={{ paddingTop: "0" }} className="text-body">
              The pawn captures diagonally towards the square behind the pawn
              that has moved.
            </p>
            <button
              style={{ marginTop: "0" }}
              onClick={play}
              className="lesson-btn"
            >
              Play
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
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Fifteen({ direct, pre }) {
    const [game, setGame] = useState(
      new Chess("8/2p5/3p4/8/3P4/8/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(true);
    const [message, setMessage] = useState("");

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "d5") {
        setGame({ ...game });
        setDraggable(false);
        setTimeout(() => {
          game.move("c5");
          setGame({ ...game });
          setDraggable(true);
        }, 500);
        return true;
      }
      if (move.san == "dxc6") {
        setGame({ ...game });
        setDraggable(false);
        setMessage("That's right :)");
        return true;
      }
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">En Passant</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              <strong>Important:</strong> If you don't capture the pawn
              immediately after it moves two squares forward, you can't capture
              it anymore. In other words you have only one chance to capture en
              passant for each pawn that advances two squares forward.
            </p>
            <p className="text-body">
              Go ahead and push your pawn and then capture the black pawn en
              passant once it moves two squares forward.
            </p>
            <p style={{ paddingTop: "0px" }} className="text-body">
              {message}
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
            boardOrientation={"white"}
            onPieceDrop={makeMove}
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

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
    router.push("/lessons/pieceplay/5");
  }

  function One({ next }) {
    const [game, setGame] = useState(
      new Chess("n7/8/7n/8/8/2N2N2/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Knight</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Since knights are short-range pieces, they like to stay near the
              center from where they could access all parts of the board in just
              a few moves.
            </p>
            <p className="text-body">
              Knights on the corners are miserable, while putting a knight on
              the edge is often not a good idea.
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
              f3: { border: "2px solid green", borderRadius: "50%" },
              c3: { border: "2px solid green", borderRadius: "50%" },
              a8: { border: "2px solid red", borderRadius: "50%" },
              h6: { border: "2px solid red", borderRadius: "50%" },
            }}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Two({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/4b3/8/8/4N3/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([
      ["e6", "g4"],
      ["e6", "c4"],
    ]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Knights Getting Dominated</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              If a knight and a bishop are placed within two squares from each
              other in a straight line, the bishop dominates the knight and does
              not let it move forward.
            </p>
            <p className="text-body">
              Here the black bishop is controlling all of the squares the knight
              can move forward to.
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

  function Three({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/2n3k1/p2p2n1/P1pPp1p1/1p2PpP1/1P3P2/2BB4/6K1 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Knights in Closed Positions</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Since knights can jump over other pieces, they are highly valuable
              in closed positions. In such situations, knights can access
              squares that other pieces cannot reach.
            </p>
            <p className="text-body">
              In this position black is better because of the knight's
              superiority in closed positions.
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

  function Four({ next, pre }) {
    const [game, setGame] = useState(new Chess());
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    function play() {
      game.move("e4");
      setGame({ ...game });
      setTimeout(() => {
        game.move("Nf6");
        setGame({ ...game });
      }, 500);
      setTimeout(() => {
        game.move("e5");
        setGame({ ...game });
      }, 1000);
      setTimeout(() => {
        game.move("Ne4");
        setGame({ ...game });
      }, 1500);
      setTimeout(() => {
        game.move("d3");
        setGame({ ...game });
      }, 2000);
      setTimeout(() => {
        game.move("Nc5");
        setGame({ ...game });
      }, 2500);
      setTimeout(() => {
        game.move("d4");
        setGame({ ...game });
      }, 3000);
      setTimeout(() => {
        game.move("Ne6");
        setGame({ ...game });
      }, 3500);
      setTimeout(() => {
        game.move("d5");
        setGame({ ...game });
      }, 4000);
      setTimeout(() => {
        game.move("Nc5");
        setGame({ ...game });
      }, 4500);
      setTimeout(() => {
        game.move("b4");
        setGame({ ...game });
      }, 5000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Knights and Pawns</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Unlike queens and bishops, knights (and rooks) can be kicked by
              pawns since they can't simultaneously attack a pawn that has
              attacked them.
            </p>
            <button onClick={play} className="lesson-btn">
              Play
            </button>
            <p className="text-body">
              Place your knight on squares that are safe from pawn attacks.
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

  function Five({ direct, pre }) {
    const [game, setGame] = useState(
      new Chess("8/2b2k1p/p4pp1/1p6/5P2/P4KPP/1P3N2/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Knights in Endgames</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              In endgame positions where both sides have a king and a minor
              piece and a few pawns, the side that has a knight would prefer to
              have all of its pawns on one side of the board as knights are
              short-range pieces and are not capable of covering the whole
              board.
            </p>
            <p className="text-body">
              Here black will have an easier play because white's knight can't
              support the pawns on both sides of the board.
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
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight4={true} />
      {sections[index]}
    </div>
  );
}

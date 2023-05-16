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
    router.push("/lessons/pieceplay/4");
  }

  function One({ next }) {
    const [game, setGame] = useState(new Chess("8/8/8/8/3BB3/8/8/8 w - - 0 1"));
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Bishop Pair</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Since bishops are only limited to one color square, having both
              light-square and dark-square bishops means your bishops have
              access to all the squares on the board. Two friendly bishops are
              called the <strong>bishop pair</strong>.
            </p>
            <p className="text-body">
              Having two bishops is usually better than having two knights and
              often better than having a knight and a bishop.
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
              e5: { backgroundColor: "rgba(255,0,0, 0.4)" },
              d5: { backgroundColor: "rgba(255,0,0, 0.4)" },
              f5: { backgroundColor: "rgba(255,0,0, 0.4)" },
              c5: { backgroundColor: "rgba(255,0,0, 0.4)" },
              f6: { backgroundColor: "rgba(255,0,0, 0.4)" },
              g6: { backgroundColor: "rgba(255,0,0, 0.4)" },
              c6: { backgroundColor: "rgba(255,0,0, 0.4)" },
              b6: { backgroundColor: "rgba(255,0,0, 0.4)" },
              f3: { backgroundColor: "rgba(255,0,0, 0.4)" },
              e3: { backgroundColor: "rgba(255,0,0, 0.4)" },
              h7: { backgroundColor: "rgba(255,0,0, 0.4)" },
              g7: { backgroundColor: "rgba(255,0,0, 0.4)" },
              h8: { backgroundColor: "rgba(255,0,0, 0.4)" },
              a8: { backgroundColor: "rgba(255,0,0, 0.4)" },
              b7: { backgroundColor: "rgba(255,0,0, 0.4)" },
              a7: { backgroundColor: "rgba(255,0,0, 0.4)" },
              f2: { backgroundColor: "rgba(255,0,0, 0.4)" },
              g2: { backgroundColor: "rgba(255,0,0, 0.4)" },
              g1: { backgroundColor: "rgba(255,0,0, 0.4)" },
              h1: { backgroundColor: "rgba(255,0,0, 0.4)" },
              b1: { backgroundColor: "rgba(255,0,0, 0.4)" },
              c2: { backgroundColor: "rgba(255,0,0, 0.4)" },
              a1: { backgroundColor: "rgba(255,0,0, 0.4)" },
              b2: { backgroundColor: "rgba(255,0,0, 0.4)" },
              c3: { backgroundColor: "rgba(255,0,0, 0.4)" },
              d3: { backgroundColor: "rgba(255,0,0, 0.4)" },
            }}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Two({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("3rr1k1/ppbb1pp1/2p2nqp/8/8/1BBN1Q1P/PPP2PP1/R3R1K1 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Bishops in Open Positions</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Bishops are better in open positions since they are long-range
              pieces that like to freely cross the whole board in just a few
              moves.
            </p>
            <p className="text-body">
              The board shows an open position where both sides have powerful
              bishops that can influence the game.
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
      new Chess("rr2b3/4kp1p/2p1p1p1/p1PpP3/P2P1P2/8/3KB1PP/RR6 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Good & Bad Bishops</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              A good bishop is a bishop whose movement is not blocked by
              friendly pawns.
            </p>
            <p className="text-body">
              Take a look at this position. White has a light-squared bishop
              while having pawns of mostly dark color. This ensures that the
              bishop can move freely on the board without getting obstructed by
              its own pawns. Black on the other hand has a bad bishop that needs
              several moves just to be able to enter the game.
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
    const [game, setGame] = useState(
      new Chess(
        "r2q1rk1/pp1b1ppp/2p1pn2/3p4/3P1B2/2P1PN2/PP1Q1PPP/R4RK1 w Qq - 0 1",
      ),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Bad Bishop Management</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              If you have bad bishops, try to keep them outside of the pawn
              chain with the same color.
            </p>
            <p className="text-body">
              Here white's bishop is better than black's bishop because it is
              outside of the pawn chain whereas black's bishop is imprisoned by
              the pawns.
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

  function Five({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/8/8/4P3/3PBP2/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([
      ["d3", "c4"],
      ["e4", "d5"],
      ["e4", "f5"],
      ["f3", "g4"],
      ["e3", "f4"],
      ["e3", "d4"],
    ]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Bishop and Pawn Coordination</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Apart from allowing the bishop to move, pawns of opposite color to
              that of the bishop means that the bishop can control one color
              squares while the pawns control the other.
            </p>
            <p className="text-body">
              Here tha dark-square bishop is controlling the dark-square
              weaknesses while the pawns are conveniently controlling the light
              squares. The bishop and the pawns are coordinating very well.
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

  function Six({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/1b4b1/8/8/8/8/1B4B1/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Fianchetto</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Bishops are bright into the game in two ways; either through the
              center or by placing them on their longest diagonals.
            </p>
            <p className="text-body">
              The board show a position where bishops are placed on their
              longest diagonals, which consists of 8 squares each. This is
              called <strong>fianchetto</strong> (read: fee-an-ke-tow).
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
              a1: { backgroundColor: "rgba(255,0,0, 0.4)" },
              b2: { backgroundColor: "rgba(255,0,0, 0.4)" },
              c3: { backgroundColor: "rgba(255,0,0, 0.4)" },
              d4: { backgroundColor: "rgba(255,0,0, 0.4)" },
              e5: { backgroundColor: "rgba(255,0,0, 0.4)" },
              f6: { backgroundColor: "rgba(255,0,0, 0.4)" },
              g7: { backgroundColor: "rgba(255,0,0, 0.4)" },
              h8: { backgroundColor: "rgba(255,0,0, 0.4)" },
              h1: { backgroundColor: "rgba(255,0,0, 0.4)" },
              g2: { backgroundColor: "rgba(255,0,0, 0.4)" },
              f3: { backgroundColor: "rgba(255,0,0, 0.4)" },
              e4: { backgroundColor: "rgba(255,0,0, 0.4)" },
              d5: { backgroundColor: "rgba(255,0,0, 0.4)" },
              c6: { backgroundColor: "rgba(255,0,0, 0.4)" },
              b7: { backgroundColor: "rgba(255,0,0, 0.4)" },
              a8: { backgroundColor: "rgba(255,0,0, 0.4)" },
            }}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Seven({ direct, pre }) {
    const [game, setGame] = useState(new Chess());
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    function play() {
      game.move("g3");
      setGame({ ...game });
      setTimeout(() => {
        game.move("d5");
        setGame({ ...game });
      }, 500);
      setTimeout(() => {
        game.move("Bg2");
        setGame({ ...game });
      }, 1000);
      setTimeout(() => {
        game.move("g6");
        setGame({ ...game });
      }, 1500);
      setTimeout(() => {
        game.move("d4");
        setGame({ ...game });
      }, 2000);
      setTimeout(() => {
        game.move("Bg7");
        setGame({ ...game });
      }, 2500);
      setTimeout(() => {
        game.move("b3");
        setGame({ ...game });
      }, 3000);
      setTimeout(() => {
        game.move("b6");
        setGame({ ...game });
      }, 3500);
      setTimeout(() => {
        game.move("Bb2");
        setGame({ ...game });
      }, 4000);
      setTimeout(() => {
        game.move("Bb7");
        setGame({ ...game });
      }, 4500);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Fianchetto</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Fianchetto is done by pushing the pawn that is in front of the
              knight at the start of the game and placing the bishop on the
              square that the pawn frees up.
            </p>
            <p className="text-body">
              Press the button to see bishops{" "}
              <span className="underline">finachettoed</span> at the start of
              the game.
            </p>
            <button onClick={play} className="lesson-btn">
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
      <PiecePlayNav highlight3={true} />
      {sections[index]}
    </div>
  );
}

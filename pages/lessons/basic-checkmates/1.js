import { Chess } from "chess.js";
import { useState } from "react";
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
    <Six direct={direct} pre={pre} />,
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
    router.push("/lessons/basic-checkmates/2");
  }

  function One({ next }) {
    const [game, setGame] = useState(
      new Chess("8/pppppppp/8/8/8/8/PPPPPPPP/8 w - - 0 1"),
    );

    return (
      <div className="flex">
        <CheckmatesNav highlight1={true} />
        <div className="container">
          <div className="text-box">
            <div className="text-title-div">
              <h2 className="text-title">The Back Rank</h2>
            </div>
            <div className="text-body-div">
              <p className="text-body">
                Your first row, where you put your king and other pieces behind
                your pawns is called your <strong>back rank</strong>.
              </p>
              <p className="text-body">
                The board shows both white's and black's back ranks.
              </p>
            </div>
            <div className="arrows-div">
              <FontAwesomeIcon
                className="left-arrow-locked"
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
              customArrows={[]}
              customArrowColor={"rgba(255,0,0, 0.5)"}
              customSquareStyles={{
                a1: { backgroundColor: "#ff000080" },
                b1: { backgroundColor: "#ff000080" },
                c1: { backgroundColor: "#ff000080" },
                d1: { backgroundColor: "#ff000080" },
                e1: { backgroundColor: "#ff000080" },
                f1: { backgroundColor: "#ff000080" },
                g1: { backgroundColor: "#ff000080" },
                h1: { backgroundColor: "#ff000080" },
                h8: { backgroundColor: "#ff000080" },
                a8: { backgroundColor: "#ff000080" },
                b8: { backgroundColor: "#ff000080" },
                c8: { backgroundColor: "#ff000080" },
                d8: { backgroundColor: "#ff000080" },
                e8: { backgroundColor: "#ff000080" },
                f8: { backgroundColor: "#ff000080" },
                g8: { backgroundColor: "#ff000080" },
                h8: { backgroundColor: "#ff000080" },
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  function Two({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("7k/r5pp/8/p7/8/7P/3R1PP1/6K1 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);

    function giveMate() {
      game.move("Rd8");
      setGame({ ...game });
      setTimeout(() => {
        setArrows([["d8", "h8"]]);
      }, 300);
    }

    return (
      <div className="flex">
        <CheckmatesNav highlight1={true} />
        <div className="container">
          <div className="text-box">
            <div className="text-title-div">
              <h2 className="text-title">The Back Rank</h2>
            </div>
            <div className="text-body-div">
              <p className="text-body">
                The back rank is important because the kings often stay there
                for the majority of the game, and if you fail to protect your
                back rank, unexpected checkmates could happen!
              </p>
              <button onClick={giveMate} className="lesson-btn">
                Give mate
              </button>
              <p className="text-body">
                Here white checkmates black because black's king is trapped
                behind its own pawns and the back rank is left unprotected.
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
      </div>
    );
  }

  function Three({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("7k/r5pp/8/p7/8/7P/3R1PP1/6K1 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [squares, setSquares] = useState({});

    function protect() {
      game.undo();
      game.move("Ra8");
      setGame({ ...game });
      setTimeout(() => {
        setArrows([["a8", "h8"]]);
      }, 300);
    }

    function move() {
      game.undo();
      game.move("h6");
      setGame({ ...game });
      setTimeout(() => {
        setArrows([["h8", "h7"]]);
      }, 300);
    }

    return (
      <div className="flex">
        <CheckmatesNav highlight1={true} />
        <div className="container">
          <div className="text-box">
            <div className="text-title-div">
              <h2 className="text-title">Protecting The Back Rank</h2>
            </div>
            <div className="text-body-div">
              <p className="text-body">
                The only pieces that can give back-rank mate are rooks and
                queens. They are also the best protectors of the back rank.
              </p>
              <p className="text-body">
                To protect your back rank, either do it with a piece, or move
                your pawns to give your king a escape square in case of a check.
              </p>
              <div className="flex">
                <button onClick={protect} className="lesson-btn">
                  Protect
                </button>
                <button onClick={move} className="lesson-btn">
                  Move Pawn
                </button>
              </div>
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
              customArrowColor={"rgba(0,255,0, 0.5)"}
              customArrows={arrows}
              customSquareStyles={squares}
              boardOrientation={"black"}
            />
          </div>
        </div>
      </div>
    );
  }

  function Four({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("3r2k1/3r1pp1/7p/8/8/8/Q4PPP/6K1 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [squares, setSquares] = useState({});
    const [message, setMessage] = useState("");

    function play() {
      game.move("Qa1");
      setGame({ ...game });
      setTimeout(() => {
        setMessage("White tries to protect the back rank with the queen.");
      }, 300);
    }

    return (
      <div className="flex">
        <CheckmatesNav highlight1={true} />
        <div className="container">
          <div className="text-box">
            <div className="text-title-div">
              <h2 className="text-title">Protecting The Back Rank</h2>
            </div>
            <div className="text-body-div">
              <p className="text-body">
                Sometimes you can't protect your back rank with a single piece
                because your opponent has a greater attacking force. Press the
                button to see why.
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
              customArrowColor={"rgba(0,255,0, 0.5)"}
              customArrows={arrows}
              customSquareStyles={squares}
            />
          </div>
        </div>
      </div>
    );
  }

  function Five({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("3r2k1/3r1pp1/7p/8/8/8/5PPP/Q5K1 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [squares, setSquares] = useState({});
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [visible, setVisible] = useState(false);

    function play1() {
      game.move("Rd1");
      setGame({ ...game });
      setTimeout(() => {
        setMessage1("Black gives the check anyway!");
        setVisible(true);
      }, 300);
    }

    function play2() {
      game.move("Qxd1");
      setGame({ ...game });
      setTimeout(() => {
        setMessage2(
          "White has to take the rook because there is no other legal move to play.",
        );
      }, 300);
    }

    return (
      <div className="flex">
        <CheckmatesNav highlight1={true} />
        <div className="container">
          <div className="text-box">
            <div className="text-title-div">
              <h2 className="text-title">Protecting The Back Rank</h2>
            </div>
            <div className="text-body-div">
              <p className="text-body">But it' not enough!</p>
              <button onClick={play1} className="lesson-btn">
                Play
              </button>
              <p className="text-body">{message1}</p>
              {visible && (
                <button onClick={play2} className="lesson-btn">
                  Play
                </button>
              )}
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
          <div style={{ pointerEvents: "none" }} className="board">
            <Chessboard
              position={game.fen()}
              boardWidth={325}
              areArrowsAllowed={false}
              showBoardNotation={false}
              arePiecesDraggable={false}
              customArrowColor={"rgba(0,255,0, 0.5)"}
              customArrows={arrows}
              customSquareStyles={squares}
            />
          </div>
        </div>
      </div>
    );
  }

  function Six({ direct, pre }) {
    const [game, setGame] = useState(
      new Chess("3r2k1/5pp1/7p/8/8/8/5PPP/3Q2K1 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [squares, setSquares] = useState({});
    const [message, setMessage] = useState("");

    function play() {
      game.move("Rxd1");
      setGame({ ...game });
      setTimeout(() => {
        setArrows([["d1", "g1"]]);
      }, 300);
    }

    return (
      <div className="flex">
        <CheckmatesNav highlight1={true} />
        <div className="container">
          <div className="text-box">
            <div className="text-title-div">
              <h2 className="text-title">Protecting The Back Rank</h2>
            </div>
            <div className="text-body-div">
              <p className="text-body">
                And as you guessed, black takes the queen and checkmates white!
              </p>
              <button onClick={play} className="lesson-btn">
                Play
              </button>
              <p className="text-body">
                White lost because black had the advantage in numbers.
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
              customSquareStyles={squares}
            />
          </div>
        </div>
      </div>
    );
  }

  return <>{sections[index]}</>;
}

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
    router.push("/lessons/basic-checkmates/7");
  }

  function One({ next }) {
    const [game, setGame] = useState(
      new Chess("8/8/8/3k4/8/8/8/KQ6 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Farewell to the Ladder</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Now that we are left with only one major piece, the ladder method
              no longer is possible. But no worries! The strategy is still the
              same: Force the king to the edge of the board and deliver
              checkmate.
            </p>
            <p className="text-body">
              For that we need to use our king like a support piece. A lonely
              queen is never able to give checkmate on an empty board on her
              own.
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
      new Chess("8/8/8/3k4/8/8/8/KQ6 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");
    const [squares, setSquares] = useState({});

    function play() {
      game.move("Qb4");
      setGame({ ...game });
      setTimeout(() => {
        setArrows([
          ["b4", "b8"],
          ["b4", "h4"],
          ["b4", "f8"],
        ]);
        setMessage(
          "Notice how we didn't need to give checks. The king now has only three moves, one of which stays close to the queen. and two moves away. ",
        );
        setSquares({
          c6: { backgroundColor: "green" },
          e6: { backgroundColor: "green" },
          e5: { backgroundColor: "green" },
        });
      }, 300);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Cage Again</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              We begin by limiting the king's freedom as much as possible;
              remember the cage thing? We need to hug the king while keeping our
              own queen safe from capture
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
            customArrows={arrows}
            customSquareStyles={squares}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Three({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/8/3k4/1Q6/8/8/K7 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");
    const [squares, setSquares] = useState({});
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        game.move("Kc6");
        setGame({ ...game });
        setVisible(true);
        setMessage(
          "Now what? Our queen can't force the king back anymore. Giving checks just allows the king to stay in the center of the board. This is where we need to bring our king to support the queen.",
        );
      }, 1000);
    }, []);

    function play() {
      game.move("Kb2");
      setGame({ ...game });
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Enter the King</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">The king decided to stay close!</p>
            <p className="text-body">{message}</p>
            {visible && (
              <button onClick={play} className="lesson-btn">
                Play
              </button>
            )}
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
            customArrows={arrows}
            customSquareStyles={squares}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Four({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/2k5/8/1Q6/8/1K6/8 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");
    const [squares, setSquares] = useState({});
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        game.move("Kd5");
        setGame({ ...game });
        setVisible(true);
      }, 1000);
    }, []);

    function play() {
      game.move("Kc3");
      setGame({ ...game });
      setTimeout(() => {
        game.move("Kc6");
        setGame({ ...game });
      }, 1000);
      setTimeout(() => {
        game.move("Kc4");
        setGame({ ...game });
        setTimeout(() => {
          setArrows([["c4", "d5"]]);
          setMessage(
            "Now the black king can't stay close to the queen and has to go back!",
          );
        }, 300);
      }, 2000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Cage Shrinks</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              We bring the king closer and closer until he is able to support
              the queen.
            </p>
            {visible && (
              <button onClick={play} className="lesson-btn">
                Play
              </button>
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
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customArrows={arrows}
            customSquareStyles={squares}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Five({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/2k5/8/1QK5/8/8/8 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");
    const [squares, setSquares] = useState({});
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        game.move("Kc7");
        setGame({ ...game });
        setVisible(true);
      }, 1000);
    }, []);

    function play() {
      game.move("Qb5");
      setGame({ ...game });
      setTimeout(() => {
        setMessage(
          "We move forward and make the cage even smaller. This is what we always do if the king gives way or is pushed back by force, until the opponent's king enters one of the four sides of the board.",
        );
      }, 300);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Cage Shrinks</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">The king is pushed back, What do we do?</p>
            {visible && (
              <button onClick={play} className="lesson-btn">
                Play
              </button>
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
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customArrows={arrows}
            customSquareStyles={squares}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Six({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/2k5/8/1Q6/2K5/8/8/8 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");
    const [squares, setSquares] = useState({});
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        game.move("Kd6");
        setGame({ ...game });
        setVisible(true);
      }, 1000);
    }, []);

    function play() {
      game.move("Qc5");
      setGame({ ...game });
      setTimeout(() => {
        setMessage(
          "Forcing the black king to move towards one of the edges, while keeping our king close to the queen to give support.",
        );
      }, 300);
      setTimeout(() => {
        game.move("Ke6");
        setGame({ ...game });
      }, 1000);
      setTimeout(() => {
        game.move("Kd4");
        setGame({ ...game });
      }, 2000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Cage Shrinks</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Our king can't move forward anymore, but is supporting the queen.
              So we begin to give checks.
            </p>
            {visible && (
              <button onClick={play} className="lesson-btn">
                Play
              </button>
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
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customArrows={arrows}
            customSquareStyles={squares}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Seven({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/4k3/2Q5/3K4/8/8/8 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");
    const [squares, setSquares] = useState({});
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        game.move("Kf6");
        setGame({ ...game });
        setVisible(true);
      }, 1000);
    }, []);

    function play() {
      game.move("Qe5");
      setGame({ ...game });
      setTimeout(() => {
        setMessage(
          "The black king has no choice but to get closer to either the top edge or the right one. Regardless of what he does, our strategy is the same as before: Which is to limit black king's freedom, keeping our king and queen close together, and forcing the king back.",
        );
      }, 300);
      setTimeout(() => {
        game.move("Kf7");
        setGame({ ...game });
      }, 1000);
      setTimeout(() => {
        game.move("Kd5");
        setGame({ ...game });
      }, 2000);
      setTimeout(() => {
        game.move("Kg6");
        setGame({ ...game });
      }, 3000);
      setTimeout(() => {
        game.move("Ke6");
        setGame({ ...game });
      }, 4000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Pushing the King Further Back</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Continuing to push the king back.</p>
            {visible && (
              <button onClick={play} className="lesson-btn">
                Play
              </button>
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
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customArrows={arrows}
            customSquareStyles={squares}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Eight({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/4K1k1/4Q3/8/8/8/8 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");
    const [squares, setSquares] = useState({});
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        game.move("Kh7");
        setGame({ ...game });
        setVisible(true);
      }, 1000);
    }, []);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Objective No.1: Complete</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The black king is forced to the edge, finally!
            </p>
            <p className="text-body">
              OK, the first phase of our strategy is complete. Now we have two
              options: We can either bring our king closer, or keep the black
              king imprisoned in the file that he is in. Although both of them
              are good moves, one of them is safe and the other involves a huge
              risk!
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
            customArrows={arrows}
            customSquareStyles={squares}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Nine({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/7k/4K3/4Q3/8/8/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [squares, setSquares] = useState({});
    const [visible, setVisible] = useState(false);

    function play1() {
      game.move("Kf7");
      setGame({ ...game });
      setTimeout(() => {
        setMessage1("The black king has only one move.");
      }, 300);
      setTimeout(() => {
        game.move("Kh6");
        setGame({ ...game });
        setTimeout(() => {
          setVisible(true);
        }, 300);
      }, 1000);
    }

    function play2() {
      game.move("Qf5");
      setGame({ ...game });
      setTimeout(() => {
        setMessage2("We also bring our queen closer.");
      }, 300);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Lurking Danger</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Let's see what happens if we carelessly bring our pieces close to
              the black king when he is on the edge of the board.
            </p>
            <button onClick={play1} className="lesson-btn">
              Play
            </button>
            <p style={{ paddingTop: "0px" }} className="text-body">
              {message1}
            </p>
            {visible && (
              <button onClick={play2} className="lesson-btn">
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
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customArrows={arrows}
            customSquareStyles={squares}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Ten({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/5K2/7k/5Q2/8/8/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([
      ["f5", "h7"],
      ["f5", "h5"],
      ["f7", "g7"],
    ]);
    const [message, setMessage] = useState("");
    const [squares, setSquares] = useState({});
    const [visible, setVisible] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Stalemate</h2>
          </div>
          <div className="text-body-div">
            <p style={{ paddingTop: "0px" }} className="text-body">
              Take a look at this position. It is black's turn to move, but
              white is controlling <span className="underline">all</span> of the
              squares the black king can go to. Is this checkmate?
            </p>
            <p style={{ paddingTop: "0px" }} className="text-body">
              The answer is a big NO! This is not checkmate simply because black
              is not in check! This is called a <strong>stalemate</strong>.
            </p>
            <p style={{ paddingTop: "0px" }} className="text-body">
              A Stalemate happens when a side who must make a move has no legal
              moves to play and is not in check either.
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
            customArrows={arrows}
            customSquareStyles={squares}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Eleven({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/5K2/7k/5Q2/8/8/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([
      ["f5", "h7"],
      ["f5", "h5"],
      ["f7", "g7"],
    ]);
    const [message, setMessage] = useState("");
    const [squares, setSquares] = useState({});
    const [visible, setVisible] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Stalemate</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The bad news, or the good news depending if you are attacking or
              defending, is that in case of an stalemate, the game automatically
              ends and no winner is declared. The game ends in a draw.
            </p>
            <p className="text-body">
              If you have a winning position like this, stalemate is something
              you should avoid wholeheartedly, and if you're the defending side,
              a stalemate can save you from losing the game.
            </p>
            <p style={{ paddingTop: "0px" }} className="text-body">
              Alright, back to the position.
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
            customArrows={arrows}
            customSquareStyles={squares}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Twelve({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/7k/4K3/4Q3/8/8/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [squares, setSquares] = useState({});
    const [visible, setVisible] = useState(false);

    function play1() {
      game.move("Qg3");
      setGame({ ...game });
      setTimeout(() => {
        setMessage1(
          "We trap the king on the edge of the board while staying safely away from him in fear of a stalemate!",
        );
        setArrows([["g3", "g8"]]);
      }, 300);
      setTimeout(() => {
        game.move("Kh6");
        setGame({ ...game });
        setArrows([["g3", "g8"]]);
        setTimeout(() => {
          setVisible(true);
        }, 300);
      }, 1000);
    }

    function play2() {
      game.move("Kf6");
      setGame({ ...game });
      setTimeout(() => {
        setMessage2(
          "Bringing the king closer to support the queen delivering the final blow!",
        );
      }, 300);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Avoiding the Stalemate</h2>
          </div>
          <div className="text-body-div">
            <p style={{ paddingTop: "0" }} className="text-body">
              Our other option is much safer.
            </p>
            <button
              style={{ marginTop: "0" }}
              onClick={play1}
              className="lesson-btn"
            >
              Play
            </button>
            <p style={{ paddingTop: "0" }} className="text-body">
              {message1}
            </p>
            {visible && (
              <button
                style={{ marginTop: "0" }}
                onClick={play2}
                className="lesson-btn"
              >
                Play
              </button>
            )}
            <p style={{ paddingTop: "0" }} className="text-body">
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
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customArrows={arrows}
            customSquareStyles={squares}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Thirteen({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/5K1k/8/8/6Q1/8/8 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [squares, setSquares] = useState({});
    const [draggable, setDraggable] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        game.move("Kh7");
        setGame({ ...game });
        setDraggable(true);
      }, 1000);
    }, []);

    function makeMove(source, target) {
      const move = game.move({
        from: source,
        to: target,
      });
      if (move == null) return false;

      if (move.san == "Qg7#") {
        setGame({ ...game });
        setDraggable(false);
        setMessage1("Good job :)");
        setMessage2(
          "Although this was a few notches up in terms of difficulty compared to the other checkmates you've learned so far, I assure you there's not much to it. You just need to follow a couple of guidelines, and oh, stay away from stalemate!",
        );
      } else {
        setGame({ ...game });
        setDraggable(false);
        setMessage1("Try again");
        setTimeout(() => {
          game.undo();
          setGame({ ...game });
          setMessage1("");
          setDraggable(true);
        }, 1000);
      }

      return true;
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Checkmate</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Go ahead and finish the job!</p>
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
        <div className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customArrows={arrows}
            customSquareStyles={squares}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
            onPieceDrop={makeMove}
            arePiecesDraggable={draggable}
          />
        </div>
      </div>
    );
  }

  function Fourteen({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/6Qk/5K2/8/8/8/8/8 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [squares, setSquares] = useState({});
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Summary</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              To checkmate with a king and queen against a lonely king:
            </p>
            <p className="text-body">
              Bring your queen as close to the opponent's king as possible
              without losing it.
            </p>
            <p className="text-body">
              If the king moves away, get closer. If not, bring your own king
              forward to support the queen and force the opponent's king back.
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
            customArrows={arrows}
            customSquareStyles={squares}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
            arePiecesDraggable={draggable}
          />
        </div>
      </div>
    );
  }

  function Fifteen({ direct, pre }) {
    const [game, setGame] = useState(
      new Chess("8/6Qk/5K2/8/8/8/8/8 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [squares, setSquares] = useState({});
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Summary</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Only check if you think it's necessary.</p>
            <p className="text-body">
              Once the opponent's king reaches one of the edges of the board,
              make sure the king can't escape back toward the center by placing
              your queen along the rank or file that the king is in.
            </p>
            <p className="text-body">
              Finally, bring your king close to support the queen and deliver
              checkmate by hugging the opponent's king while she is defended by
              your king.
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
            customArrows={arrows}
            customSquareStyles={squares}
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
      <CheckmatesNav highlight6={true} />
      {sections[index]}
    </div>
  );
}

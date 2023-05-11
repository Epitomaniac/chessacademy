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
    <Thirteen direct={direct} pre={pre} />,
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
    router.push("/lessons/basic-checkmates/5");
  }

  function One({ next }) {
    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Checkmates: to Give or to Get?</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              In previous sections we became familiar with some common checkmate
              positions that can occur during a game of chess.
            </p>
            <p className="text-body">
              But not all checkmates are as sudden and short as we saw
              previously. Most of the times you have to force checkmate, rather
              than your opponent giving it to you by mistake.
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
    const [game, setGame] = useState(
      new Chess("1Q5k/R7/8/8/8/8/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([
      ["a7", "h7"],
      ["b8", "h8"],
    ]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Checkmates Are Earned</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Suppose after a long fight you are left with a queen and a rook
              and your opponent has only a king.
            </p>
            <p className="text-body">
              You obviously have a winning position, but checkmates don't happen
              on their own! You need to deliver them, and how you can do that
              requires both knowledge and skill.
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
      new Chess("4k3/8/8/8/8/4K3/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);
    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Edge vs The Center</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              In this position, what advantage do you think the white king has
              over his black counterpart? If your answer is that white's king
              has more freedom of movement, then your are correct.
            </p>
            <p className="text-body">
              White's king has three ranks to move to while black has only two,
              because he is standing at the edge of the board. More often than
              not, when chess pieces move toward the center of the board, they
              become more free.
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
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Four({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("1Q2k3/R7/8/8/8/4K3/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([
      ["a7", "h7"],
      ["b8", "h8"],
    ]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Mate on the Edge</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              By now you must have realized that giving checkmate is all about
              limiting the freedom of your opponent's king as much as possible.
              When facing a lonely king, usually the most efficient way to give
              mate is to force him to the edge of the board.
            </p>
            <p className="text-body">
              Take a look at this position; the white rook is controlling all of
              black king's escape squares while the queen is delivering mate.
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
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Five({ next, pre }) {
    const [game, setGame] = useState(new Chess("8/8/8/3k4/8/8/8/8 w - - 0 1"));
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Cage</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The secret to understanding how a checkmate is delivered is to
              imagine your opponent's king in a cage.
            </p>
            <p className="text-body">
              On an empty board, the king is imprisoned in an 8 X 8 cage. This
              is as big as the cage can ever be since the king has all the 64
              squares to go to. But what happens if we place a major piece on
              the board, like a rook for example?
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
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Six({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/8/3k4/8/2R5/8/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([
      ["c3", "c8"],
      ["c3", "h3"],
    ]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Cage</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Now his highness can't enjoy the royal freedom he used to have
              with an empty board! The king is now in a 5 X 5 cage, which is
              only 25 squares.
            </p>
            <p className="text-body">
              Since checkmate is about limiting{" "}
              <span className="underline">all</span> of the squares a king has
              access to, our goal is to force the king to an area of the board
              that gives him less freedom, which is one of the 4 edges.
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
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Seven({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/8/8/4k3/8/8/QR5K w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);
    const [message, setMessage] = useState("");

    function play() {
      game.move("Rb3");
      setGame({ ...game });
      setTimeout(() => {
        setMessage(
          "We begin by limiting the king's access to the bottom of the board.",
        );
        setArrows([["b3", "h3"]]);
      }, 300);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Ladder</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Alright, now we know what to do: 1-Force the king to the edge of
              the board; it doesn't matter which one. In this case we have
              chosen the top edge of the board. 2-Deliver checkmate once the
              king is trapped.
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
            arePiecesDraggable={draggable}
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Eight({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/8/8/4k3/1R6/8/Q6K b - - 0 1"),
    );
    const [arrows, setArrows] = useState([["b3", "h3"]]);
    const [draggable, setDraggable] = useState(false);
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [visible1, setVisible1] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        game.move("Kf4");
        setGame({ ...game });
        setArrows([["b3", "h3"]]);
        setMessage1(
          "The king doesn't want to go back! So we have to force him back.",
        );
        setVisible1(true);
      }, 1000);
    }, []);

    function play() {
      game.move("Qa4");
      setGame({ ...game });
      setTimeout(() => {
        setArrows([
          ["a4", "h4"],
          ["b3", "h3"],
        ]);
      }, 300);
      setTimeout(() => {
        game.move("Ke5");
        setArrows([
          ["a4", "h4"],
          ["b3", "h3"],
        ]);
        setGame({ ...game });
        setMessage2(
          "We forced the king back. Notice that we didn't move the rook because it was already doing its job. Don't move a piece twice unless it's necessary.",
        );
      }, 1500);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Ladder</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">{message1}</p>
            {visible1 && (
              <button onClick={play} className="lesson-btn">
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
            arePiecesDraggable={draggable}
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Nine({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/8/4k3/Q7/1R6/8/7K b - - 0 1"),
    );
    const [arrows, setArrows] = useState([["a4", "h4"]]);
    const [draggable, setDraggable] = useState(false);
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [visible1, setVisible1] = useState(false);
    const [styleFirst, setStyleFirst] = useState({});
    const [styleSecond, setStyleSecond] = useState({});

    useEffect(() => {
      setTimeout(() => {
        game.move("Ke6");
        setGame({ ...game });
        setArrows([["a4", "h4"]]);
        setMessage1(
          "This time the king went back voluntarily. What should we do?",
        );
        setVisible1(true);
      }, 1000);
    }, []);

    function pickFirst() {
      setMessage2("Correct!");
      setStyleFirst({ borderColor: "#2bdb2b" });
      setStyleSecond({});
    }

    function pickSecond() {
      setMessage2("Not correct");
      setStyleSecond({ borderColor: "#d42c2c" });
      setStyleFirst({});
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Ladder</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">{message1}</p>
            {visible1 && (
              <>
                <div
                  style={styleFirst}
                  onClick={pickFirst}
                  className="first-option"
                >
                  <p className="text-body">
                    Limit the rank under the king so that it can't come down
                    again.
                  </p>
                </div>
                <div
                  style={styleSecond}
                  onClick={pickSecond}
                  className="second-option"
                >
                  <p className="text-body">
                    Give a check trying to force the king further back.
                  </p>
                </div>
              </>
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
            arePiecesDraggable={draggable}
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Ten({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/4k3/8/Q7/1R6/8/7K w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");

    function play() {
      game.move("Qa6");
      setGame({ ...game });
      setTimeout(() => {
        game.move("Ke5");
        setGame({ ...game });
        setTimeout(() => {
          setMessage1(
            "The king moved down the board and we have to repeat the same process again.",
          );
          setMessage2(
            "Beginners love to give meaningless checks when they can, but you're better than them, right?",
          );
        }, 300);
      }, 1000);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Checks are a Means </h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Giving the check here achieves nothing.</p>
            <button onClick={play} className="lesson-btn">
              Play
            </button>
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
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Eleven({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/4k3/8/Q7/1R6/8/7K w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [visible, setVisible] = useState(false);
    const [disabled, setDisabled] = useState(false);

    function play1() {
      game.move("Rb5");
      setGame({ ...game });
      setTimeout(() => {
        setMessage1("Access denied.");
        setArrows([["b5", "h5"]]);
      }, 300);
      setTimeout(() => {
        game.move("Kd6");
        setArrows([["b5", "h5"]]);
        setVisible(true);
        setGame({ ...game });
      }, 1000);
    }

    function play2() {
      setDisabled(true);
      game.move("Qa6");
      setGame({ ...game });
      setTimeout(() => {
        setMessage2("Continuing to push the king back");
        setArrows([
          ["b5", "h5"],
          ["a6", "h6"],
        ]);
      }, 300);
      setTimeout(() => {
        game.move("Kd7");
        setArrows([
          ["b5", "h5"],
          ["a6", "h6"],
        ]);
        setVisible(true);
        setGame({ ...game });
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
              Instead of giving check, we close the southern border.
            </p>
            <button disabled={disabled} onClick={play1} className="lesson-btn">
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
            arePiecesDraggable={draggable}
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Twelve({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/3k4/Q7/1R6/8/8/8/7K w - - 0 1"),
    );
    const [arrows, setArrows] = useState([["a6", "h6"]]);
    const [draggable, setDraggable] = useState(true);
    const [clickable, setClickable] = useState(true);
    const [moved, setMoved] = useState(false);
    const [message, setMessage] = useState("");

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) {
        setArrows([["a6", "h6"]]);
        return false;
      }
      if (!moved) {
        if (move.san == "Rb7+") {
          setGame({ ...game });
          setMessage("Nice! Can you finish the job?");
          setDraggable(false);
          setArrows([
            ["b7", "h7"],
            ["a6", "h6"],
          ]);
          setTimeout(() => {
            game.move("Kd8");
            setGame({ ...game });
            setArrows([
              ["b7", "h7"],
              ["a6", "h6"],
            ]);
            setMoved(true);
            setDraggable(true);
          }, 1000);
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
            setArrows([["a6", "h6"]]);
          }, 1000);
          return true;
        }
      } else if (moved) {
        if (move.san == "Qa8#") {
          setGame({ ...game });
          setMessage("Well done :) Black is checkmated. White wins.");
          setDraggable(false);
          setClickable(false);
          setArrows([
            ["b7", "h7"],
            ["a8", "h8"],
          ]);
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
            setArrows([
              ["b7", "h7"],
              ["a6", "h6"],
            ]);
          }, 1000);
          return true;
        }
      }
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Ladder</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">You know what to do right?</p>
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
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
            onPieceDrop={makeMove}
          />
        </div>
      </div>
    );
  }

  function Thirteen({ direct, pre }) {
    const [game, setGame] = useState(
      new Chess("Q2k4/1R6/8/8/8/8/8/7K w - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Ladder</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              This type of checkmate where we push the opponent's king back row
              by row is called <strong>ladder mate</strong>. You don't have to
              follow this method though; you can deliver checkmate however you
              like. But a methodical approach is best when you're just learning
              the game.
            </p>
            <p className="text-body">
              Just be careful not to lose your rook and don't give check if it
              doesn't give mate or force the king back.
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
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight4={true} />
      {sections[index]}
    </div>
  );
}

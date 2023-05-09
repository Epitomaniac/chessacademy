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
    <Four direct={direct} pre={pre} />,
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
    router.push("/lessons/basic-checkmates/3");
  }

  function One({ next }) {
    const [game, setGame] = useState(
      new Chess("8/8/8/8/8/R2Q2Q1/R2R3B/8 w - - 0 1"),
    );

    return (
      <div className="flex">
        <CheckmatesNav highlight2={true} />
        <div className="container">
          <div className="text-box">
            <div className="text-title-div">
              <h2 className="text-title">The Battery</h2>
            </div>
            <div className="text-body-div">
              <p className="text-body">
                Whenever two or more long-range pieces line up together to
                attack, they form what is called a <strong>battery</strong>.
              </p>
              <p style={{ paddingTop: "0px" }} className="text-body">
                The board shows some of the most common battery formations.
              </p>
              <p style={{ paddingTop: "0px" }} className="text-body">
                The piece in the front brings the full force of the attack while
                the one in the back gives support. So it often makes more sense
                for the more powerful piece to stand in front of the battery.
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
              customArrows={[
                ["a2", "a8"],
                ["d2", "d8"],
                ["h2", "b8"],
              ]}
              customArrowColor={"rgba(255,0,0, 0.5)"}
            />
          </div>
        </div>
      </div>
    );
  }

  function Two({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("1k6/1Q6/8/8/8/8/6B1/8 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([
      ["b7", "b8"],
      ["b7", "c8"],
      ["b7", "a8"],
      ["b7", "a7"],
      ["b7", "c7"],
      ["g2", "b7"],
    ]);
    const [squares, setSquares] = useState({});

    return (
      <div className="flex">
        <CheckmatesNav highlight2={true} />
        <div className="container">
          <div className="text-box">
            <div className="text-title-div">
              <h2 className="text-title">The Battery</h2>
            </div>
            <div className="text-body-div">
              <p className="text-body">
                Here black is checkmated. The white queen is giving check while
                controlling all of black's escape squares. Black's king can't
                capture white's queen because it is defended by the bishop.
              </p>
              <p style={{ paddingTop: "0px" }} className="text-body">
                Whenever a side's queen hugs the opponent's king at the side of
                the board like this and the queen can't be captured, it is
                checkmate.
              </p>
              <p style={{ paddingTop: "0px" }} className="text-body">
                White's using a battery to deliver mate, which is a common
                strategy.
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
      </div>
    );
  }

  function Three({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("1br2r2/ppq2p1k/2pp2pp/5b2/8/1P5P/PBP1PPP1/2RQRBK1 w - - 0 21"),
    );
    const [arrows, setArrows] = useState([]);
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [visible, setVisible] = useState(false);
    const [draggable, setDraggable] = useState(true);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Qd4") {
        setGame({ ...game });
        setMessage1("Well done :)");
        setArrows([["b2", "g7"]]);
        setDraggable(false);
        setVisible(true);
        return true;
      } else {
        setGame({ ...game });
        setMessage1(":( Try again");
        setDraggable(false);
        setTimeout(() => {
          setMessage1("");
          game.undo();
          setGame({ ...game });
          setDraggable(true);
        }, 800);
        return true;
      }
    }

    function play() {
      game.move("d5");
      setGame({ ...game });
      setTimeout(() => {
        setArrows([["b8", "h2"]]);
        setMessage2(
          "However black doesn't realize it and tries to create his own battery.",
        );
      }, 300);
    }

    return (
      <div className="flex">
        <CheckmatesNav highlight2={true} />
        <div className="container">
          <div className="text-box">
            <div className="text-title-div">
              <h2 className="text-title">Creating a Battery</h2>
            </div>
            <div className="text-body-div">
              <p className="text-body">
                Can you find a move that forms a battery?
              </p>
              <p className="text-body">{message1}</p>
              {visible && (
                <p className="text-body">
                  White forms a battery and threatens checkmate.
                </p>
              )}
              {visible && (
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
          <div
            style={visible ? { pointerEvents: "none" } : null}
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
              onPieceDrop={makeMove}
            />
          </div>
        </div>
      </div>
    );
  }

  function Four({ direct, pre }) {
    const [game, setGame] = useState(
      new Chess(
        "1br2r2/ppq2p1k/2p3pp/3p1b2/3Q4/1P5P/PBP1PPP1/2R1RBK1 w - - 0 21",
      ),
    );
    const [arrows, setArrows] = useState([]);
    const [message, setMessage] = useState("");
    const [draggable, setDraggable] = useState(true);

    function makeMove(sourceSquare, targetSquare) {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move == null) return false;
      if (move.san == "Qg7#") {
        setGame({ ...game });
        setMessage("Well done :) White wins.");
        setDraggable(false);
        return true;
      } else {
        setGame({ ...game });
        setMessage("That's not the move!");
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
      <div className="flex">
        <CheckmatesNav highlight2={true} />
        <div className="container">
          <div className="text-box">
            <div className="text-title-div">
              <h2 className="text-title">Creating a Battery</h2>
            </div>
            <div className="text-body-div">
              <p className="text-body">
                Can you punish black's terrible mistake and deliver checkmate?
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
          <div className="board">
            <Chessboard
              position={game.fen()}
              boardWidth={325}
              areArrowsAllowed={false}
              showBoardNotation={false}
              arePiecesDraggable={draggable}
              customArrowColor={"rgba(255,0,0, 0.5)"}
              customArrows={arrows}
              onPieceDrop={makeMove}
            />
          </div>
        </div>
      </div>
    );
  }

  return <>{sections[index]}</>;
}

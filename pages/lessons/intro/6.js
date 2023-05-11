import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useState } from "react";
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
    router.push("/lessons/intro/7");
  }

  function One({ next }) {
    const [styleFirst, setStyleFirst] = useState({});
    const [styleSecond, setStyleSecond] = useState({});
    const [message, setMessage] = useState("");

    function pickFirst() {
      setStyleFirst({ borderColor: "#2bdb2b" });
      setStyleSecond({});
      setMessage("Correct :)");
    }
    function pickSecond() {
      setStyleSecond({ borderColor: "#d42c2c" });
      setStyleFirst({});
      setMessage("Not correct :(");
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Quiz: Movement</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Can the rook move backwards?</p>
            <div
              onClick={pickFirst}
              style={styleFirst}
              className="first-option"
            >
              <p className="option-text">Yes</p>
            </div>
            <div
              onClick={pickSecond}
              style={styleSecond}
              className="second-option"
            >
              <p className="option-text">No</p>
            </div>
            <p style={{ marginTop: "20px" }} className="text-body">
              {message}
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
    const [styleFirst, setStyleFirst] = useState({});
    const [styleSecond, setStyleSecond] = useState({});
    const [message, setMessage] = useState("");

    function pickFirst() {
      setStyleFirst({ borderColor: "#d42c2c" });
      setStyleSecond({});
      setMessage("Not correct :(");
    }
    function pickSecond() {
      setStyleSecond({ borderColor: "#2bdb2b" });
      setStyleFirst({});
      setMessage("Correct :)");
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Quiz: Movement</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Can a dark-squared bishop move to a light square?
            </p>
            <div
              onClick={pickFirst}
              style={styleFirst}
              className="first-option"
            >
              <p className="option-text">Yes</p>
            </div>
            <div
              onClick={pickSecond}
              style={styleSecond}
              className="second-option"
            >
              <p className="option-text">No</p>
            </div>
            <p style={{ marginTop: "20px" }} className="text-body">
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
    const [game, setGame] = useState(new Chess("8/8/8/8/8/3N4/8/8 w - - 0 1"));
    const [styleFirst, setStyleFirst] = useState({});
    const [styleSecond, setStyleSecond] = useState({});
    const [styleThird, setStyleThird] = useState({});
    const [message, setMessage] = useState("");

    function pickFirst() {
      setStyleFirst({ borderColor: "#2bdb2b" });
      setStyleSecond({});
      setStyleThird({});
      setMessage("Correct :)");
    }
    function pickSecond() {
      setStyleSecond({ borderColor: "#d42c2c" });
      setStyleFirst({});
      setStyleThird({});
      setMessage("Not correct :(");
    }

    function pickThird() {
      setStyleThird({ borderColor: "#d42c2c" });
      setStyleFirst({});
      setStyleSecond({});
      setMessage("Not correct :(");
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Quiz: Movement</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              How many moves does it take for the knight to go to the
              highlighted square?
            </p>
            <div
              onClick={pickFirst}
              style={styleFirst}
              className="first-option"
            >
              <p className="option-text">1</p>
            </div>
            <div
              onClick={pickSecond}
              style={styleSecond}
              className="second-option"
            >
              <p className="option-text">2</p>
            </div>
            <div
              onClick={pickThird}
              style={styleThird}
              className="third-option"
            >
              <p className="option-text">3</p>
            </div>
            <p style={{ marginTop: "0px" }} className="text-body">
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
            customSquareStyles={{ f4: { backgroundColor: "#ff0000cc" } }}
          />
        </div>
      </div>
    );
  }

  function Four({ next, pre }) {
    const [game, setGame] = useState(new Chess("8/8/8/8/8/3N4/8/8 w - - 0 1"));
    const [styleFirst, setStyleFirst] = useState({});
    const [styleSecond, setStyleSecond] = useState({});
    const [styleThird, setStyleThird] = useState({});
    const [message, setMessage] = useState("");

    function pickFirst() {
      setStyleFirst({ borderColor: "#2bdb2b" });
      setStyleSecond({});
      setStyleThird({});
      setMessage("Correct :)");
    }
    function pickSecond() {
      setStyleSecond({ borderColor: "#d42c2c" });
      setStyleFirst({});
      setStyleThird({});
      setMessage("Not correct :(");
    }

    function pickThird() {
      setStyleThird({ borderColor: "#d42c2c" });
      setStyleFirst({});
      setStyleSecond({});
      setMessage("Not correct :(");
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Quiz: Movement</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              How many moves does it take for the knight to go to the
              highlighted square?
            </p>
            <div
              onClick={pickFirst}
              style={styleFirst}
              className="first-option"
            >
              <p className="option-text">2</p>
            </div>
            <div
              onClick={pickSecond}
              style={styleSecond}
              className="second-option"
            >
              <p className="option-text">3</p>
            </div>
            <div
              onClick={pickThird}
              style={styleThird}
              className="third-option"
            >
              <p className="option-text">4</p>
            </div>
            <p style={{ marginTop: "0px" }} className="text-body">
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
            customSquareStyles={{ d5: { backgroundColor: "#ff0000cc" } }}
          />
        </div>
      </div>
    );
  }

  function Five({ next, pre }) {
    const [styleFirst, setStyleFirst] = useState({});
    const [styleSecond, setStyleSecond] = useState({});
    const [message, setMessage] = useState("");

    function pickFirst() {
      setStyleFirst({ borderColor: "#d42c2c" });
      setStyleSecond({});
      setMessage("Not correct :(");
    }
    function pickSecond() {
      setStyleSecond({ borderColor: "#2bdb2b" });
      setStyleFirst({});
      setMessage("Correct :)");
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Quiz: Movement</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Can a queen jump over other pieces?</p>
            <div
              onClick={pickFirst}
              style={styleFirst}
              className="first-option"
            >
              <p className="option-text">Yes</p>
            </div>
            <div
              onClick={pickSecond}
              style={styleSecond}
              className="second-option"
            >
              <p className="option-text">No</p>
            </div>
            <p style={{ marginTop: "20px" }} className="text-body">
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

  function Six({ next, pre }) {
    const [styleFirst, setStyleFirst] = useState({});
    const [styleSecond, setStyleSecond] = useState({});
    const [message, setMessage] = useState("");

    function pickFirst() {
      setStyleFirst({ borderColor: "#d42c2c" });
      setStyleSecond({});
      setMessage("Not correct :(");
    }
    function pickSecond() {
      setStyleSecond({ borderColor: "#2bdb2b" });
      setStyleFirst({});
      setMessage("Correct :)");
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Quiz: Movement</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Hwo does a king move?</p>
            <div
              onClick={pickFirst}
              style={styleFirst}
              className="first-option"
            >
              <p className="option-text">In a straight line and only forward</p>
            </div>
            <div
              onClick={pickSecond}
              style={styleSecond}
              className="second-option"
            >
              <p className="option-text">One square in every direction</p>
            </div>
            <p style={{ marginTop: "20px" }} className="text-body">
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

  function Seven({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("8/8/8/8/8/2p5/2P5/8 w - - 0 1"),
    );
    const [styleFirst, setStyleFirst] = useState({});
    const [styleSecond, setStyleSecond] = useState({});
    const [message, setMessage] = useState("");

    function pickFirst() {
      setStyleFirst({ borderColor: "#d42c2c" });
      setStyleSecond({});
      setMessage("Not correct :(");
    }
    function pickSecond() {
      setStyleSecond({ borderColor: "#2bdb2b" });
      setStyleFirst({});
      setMessage("Correct :) Pawns can't jump");
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Quiz: Movement</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Can white's pawn move?</p>
            <div
              onClick={pickFirst}
              style={styleFirst}
              className="first-option"
            >
              <p className="option-text">
                Yes because it can jump two squares if it is its first move
              </p>
            </div>
            <div
              onClick={pickSecond}
              style={styleSecond}
              className="second-option"
            >
              <p className="option-text">
                No because it's blocked by black's pawn
              </p>
            </div>
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
            customArrowColor={"rgba(255,0,0, 0.5)"}
          />
        </div>
      </div>
    );
  }

  function Eight({ direct, pre }) {
    const [game, setGame] = useState(
      new Chess("6k1/6p1/8/3P4/4n3/8/6PP/6K1 w - - 0 1"),
    );
    const [styleFirst, setStyleFirst] = useState({});
    const [styleSecond, setStyleSecond] = useState({});
    const [message, setMessage] = useState("");

    function pickFirst() {
      setStyleFirst({ borderColor: "#2bdb2b" });
      setStyleSecond({});
      setMessage("Correct :)");
    }
    function pickSecond() {
      setStyleSecond({ borderColor: "#d42c2c" });
      setStyleFirst({});
      setMessage("Not correct :(");
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Quiz: Movement</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Can white's pawn capture black's knight?
            </p>
            <div
              onClick={pickFirst}
              style={styleFirst}
              className="first-option"
            >
              <p className="option-text">
                No because pawns don't move backwards
              </p>
            </div>
            <div
              onClick={pickSecond}
              style={styleSecond}
              className="second-option"
            >
              <p className="option-text">
                Yes because pawns capture diagonally
              </p>
            </div>
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
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
            customArrowColor={"rgba(255,0,0, 0.5)"}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <IntroNav highlight6={true} />
      {sections[index]}
    </div>
  );
}

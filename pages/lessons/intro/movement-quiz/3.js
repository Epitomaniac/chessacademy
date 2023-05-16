import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useState } from "react";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("8/8/8/8/8/3N4/8/8 w - - 0 1"));
  const [styleFirst, setStyleFirst] = useState({});
  const [styleSecond, setStyleSecond] = useState({});
  const [styleThird, setStyleThird] = useState({});
  const [message, setMessage] = useState("");

  function next() {
    router.push("/lessons/intro/movement-quiz/4");
  }

  function pre() {
    router.push("/lessons/intro/movement-quiz/2");
  }

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
    <div className="flex">
      <IntroNav highlight6={true} />
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
            <p className="pages-text">3/8</p>
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
    </div>
  );
}

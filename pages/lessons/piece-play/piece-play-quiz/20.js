import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import PiecePlayNav from "@/components/PiecePlayNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("8/8/8/8/3b4/3b4/5r2/R3K3 w Q - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);
  const [styleFirst, setStyleFirst] = useState({});
  const [styleSecond, setStyleSecond] = useState({});
  const [message, setMessage] = useState("");
  const [squareStyles, setSquareStyles] = useState({});

  function next() {
    router.push("/lessons/...");
  }

  function pre() {
    router.push("/lessons/piece-play/piece-play-quiz/19");
  }

  function pickFirst() {
    setStyleFirst({ borderColor: "#2bdb2b" });
    setStyleSecond({});
    setMessage("Correct!");
  }

  function pickSecond() {
    setStyleSecond({ borderColor: "#d42c2c" });
    setStyleFirst({});
    setMessage("Not correct");
  }
  return (
    <div className="flex">
      <PiecePlayNav highlight7={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Quiz: Piece Play</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Can white castle long?</p>
            <div
              onClick={pickFirst}
              style={styleFirst}
              className="first-option"
            >
              <p className="text-body">Yes</p>
            </div>
            <div
              onClick={pickSecond}
              style={styleSecond}
              className="second-option"
            >
              <p className="text-body">No</p>
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
            <p className="pages-text">20/20</p>
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
            customSquareStyles={squareStyles}
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

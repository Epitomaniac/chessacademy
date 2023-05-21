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
    new Chess("2rr2k1/p4pbp/1p2p1p1/4q3/1P6/P2B1PQ1/2P2P1P/1R1R2K1 b - - 0 1"),
  );
  const [arrows, setArrows] = useState([["e5", "g3"]]);
  const [draggable, setDraggable] = useState(false);
  const [styleFirst, setStyleFirst] = useState({});
  const [styleSecond, setStyleSecond] = useState({});
  const [message, setMessage] = useState("");
  const [squareStyles, setSquareStyles] = useState({});

  function next() {
    router.push("/lessons/piece-play/piece-play-quiz/19");
  }

  function pre() {
    router.push("/lessons/piece-play/piece-play-quiz/17");
  }

  function pickSecond() {
    setStyleSecond({ borderColor: "#2bdb2b" });
    setStyleFirst({});
    setMessage(
      "Correct! White has king safety issues, so black should preserve the queen for future attacks.",
    );
  }

  function pickFirst() {
    setStyleFirst({ borderColor: "#d42c2c" });
    setStyleSecond({});
    setMessage("No! Black loses his advantage by trading queens.");
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
            <p className="text-body">Should black exchange queens?</p>
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
            <p className="pages-text">18/20</p>
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
            boardOrientation={"black"}
          />
        </div>
      </div>
    </div>
  );
}

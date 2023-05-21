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
    new Chess(
      "r2q1rk1/pb1nbppp/1pp1p3/3p1n2/2PP1B2/2N2NP1/PP2PPBP/2RQ1RK1 w q - 0 1",
    ),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);
  const [styleFirst, setStyleFirst] = useState({});
  const [styleSecond, setStyleSecond] = useState({});
  const [message, setMessage] = useState("");
  const [squareStyles, setSquareStyles] = useState({});

  function next() {
    router.push("/lessons/piece-play/piece-play-quiz/15");
  }

  function pre() {
    router.push("/lessons/piece-play/piece-play-quiz/13");
  }

  function pickFirst() {
    setStyleFirst({ borderColor: "#2bdb2b" });
    setStyleSecond({});
    setSquareStyles({
      g2: { border: "2px solid green", borderRadius: "50%" },
    });
    setMessage(
      "Yes! Without it, white's pawn formation around the king would be full of weaknesses.",
    );
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
            <p className="text-body">
              Which one of white's bishops is more valuable?
            </p>
            <div
              onClick={pickFirst}
              style={styleFirst}
              className="first-option"
            >
              <p className="text-body">Light-squared bishop</p>
            </div>
            <div
              onClick={pickSecond}
              style={styleSecond}
              className="second-option"
            >
              <p className="text-body">Dark-squared bishop</p>
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
            <p className="pages-text">14/20</p>
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

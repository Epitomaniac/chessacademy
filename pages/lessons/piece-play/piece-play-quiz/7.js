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
      "r2q1rk1/2pnbpp1/p2p1n1p/1p6/3BP1b1/1BN2N2/PPPQ1PPP/R3R1K1 b Qq - 0 1",
    ),
  );
  const [arrows, setArrows] = useState([["g4", "f3"]]);
  const [draggable, setDraggable] = useState(false);
  const [styleFirst, setStyleFirst] = useState({});
  const [styleSecond, setStyleSecond] = useState({});
  const [message, setMessage] = useState("");
  const [squareStyles, setSquareStyles] = useState({});

  function next() {
    router.push("/lessons/piece-play/piece-play-quiz/8");
  }

  function pre() {
    router.push("/lessons/piece-play/piece-play-quiz/6");
  }

  function pickFirst() {
    setStyleFirst({ borderColor: "#2bdb2b" });
    setStyleSecond({});
    setMessage(
      "That's right! By capturing the knight, black doubles the pawns around the king which weakens white's king safety.",
    );
    game.move("Bxf3");
    setGame({ ...game });
    setTimeout(() => {
      game.move("gxf3");
      setGame({ ...game });
    }, 500);
    setTimeout(() => {
      setSquareStyles({
        g2: { border: "2px solid red", borderRadius: "50%" },
        f3: { border: "2px solid red", borderRadius: "50%" },
        h3: { border: "2px solid red", borderRadius: "50%" },
      });
    }, 800);
  }

  function pickSecond() {
    setStyleSecond({ borderColor: "#d42c2c" });
    setStyleFirst({});
    setMessage("Not correct :(");
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
              Should black trade his knight for white's bishop?
            </p>
            <div
              onClick={pickFirst}
              style={styleFirst}
              className="first-option"
            >
              <p style={{ fontSize: "14px" }} className="text-body">
                Yes, because it creates weaknesses around white's king.
              </p>
            </div>
            <div
              onClick={pickSecond}
              style={styleSecond}
              className="second-option"
            >
              <p style={{ fontSize: "14px" }} className="text-body">
                No, because it's an open position and bishops like open
                positions.
              </p>
            </div>
            <p style={{ paddingTop: "0px" }} className="text-body">
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
            <p className="pages-text">7/20</p>
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

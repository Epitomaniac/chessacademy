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
    new Chess("8/pb1kb3/1p1pp2p/3P2pP/2B1P3/4B1P1/PP2K3/8 b - - 0 1"),
  );
  const [arrows, setArrows] = useState([["e6", "e5"]]);
  const [draggable, setDraggable] = useState(false);
  const [styleFirst, setStyleFirst] = useState({});
  const [styleSecond, setStyleSecond] = useState({});
  const [message, setMessage] = useState("");
  const [squareStyles, setSquareStyles] = useState({
    e6: { border: "2px solid red", borderRadius: "50%" },
  });

  function next() {
    router.push("/lessons/piece-play/piece-play-quiz/14");
  }

  function pre() {
    router.push("/lessons/piece-play/piece-play-quiz/12");
  }

  function pickSecond() {
    setStyleSecond({ borderColor: "#2bdb2b" });
    setStyleFirst({});
    game.move("e5");
    setGame({ ...game });
    setMessage(
      "Pushing the pawn is a mistake because then white's dark-squared bishop will be severely limited in terms of movement.",
    );
    setSquareStyles({
      e7: { border: "2px solid red", borderRadius: "50%" },
    });
    setArrows([]);
  }

  function pickFirst() {
    setStyleFirst({ borderColor: "#d42c2c" });
    setStyleSecond({});
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
              Should black push the pawn in front of the dark-squared bishop?
            </p>
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
            <p className="pages-text">13/20</p>
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

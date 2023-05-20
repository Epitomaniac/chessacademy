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
    new Chess("r2k3r/ppp2pbp/n3pnp1/3p4/Q1PP1B2/4PN2/Pq3PPP/2R2RK1 w kq - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/piece-play/king/3");
  }

  function pre() {
    router.push("/lessons/piece-play/king/1");
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight6={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">King in the Center</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              White's king is protected behind pawns and away from attacks.
            </p>
            <p className="text-body">
              Black's position however is losing, even though black has an extra
              piece. All due to the fact that black's king is stuck and is
              exposed to white's pieces.
            </p>
            <p style={{ paddingTop: "0px" }} className="text-body">
              Exposed kings in busy boards are informally said to be{" "}
              <span className="underline">in the center</span>, even though they
              might exactly not be.
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
            <p className="pages-text">2/13</p>
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
            customSquareStyles={{}}
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

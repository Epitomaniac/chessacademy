import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import TacticsNav from "@/components/TacticsNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("r2r3k/ppqpp1pp/8/4N3/3P4/7P/PP4P1/1QR2R1K w - - 0 1"),
  );
  const [arrows, setArrows] = useState([
    ["c1", "c7"],
    ["e5", "f7"],
  ]);
  const [message, setMessage] = useState("");

  function next() {
    router.push("/lessons/basic-tactics/discovered-attack/4");
  }

  function pre() {
    router.push("/lessons/basic-tactics/discovered-attack/2");
  }

  return (
    <div className="flex">
      <TacticsNav highlight4={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Tactics Combined</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Black is now forced to either lose the queen or accept a nasty
              fork.
            </p>
            <p className="text-body">
              Here white used two tactical themes together, a discovered attack
              and a fork. Tactics can often be combined to create more
              complicated problems and devastating threats!
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
            <p className="pages-text">3/7</p>
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
            customSquareStyles={{}}
          />
        </div>
      </div>
    </div>
  );
}

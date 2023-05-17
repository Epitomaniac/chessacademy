import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("8/8/8/8/8/R2Q2Q1/R2R3B/8 w - - 0 1"),
  );

  function next() {
    router.push("/lessons/basic-checkmates/battery/2");
  }

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
              Whenever two or more long-range pieces line up together to attack,
              they form what is called a <strong>battery</strong>.
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
            <FontAwesomeIcon className="left-arrow-locked" icon={faLeftLong} />
            <FontAwesomeIcon
              onClick={next}
              className="right-arrow"
              icon={faRightLong}
            />
          </div>
          <div className="pages-div">
            <p className="pages-text">1/4</p>
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

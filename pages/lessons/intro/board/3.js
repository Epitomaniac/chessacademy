import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [rankStyles, setRankStyles] = useState({});
  const [disabled, setDisabled] = useState(false);
  const chess = new Chess();
  chess.clear();

  function next() {
    router.push("/lessons/intro/placement/1");
  }

  function pre() {
    router.push("/lessons/intro/board/2");
  }

  return (
    <div className="flex">
      <IntroNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Board Placement</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              When placing the board on the table and before setting up the
              pieces, make sure the bottom-right corner of the board is always a
              light square.
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
            <p className="pages-text">3/3</p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            position={chess.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customSquareStyles={{
              h1: { backgroundColor: "rgba(255, 0, 0, 0.4)" },
            }}
          />
        </div>
      </div>
    </div>
  );
}

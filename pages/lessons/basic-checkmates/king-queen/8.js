import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(
    new Chess("8/8/4K1k1/4Q3/8/8/8/8 b - - 0 1"),
  );
  const [arrows, setArrows] = useState([]);
  const [message, setMessage] = useState("");
  const [squares, setSquares] = useState({});
  const [visible, setVisible] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/king-queen/9");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/king-queen/7");
  }

  useEffect(() => {
    setTimeout(() => {
      game.move("Kh7");
      setGame({ ...game });
      setVisible(true);
    }, 1000);
  }, []);

  return (
    <div className="flex">
      <CheckmatesNav highlight6={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Objective No.1: Complete</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The black king is forced to the edge, finally!
            </p>
            <p className="text-body">
              OK, the first phase of our strategy is complete. Now we have two
              options: We can either bring our king closer, or keep the black
              king imprisoned in the file that he is in. Although both of them
              are good moves, one of them is safe and the other involves a huge
              risk!
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
            <p className="pages-text">8/15</p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            customArrows={arrows}
            customSquareStyles={squares}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

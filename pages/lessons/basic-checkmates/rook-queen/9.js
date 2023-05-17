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
    new Chess("8/8/8/4k3/Q7/1R6/8/7K b - - 0 1"),
  );
  const [arrows, setArrows] = useState([["a4", "h4"]]);
  const [draggable, setDraggable] = useState(false);
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [visible1, setVisible1] = useState(false);
  const [styleFirst, setStyleFirst] = useState({});
  const [styleSecond, setStyleSecond] = useState({});

  function next() {
    router.push("/lessons/basic-checkmates/rook-queen/10");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/rook-queen/8");
  }

  useEffect(() => {
    setTimeout(() => {
      game.move("Ke6");
      setGame({ ...game });
      setArrows([["a4", "h4"]]);
      setMessage1(
        "This time the king went back voluntarily. What should we do?",
      );
      setVisible1(true);
    }, 1000);
  }, []);

  function pickFirst() {
    setMessage2("Correct!");
    setStyleFirst({ borderColor: "#2bdb2b" });
    setStyleSecond({});
  }

  function pickSecond() {
    setMessage2("Not correct");
    setStyleSecond({ borderColor: "#d42c2c" });
    setStyleFirst({});
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight4={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Ladder</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">{message1}</p>
            {visible1 && (
              <>
                <div
                  style={styleFirst}
                  onClick={pickFirst}
                  className="first-option"
                >
                  <p className="text-body">
                    Limit the rank under the king so that it can't come down
                    again.
                  </p>
                </div>
                <div
                  style={styleSecond}
                  onClick={pickSecond}
                  className="second-option"
                >
                  <p className="text-body">
                    Give a check trying to force the king further back.
                  </p>
                </div>
              </>
            )}
            <p style={{ paddingTop: "0px" }} className="text-body">
              {message2}
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
            <p className="pages-text">9/13</p>
          </div>
        </div>
        <div style={{ pointerEvents: "none" }} className="board">
          <Chessboard
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrows={arrows}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            boardOrientation={"white"}
          />
        </div>
      </div>
    </div>
  );
}

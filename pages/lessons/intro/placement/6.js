import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const chess = new Chess();
  const [fen, setFen] = useState("rnbq1bnr/8/8/8/8/8/8/RNBQ1BNR w - - 0 1");

  function next() {
    router.push("/lessons/intro/placement/7");
  }

  function pre() {
    router.push("/lessons/intro/placement/5");
  }

  function placeKings() {
    setFen("rnbqkbnr/8/8/8/8/8/8/RNBQKBNR w - - 0 1");
  }

  return (
    <div className="flex">
      <IntroNav highlight2={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The King</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">This is the king:</p>
            <p className="text-body">
              <Image
                alt="white king"
                width={45}
                height={45}
                src="/white_king.svg"
              ></Image>
              <Image
                alt="black king"
                width={45}
                height={45}
                src="/black_king.svg"
              ></Image>
            </p>
            <p style={{ paddingTop: "0" }} className="text-body">
              The king is placed beside the bishop on the square that has the
              opposite color as the piece. So a white king is placed on a dark
              square, while a black king is placed on a light square.
            </p>
            <button
              style={{ marginTop: "0" }}
              onClick={placeKings}
              className="lesson-btn"
            >
              Place the king
            </button>
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
            <p className="pages-text">6/8</p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            position={fen}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    </div>
  );
}

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
  chess.clear();
  const [fen, setFen] = useState(chess.fen());

  function next() {
    router.push("/lessons/intro/placement/3");
  }

  function pre() {
    router.push("/lessons/intro/placement/1");
  }

  function placeRooks() {
    setFen("r6r/8/8/8/8/8/8/R6R w - - 0 1");
  }

  return (
    <div className="flex">
      <IntroNav highlight2={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Rook</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">This is the rook:</p>
            <p className="text-body">
              <Image
                alt="white rook"
                width={45}
                height={45}
                src="/white_rook.svg"
              ></Image>
              <Image
                alt="black rook"
                width={45}
                height={45}
                src="/black_rook.svg"
              ></Image>
            </p>
            <p className="text-body">
              Rooks are placed at the corners for each side.
            </p>
            <button onClick={placeRooks} className="lesson-btn">
              Place rooks
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
            <p className="pages-text">2/8</p>
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

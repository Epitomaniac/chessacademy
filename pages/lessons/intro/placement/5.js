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
  const [fen, setFen] = useState("rnb2bnr/8/8/8/8/8/8/RNB2BNR w - - 0 1");

  function next() {
    router.push("/lessons/intro/placement/6");
  }

  function pre() {
    router.push("/lessons/intro/placement/4");
  }

  function placeQueens() {
    setFen("rnbq1bnr/8/8/8/8/8/8/RNBQ1BNR w - - 0 1");
  }

  return (
    <div className="flex">
      <IntroNav highlight2={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Queen</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">This is the queen:</p>
            <p className="text-body">
              <Image
                alt="white queen"
                width={45}
                height={45}
                src="/white_queen.svg"
              ></Image>
              <Image
                alt="black queen"
                width={45}
                height={45}
                src="/black_queen.svg"
              ></Image>
            </p>
            <p className="text-body">
              The queen is placed beside the bishop on the square with the same
              color as the piece. So a white queen is placed on a light square,
              while a black queen is placed on a dark square.
            </p>
            <button
              style={{ marginTop: "0px" }}
              onClick={placeQueens}
              className="lesson-btn"
            >
              Place the queen
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
            <p className="pages-text">5/8</p>
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

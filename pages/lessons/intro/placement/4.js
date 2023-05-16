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
  const [fen, setFen] = useState("rn4nr/8/8/8/8/8/8/RN4NR w - - 0 1");

  function next() {
    router.push("/lessons/intro/placement/5");
  }

  function pre() {
    router.push("/lessons/intro/placement/3");
  }

  function placeBishops() {
    setFen("rnb2bnr/8/8/8/8/8/8/RNB2BNR w - - 0 1");
  }

  return (
    <div className="flex">
      <IntroNav highlight2={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Bishop</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">This is the bishop:</p>
            <p className="text-body">
              <Image
                alt="white bishop"
                width={45}
                height={45}
                src="/white_bishop.svg"
              ></Image>
              <Image
                alt="black bishop"
                width={45}
                height={45}
                src="/black_bishop.svg"
              ></Image>
            </p>
            <p className="text-body">
              Bishops are placed beside the knights (third square from the
              side).
            </p>
            <button onClick={placeBishops} className="lesson-btn">
              Place bishops
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
            <p className="pages-text">4/8</p>
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

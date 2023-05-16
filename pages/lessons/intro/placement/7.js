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
  const [fen, setFen] = useState("rnbqkbnr/8/8/8/8/8/8/RNBQKBNR w - - 0 1");
  const [message, setMessage] = useState(false);

  function next() {
    router.push("/lessons/intro/placement/8");
  }

  function pre() {
    router.push("/lessons/intro/placement/6");
  }

  function placePawns() {
    setFen();
    setTimeout(() => {
      setMessage(true);
    }, 500);
  }

  return (
    <div className="flex">
      <IntroNav highlight2={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Pawn</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">This is the pawn:</p>
            <p className="text-body">
              <Image
                alt="white pawn"
                width={45}
                height={45}
                src="/white_pawn.svg"
              ></Image>
              <Image
                alt="black pawn"
                width={45}
                height={45}
                src="/black_pawn.svg"
              ></Image>
            </p>
            <p className="text-body">
              The pawns are placed next to each other on the rank that is in
              front of the pieces.
            </p>
            <button onClick={placePawns} className="lesson-btn">
              Place the pawns
            </button>
            {message && (
              <p className="text-body">
                There you go! Now all the pieces are placed.
              </p>
            )}
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
            <p className="pages-text">7/8</p>
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

import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Section4() {
  const router = useRouter();
  const sections = [
    <One next={next} />,
    <Two next={next} pre={pre} />,
    <Three next={next} pre={pre} />,
    <Four next={next} pre={pre} />,
    <Five next={next} pre={pre} />,
    <Six next={next} pre={pre} />,
    <Seven direct={direct} pre={pre} />,
  ];
  const [index, setIndex] = useState(0);

  function next() {
    if (index + 1 < sections.length) {
      setIndex(index => index + 1);
    }
  }

  function pre() {
    if (index + 1 > 1) {
      setIndex(index => index - 1);
    }
  }

  function direct() {
    router.push("/lessons/intro/5");
  }

  function One({ next }) {
    const chess = new Chess();
    chess.clear();

    return (
      <div className="container">
        <IntroNav />
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Value of Pieces</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Just like in the army where some units or assets are more valuable
              than others, in chess some pieces have more value compared to
              other pieces.
            </p>
            <p className="text-body">
              Of course a piece having less value doesn't mean that you should
              carelessly lose it! Every piece is valuable in its own right.
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
            <p className="pages-text">
              {index + 1}/{sections.length}
            </p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            position={chess.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    );
  }

  function Two({ next, pre }) {
    const chess = new Chess("8/8/8/P1p5/8/8/8/8 w - - 0 1");

    return (
      <div className="container">
        <IntroNav />
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Pawn</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The pawn is the least valuable piece. Because of this fact, the
              values of all pieces except for the king are measured in pawns. So
              a pawn is worth 1 pawn, duh.
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
            <p className="pages-text">
              {index + 1}/{sections.length}
            </p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            position={chess.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    );
  }

  function Three({ next, pre }) {
    const chess = new Chess("8/8/8/N1ppp3/8/8/8/8 w - - 0 1");

    return (
      <div className="container">
        <IntroNav />
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Knight</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">The Knight is worth about 3 pawns.</p>
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
            <p className="pages-text">
              {index + 1}/{sections.length}
            </p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            position={chess.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    );
  }

  function Four({ next, pre }) {
    const chess = new Chess("8/8/8/B1ppp3/8/8/8/8 w - - 0 1");

    return (
      <div className="container">
        <IntroNav />
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Bishop</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The Bishop is also worth about 3 pawns. So a knight and a bishop
              have about the same value.
            </p>
            <p className="text-body">
              Knights and bishops are called <strong>minor pieces</strong>.
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
            <p className="pages-text">
              {index + 1}/{sections.length}
            </p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            position={chess.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    );
  }

  function Five({ next, pre }) {
    const chess = new Chess("8/8/8/R1ppppp1/8/8/8/8 w - - 0 1");

    return (
      <div className="container">
        <IntroNav />
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Rook</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The rook is a powerful piece and is worth 5 pawns.
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
            <p className="pages-text">
              {index + 1}/{sections.length}
            </p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            position={chess.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    );
  }

  function Six({ next, pre }) {
    const chess = new Chess("8/8/8/Q1ppppp1/2pppp2/8/8/8 w - - 0 1");

    return (
      <div className="container">
        <IntroNav />
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Queen</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The queen is the most powerful piece and is worth 9 pawns!.
            </p>
            <p className="text-body">
              Rooks and queens are called <strong>major pieces</strong>.
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
            <p className="pages-text">
              {index + 1}/{sections.length}
            </p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            position={chess.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    );
  }

  function Seven({ direct, pre }) {
    const chess = new Chess("8/8/8/K1k5/8/8/8/8 w - - 0 1");

    return (
      <div className="container">
        <IntroNav />
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The King</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              The king is your most valuable piece. If you lose your king, you
              lose the game. The kings never leave the board during the game, so
              there is no point in measuring their worth in pawns.
            </p>
            <p className="text-body">
              Knowing piece values is extremely important when evaluating a
              position, so make sure you always have this information in mind.
            </p>
          </div>
          <div className="arrows-div">
            <FontAwesomeIcon
              onClick={pre}
              className="left-arrow"
              icon={faLeftLong}
            />
            <FontAwesomeIcon
              onClick={direct}
              className="right-arrow"
              icon={faRightLong}
            />
          </div>
          <div className="pages-div">
            <p className="pages-text">
              {index + 1}/{sections.length}
            </p>
          </div>
        </div>
        <div className="board">
          <Chessboard
            position={chess.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={false}
          />
        </div>
      </div>
    );
  }

  return <>{sections[index]}</>;
}

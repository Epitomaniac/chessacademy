import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import PiecePlayNav from "@/components/PiecePlayNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const sections = [
    <One next={next} />,
    <Two next={next} pre={pre} />,
    <Three next={next} pre={pre} />,
    <Four direct={direct} pre={pre} />,
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
    router.push("/lessons/pieceplay/3");
  }

  function One({ next }) {
    const [game, setGame] = useState(
      new Chess(
        "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP1B1PPP/R2Q1RK1 w Qq - 0 1",
      ),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">The Rook</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Since rooks can't move diagonally and can't jump over other
              pieces, they can't do very well in positions where there are many
              pawns on the board.
            </p>
            <p className="text-body">
              The board shows a position where rooks can't move very well.
            </p>
            <p style={{ paddingTop: "0px" }} className="text-body">
              The rook often doesn't enter the game until the board gets clear
              of most of the pieces, which usually happens towards the end of
              the game.
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
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Two({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("r5k1/1bpq1pp1/1p1p1n1p/8/8/1QPP1N2/1P1N1PPP/4R1K1 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([
      ["e1", "e8"],
      ["a8", "a1"],
    ]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Open File</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              An <strong>open file</strong> is a file with no pawns on it.
            </p>
            <p className="text-body">
              It is a good strategy to put your rooks on open files, since they
              can control all the squares in it, either directly or indirectly.
            </p>
            <p className="text-body">
              The board shows a position where rooks are already very well
              placed.
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
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Three({ next, pre }) {
    const [game, setGame] = useState(
      new Chess("2r5/1p1p1pp1/p3p2p/8/4P3/1P6/P1P2PPP/3R4 w - - 0 1"),
    );
    const [arrows, setArrows] = useState([
      ["d1", "d7"],
      ["c8", "c2"],
    ]);
    const [draggable, setDraggable] = useState(false);

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Half-open File</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              A <strong>half-open file</strong> or semi-open file is a file
              where there are only pawns of one color.
            </p>
            <p className="text-body">
              The pawns on a half-open file can be attacked by the side that has
              no pawns on it, usually with a rook.
            </p>
            <p className="text-body">
              The board shows a position where rooks are attacking the half-open
              files.
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
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  function Four({ direct, pre }) {
    const [game, setGame] = useState(
      new Chess("4r3/p4p1p/1pk3p1/8/3R4/1KP5/1P3PPP/8 b - - 0 1"),
    );
    const [arrows, setArrows] = useState([]);
    const [draggable, setDraggable] = useState(false);

    function play() {
      game.move("Re2");
      setGame({ ...game });
      setTimeout(() => {
        setArrows([
          ["e2", "b2"],
          ["e2", "h2"],
        ]);
      }, 300);
    }

    return (
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Rooks on 7th</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              A rook on seventh or second ranks (depends if you are white or
              black) is very damaging, as it can feast on the pawns that are
              often found there.
            </p>
            <button onClick={play} className="lesson-btn">
              Play
            </button>
            <p className="text-body">
              Black is better for having an active rook on the second rank.
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
            position={game.fen()}
            boardWidth={325}
            areArrowsAllowed={false}
            showBoardNotation={false}
            arePiecesDraggable={draggable}
            customArrowColor={"rgba(255,0,0, 0.5)"}
            customArrows={arrows}
            customSquareStyles={{}}
            boardOrientation={"white"}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <PiecePlayNav highlight2={true} />
      {sections[index]}
    </div>
  );
}
import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import CheckmatesNav from "@/components/CheckmatesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [game, setGame] = useState(new Chess("1Q5k/R7/8/8/8/8/8/8 w - - 0 1"));
  const [arrows, setArrows] = useState([
    ["a7", "h7"],
    ["b8", "h8"],
  ]);
  const [draggable, setDraggable] = useState(false);

  function next() {
    router.push("/lessons/basic-checkmates/rook-queen/3");
  }

  function pre() {
    router.push("/lessons/basic-checkmates/rook-queen/1");
  }

  return (
    <div className="flex">
      <CheckmatesNav highlight4={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Checkmates Are Earned</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Suppose after a long fight you are left with a queen and a rook
              and your opponent has only a king.
            </p>
            <p className="text-body">
              You obviously have a winning position, but checkmates don't happen
              on their own! You need to deliver them, and how you can do that
              requires both knowledge and skill.
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
            <p className="pages-text">2/13</p>
          </div>
        </div>
      </div>
    </div>
  );
}

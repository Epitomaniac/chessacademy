import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useState } from "react";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [styleFirst, setStyleFirst] = useState({});
  const [styleSecond, setStyleSecond] = useState({});
  const [message, setMessage] = useState("");

  function next() {
    router.push("/lessons/intro/movement-quiz/2");
  }

  function pickFirst() {
    setStyleFirst({ borderColor: "#2bdb2b" });
    setStyleSecond({});
    setMessage("Correct :)");
  }

  function pickSecond() {
    setStyleSecond({ borderColor: "#d42c2c" });
    setStyleFirst({});
    setMessage("Not correct :(");
  }

  return (
    <div className="flex">
      <IntroNav highlight6={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Quiz: Movement</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Can the rook move backwards?</p>
            <div
              onClick={pickFirst}
              style={styleFirst}
              className="first-option"
            >
              <p className="option-text">Yes</p>
            </div>
            <div
              onClick={pickSecond}
              style={styleSecond}
              className="second-option"
            >
              <p className="option-text">No</p>
            </div>
            <p style={{ marginTop: "20px" }} className="text-body">
              {message}
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
            <p className="pages-text">1/8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

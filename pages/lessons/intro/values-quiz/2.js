import { useState } from "react";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const [styleLeft, setStyleLeft] = useState({});
  const [styleRight, setStyleRight] = useState({});
  const [message, setMessage] = useState("");

  function next() {
    router.push("/lessons/intro/values-quiz/3");
  }

  function pre() {
    router.push("/lessons/intro/values-quiz/1");
  }

  function pickLeft() {
    setStyleLeft({ backgroundColor: "#2bdb2b" });
    setStyleRight({});
    setMessage("Correct :)");
  }

  function pickRight() {
    setStyleRight({ backgroundColor: "#d42c2c" });
    setStyleLeft({});
    setMessage("Not correct :(");
  }

  return (
    <div className="flex">
      <IntroNav highlight4={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Quiz: Piece Values</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">Select the side that has more value.</p>
            <div className="quiz-img">
              <div onClick={pickLeft} style={styleLeft} className="first-img">
                <Image
                  alt="white rook"
                  width={40}
                  height={40}
                  src="/white_rook.svg"
                ></Image>
              </div>
              <div
                onClick={pickRight}
                style={styleRight}
                className="second-img"
              >
                <Image
                  alt="black pawn"
                  width={40}
                  height={40}
                  src="/black_pawn.svg"
                ></Image>
                <Image
                  alt="black pawn"
                  width={40}
                  height={40}
                  src="/black_pawn.svg"
                ></Image>
                <Image
                  alt="black pawn"
                  width={40}
                  height={40}
                  src="/black_pawn.svg"
                ></Image>
                <Image
                  alt="black pawn"
                  width={40}
                  height={40}
                  src="/black_pawn.svg"
                ></Image>
              </div>
            </div>
            <p className="text-body">{message}</p>
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
            <p className="pages-text">2/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

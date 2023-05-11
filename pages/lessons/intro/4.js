import { useState } from "react";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const sections = [
    <One next={next} />,
    <Two next={next} pre={pre} />,
    <Three next={next} pre={pre} />,
    <Four next={next} pre={pre} />,
    <Five direct={direct} pre={pre} />,
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
    const [styleLeft, setStyleLeft] = useState({});
    const [styleRight, setStyleRight] = useState({});
    const [message, setMessage] = useState("");

    function pickLeft() {
      setStyleLeft({ backgroundColor: "#d42c2c" });
      setStyleRight({});
      setMessage("Not correct :(");
    }
    function pickRight() {
      setStyleRight({ backgroundColor: "#2bdb2b" });
      setStyleLeft({});
      setMessage("Correct :)");
    }

    return (
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
                  alt="white pawn"
                  width={40}
                  height={40}
                  src="/white_pawn.svg"
                ></Image>
                <Image
                  alt="white pawn"
                  width={40}
                  height={40}
                  src="/white_pawn.svg"
                ></Image>
              </div>
              <div
                onClick={pickRight}
                style={styleRight}
                className="second-img"
              >
                <Image
                  alt="black knight"
                  width={40}
                  height={40}
                  src="/black_knight.svg"
                ></Image>
              </div>
            </div>
            <p className="text-body">{message}</p>
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
      </div>
    );
  }

  function Two({ next, pre }) {
    const [styleLeft, setStyleLeft] = useState({});
    const [styleRight, setStyleRight] = useState({});
    const [message, setMessage] = useState("");

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
            <p className="pages-text">
              {index + 1}/{sections.length}
            </p>
          </div>
        </div>
      </div>
    );
  }

  function Three({ next, pre }) {
    const [styleLeft, setStyleLeft] = useState({});
    const [styleRight, setStyleRight] = useState({});
    const [message, setMessage] = useState("");

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
                  alt="white bishop"
                  width={40}
                  height={40}
                  src="/white_bishop.svg"
                ></Image>
                <Image
                  alt="white knight"
                  width={40}
                  height={40}
                  src="/white_knight.svg"
                ></Image>
              </div>
              <div
                onClick={pickRight}
                style={styleRight}
                className="second-img"
              >
                <Image
                  alt="black rook"
                  width={40}
                  height={40}
                  src="/black_rook.svg"
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
            <p className="pages-text">
              {index + 1}/{sections.length}
            </p>
          </div>
        </div>
      </div>
    );
  }

  function Four({ next, pre }) {
    const [styleLeft, setStyleLeft] = useState({});
    const [styleRight, setStyleRight] = useState({});
    const [message, setMessage] = useState("");

    function pickLeft() {
      setStyleLeft({ backgroundColor: "#d42c2c" });
      setStyleRight({});
      setMessage("Not correct :(");
    }
    function pickRight() {
      setStyleRight({ backgroundColor: "#2bdb2b" });
      setStyleLeft({});
      setMessage("Correct :)");
    }

    return (
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
                <Image
                  alt="white bishop"
                  width={40}
                  height={40}
                  src="/white_bishop.svg"
                ></Image>
              </div>
              <div
                onClick={pickRight}
                style={styleRight}
                className="second-img"
              >
                <Image
                  alt="black queen"
                  width={40}
                  height={40}
                  src="/black_queen.svg"
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
            <p className="pages-text">
              {index + 1}/{sections.length}
            </p>
          </div>
        </div>
      </div>
    );
  }

  function Five({ direct, pre }) {
    const [styleLeft, setStyleLeft] = useState({});
    const [styleRight, setStyleRight] = useState({});
    const [message, setMessage] = useState("");

    function pickLeft() {
      setStyleLeft({ backgroundColor: "#d42c2c" });
      setStyleRight({});
      setMessage("Not correct :(");
    }
    function pickRight() {
      setStyleRight({ backgroundColor: "#2bdb2b" });
      setStyleLeft({});
      setMessage("Correct :)");
    }

    return (
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
                  alt="white queen"
                  width={40}
                  height={40}
                  src="/white_queen.svg"
                ></Image>
              </div>
              <div
                onClick={pickRight}
                style={styleRight}
                className="second-img"
              >
                <Image
                  alt="black rook"
                  width={40}
                  height={40}
                  src="/black_rook.svg"
                ></Image>
                <Image
                  alt="black rook"
                  width={40}
                  height={40}
                  src="/black_rook.svg"
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
      </div>
    );
  }

  return (
    <div className="flex">
      <IntroNav highlight4={true} />
      {sections[index]}
    </div>
  );
}

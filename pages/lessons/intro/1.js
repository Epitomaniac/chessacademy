import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";
import IntroNav from "@/components/IntroNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Section1() {
  const router = useRouter();
  const sections = [
    <One next={next} />,
    <Two next={next} pre={pre} />,
    <Three next={next} pre={pre} />,
    <Four next={next} pre={pre} />,
    <Five next={next} pre={pre} direct={direct} />,
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
    router.push("/lessons/intro/2");
  }

  function One({ next }) {
    return (
      <div className="container">
        <IntroNav />
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Welcome!</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              Welcome to the chess academy. Well, the idea of a chess academy
              might feel weird to you, but unlike many other games and sports
              out there, chess is a very knowledge-based activity. It is said
              that there are more books written about chess than any other
              sports combined!
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
      </div>
    );
  }

  function Two({ next, pre }) {
    return (
      <div className="container">
        <IntroNav />
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Welcome!</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              You play with your friend and lose every single time, you'd think
              you friend must be smarter than you, but chances are that he or
              she knows more things about chess than you do. Knowledge and
              practice play a more important role in your strength in chess than
              talent or intelligence.
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
      </div>
    );
  }

  function Three({ next, pre }) {
    return (
      <div className="container">
        <IntroNav />
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Welcome!</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              In this step-by-step course, we will walk you through most of the
              fundamental knowledge you will need to acquire in your road to
              mastery. At the end of this course:
            </p>
            <p className="text-body">
              - You will know how to setup the board and start the game.
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
      </div>
    );
  }

  function Four({ next, pre }) {
    return (
      <div className="container">
        <IntroNav />
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Welcome!</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              - You will know how to punish your opponent's tactical mistakes.
            </p>
            <p className="text-body">
              - You will know how to form up different plans depending on the
              position of the pieces.
            </p>
            <p className="text-body">
              - You will know how to convert simple endgames to a win.
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
      </div>
    );
  }

  function Five({ pre, direct }) {
    return (
      <div className="container">
        <IntroNav />
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Welcome!</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              - And more importantly, you will get a solid understanding of the
              game as a whole which will prepare you for further studies on the
              road to mastery.
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
      </div>
    );
  }

  return <>{sections[index]}</>;
}

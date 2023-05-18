import TacticsNav from "@/components/TacticsNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  function next() {
    router.push("/lessons/basic-tactics/fork/2");
  }

  return (
    <div className="flex">
      <TacticsNav highlight1={true} />
      <div className="container">
        <div className="text-box">
          <div className="text-title-div">
            <h2 className="text-title">Tactics</h2>
          </div>
          <div className="text-body-div">
            <p className="text-body">
              In the previous lesson, you became familiar with some common
              checkmate positions and methods. Checkmate is a{" "}
              <strong>tactical</strong> theme.
            </p>
            <p className="text-body">
              In chess, <strong>tactics</strong> happen when pieces are in
              direct confrontation with each other. A tactic is a sequence of
              moves that leads to one side making immediate threats and gains,
              like checkmate, winning a piece, etc.
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

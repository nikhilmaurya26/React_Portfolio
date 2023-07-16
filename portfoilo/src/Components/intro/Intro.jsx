import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import avtar from "../../assets/avtar.svg";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 500,
      backSpeed: 60,
      strings: ["Frontend", "Developer", "Content creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
      <img src={avtar} alt="" />
      </div>
      <div className="right">
        <div className="wrapper">
            <div className="wrapper-content">
            <h2 className="fw-600">Hi There, I'm</h2>
          <h1 className="fw-600">Nikhil Maurya</h1>
          <h3 className="fw-600">
            Software Engineer <span ref={textRef}></span>
          </h3>
          <span className="fw-500">I design and code beautifully simple things, and I love what I do.</span>
            </div>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

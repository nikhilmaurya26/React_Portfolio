import "./works.scss";
import mobile from "../../assets/mobile.jpeg";
import weather from "../../assets/weather.png"
import { useState } from "react";
export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: 1,
      title: "Social media App",
      img: mobile,
      desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, porro. ",
    },
    {
      id: 2,
      title: "Social media App",
      img: weather,
      desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, porro. ",
    },
    {
      id: 3,
      title: "Social media App",
      img: mobile,
      desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, porro. ",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.img} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects </span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={mobile}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={mobile}
        className="arrow right"
        alt=""
        onClick={() => handleClick("")}
      />
    </div>
  );
}

import "./works.scss";
import mobile from "../../assets/mobile.jpeg";
import weather from "../../assets/weather.png";
import web from "../../assets/web.png";
import arrow from "../../assets/right-arroww.png";
import myntra from "../../assets/myntra_clone.png";
import code_buster from "../../assets/code_buster.png";
import Gaming_website from "../../assets/Gaming_website.png";
import weather_app from "../../assets/weather_app.png";


import { useState } from "react";
export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: 1,
      title: "Education website",
      img: code_buster,
      desc: "Created an educational website where you can find all the best online resources and courses. It was a group project.",
    },
    {
      id: 2,
      title: "React Based Web App",
      img: weather_app,
      desc: "Created a weather app using Weather API which will tell the exact temperatures, humidity and wind currents using React.",
    },
    {
      id: 3,
      title: "Gaming website",
      img: Gaming_website,
      desc: "It is a static gaming website and also responsive",
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
                    <img src={web} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects </span>
                </div>
              </div>
              <div className="right" style={{ backgroundImage: `url(${d.img})` }}>
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={arrow}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={arrow}
        className="arrow right"
        alt=""
        onClick={() => handleClick("")}
      />
    </div>
  );
}

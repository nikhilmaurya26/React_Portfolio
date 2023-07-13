import "./portfolio.scss";
import Weather from "../../assets/weather.png";
import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio() {
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title} />
        ))}
      </ul>
      <div className="container">
        <div className="items">
          <img src={Weather} alt="" />
          <h3>React weather app</h3>
        </div>
        <div className="items">
          <img src={Weather} alt="" />
          <h3>React weather app</h3>
        </div>
        <div className="items">
          <img src={Weather} alt="" />
          <h3>React weather app</h3>
        </div>
        <div className="items">
          <img src={Weather} alt="" />
          <h3>React weather app</h3>
        </div>
        <div className="items">
          <img src={Weather} alt="" />
          <h3>React weather app</h3>
        </div>
        <div className="items">
          <img src={Weather} alt="" />
          <h3>React weather app</h3>
        </div>
      </div>
    </div>
  );
}

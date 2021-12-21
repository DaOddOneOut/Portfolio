import "./portfolio.scss";
import PortfolioList from "../portfolioList/portfolioList";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  artPortfolio,
  aePortfolio,
  aiPortfolio,
  c4dPortfolio,
  msdPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "featured",
    },
    {
      id: "art",
      title: "Arts",
    },
    {
      id: "ae",
      title: "After Effects",
    },
    {
      id: "ai",
      title: "Illustrator",
    },
    {
      id: "c4d",
      title: "Cinema 4d",
    },
    {
      id: "msd",
      title: "Marvelous Design",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "art":
        setData(artPortfolio);
        break;
      case "ae":
        setData(aePortfolio);
        break;
      case "ai":
        setData(aiPortfolio);
        break;
      case "c4d":
        setData(c4dPortfolio);
        break;
      case "msd":
        setData(msdPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img scr={d.img} alt="img" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

import { eventDatas } from "@/mock/myPageData";
import s from "./DoughnutGraph.module.scss";
import { TempPortfolioData } from "@/mock/temporaryPortfolio";

interface DoughnutGraphProps {
  data: TempPortfolioData;
}

export default function DoughnutGraph({ data }: DoughnutGraphProps) {
  const createConicGradient = () => {
    const colors = [
      "#5da0fc",
      "b2a0fa",
      "#99eeff",
      "#16166d",
      "4e23fa",
      "157496",
    ];
    const gap = 0.3;
    let gradientStops = "";
    let accumulatedPercentage = 0;

    eventDatas.forEach((event, index) => {
      const color = colors[index % colors.length];
      const start = accumulatedPercentage;
      const end = accumulatedPercentage + event.volume - gap;

      gradientStops += `${color} ${start}% ${end}%, `;
      accumulatedPercentage = end + gap;

      gradientStops += `transparent ${end}% ${accumulatedPercentage}%, `;
    });

    return `conic-gradient(${gradientStops.slice(0, -2)})`;
  };
  return (
    <div className={s.pageContainer}>
      <h2 className={s.title}>Portfolio Chart</h2>
      <div
        className={s.donutChart}
        style={{
          backgroundImage: createConicGradient(),
        }}
      >
        <div className={s.innerText}>
          {eventDatas.map((event) => (
            <div key={event.name}>
              <span>{`${event.volume}% ${event.name}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import s from "./DoughnutGraph.module.scss";
import { TempPortfolioData } from "@/mock/temporaryPortfolio";

interface DoughnutGraphProps {
  data: TempPortfolioData;
}

export default function DoughnutGraph({ data }: DoughnutGraphProps) {
  const total = data.portfolioDetails.reduce(
    (acc, cur) => acc + cur.amount * cur.price,
    0
  );

  const ratioList: number[] = [];
  data.portfolioDetails.forEach((detail) => {
    ratioList.push(
      Number((((detail.amount * detail.price) / total) * 100).toFixed(0))
    );
  });

  const colors = [
    "#16166d",
    "#5151BE",
    "#9898D9",
    "#89B7DC",
    "#9DE0F5",
    "#417e91",
    "#89b7dc",
    "#ECECFF",
  ];

  // conic-gradient 스타일 생성
  let cumulativeRatio = 0;
  const segments = ratioList.map((ratio, idx) => {
    const start = cumulativeRatio;
    cumulativeRatio += ratio;
    if (idx !== 0 && idx % colors.length === 0)
      return `${
        colors[(idx % colors.length) + 1]
      } ${start}% ${cumulativeRatio}%`;
    return `${colors[idx % colors.length]} ${start}% ${cumulativeRatio}%`;
  });
  const backgroundStyle = `conic-gradient(${segments.join(", ")})`;

  return (
    <div className={s.pageContainer}>
      <h2 className={s.title}>Portfolio Chart</h2>
      <div className={s.donutChart} style={{ background: backgroundStyle }}>
        <div className={s.innerText}>
          {data.portfolioDetails.map((detail, idx) => (
            <div key={idx}>
              <span>{`${ratioList[idx]}% ${detail.eventName}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

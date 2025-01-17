import { eventDatas } from "@/mock/myPageData";
import s from "./mypage.module.scss";

export default function MyPage() {
  const createConicGradient = () => {
    const colors = ["#7373A7", "#44448A", "#16166d"];
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
      <h2>Portfolio Chart</h2>
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
import { PortfolioDetails } from "@/mock/temporaryPortfolio";
import s from "./TempPortfolioDetails.module.scss";

interface TempPortfolioProps {
  portfolioDetails: PortfolioDetails | undefined;
}

export default function TempPortfolioDetails({
  portfolioDetails,
}: TempPortfolioProps) {
  if (portfolioDetails === undefined) {
    return <div>Network Error</div>;
  }
  return (
    <div className={s.container}>
      <div className={s.title}>Portfolio Details</div>
      {portfolioDetails.map((item, idx) => (
        <div className={s.eventItem} key={idx}>
          <div className={s.eventTitle}>{item.eventName}</div>
          <div className={s.decisionSection}>
            <p className={s.discription}>My Decision :</p>
            <p className={s.decision}>{item.decision}</p>
          </div>
          <div className={s.detailsSection}>
            <p className={s.detail}>{`Price: ${item.price}$`}</p>
            <p className={s.detail}>{`Betting Amount: ${item.amount}`}</p>
            <p className={s.detail}>{`Total Cost: ${
              item.price * item.amount
            }$`}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

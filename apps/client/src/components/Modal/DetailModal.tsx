import { PortfolioDetails } from "@/mock/temporaryPortfolio";
import s from "./DetailModal.module.scss";
import Image from "next/image";
interface DetailModalProps {
  portfolioDetails: PortfolioDetails;
  disableModal: () => void;
}

export default function DetailModal({
  portfolioDetails,
  disableModal,
}: DetailModalProps) {
  return (
    <div className={s.modalBackGround} onClick={disableModal}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.modalHeader}>
          <div className={s.title}>Portfolio Details</div>
          <Image
            className={s.closeButton}
            src={"/closeWindow.svg"}
            width={28}
            height={28}
            alt="close"
            onClick={disableModal}
          />
        </div>

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
    </div>
  );
}

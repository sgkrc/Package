import Link from "next/link";
import s from "./RewardModal.module.scss";
interface RewardModalProps {
  message: string;
  disableModal: () => void;
}

export default function ToCartModal({ message, disableModal }: RewardModalProps) {
  return (
    <div className={s.modalBackGround} onClick={disableModal}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={s.content}>
          Good Luck for your Betting!<br/><span className={s.message}>{message}$</span><br/>Will be your final reward if you win all events!!!
        </h2>
        <div className={s.buttonSection}>
          <Link className={s.other} onClick={disableModal} href={"/"}>
            Bet Other Event
          </Link>
          <Link
            className={s.goCart}
            onClick={disableModal}
            href={"/temporaryportfolio"}
          >
            Show My Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

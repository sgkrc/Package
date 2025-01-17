import Link from "next/link";
import s from "./ToCartModal.module.scss";
interface CartModalProps {
  disableModal: () => void;
}

export default function ToCartModal({ disableModal }: CartModalProps) {
  return (
    <div className={s.modalBackGround} onClick={disableModal}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={s.content}>
          Your Bet has Successfully Added to Temporary Portfolio!
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
            Show My Temporary Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

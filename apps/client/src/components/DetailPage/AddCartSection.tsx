import { useEffect, useState } from "react";
import s from "./AddCartSection.module.scss";
import { OptionData } from "@/mock/pageData";

interface CartSectionProps {
  options: OptionData[];
  selectedOptionID: number | undefined;
  resetOptionState: () => void;
  showModal: () => void;
  onSelect?: (data: { name: string; amount: number }) => void;
}

export default function AddCartSection({
  options,
  selectedOptionID,
  resetOptionState,
  showModal,
}: CartSectionProps) {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (selectedOptionID !== undefined) {
      setAmount(1);
    } else {
      setAmount(0);
    }
  }, [selectedOptionID]);

  console.log(options.length);

  const increaseAmount = () => {
    if (amount !== 0) {
      setAmount(amount + 1);
    }
  };

  const decreaseAmount = () => {
    if (amount !== 0) {
      setAmount(amount - 1);
    }
    if (amount === 1) {
      resetOptionState();
    }
  };

  return (
    <div className={s.container}>
      <div className={s.amountSection}>
        <button className={s.minus} onClick={decreaseAmount}>
          -
        </button>
        <p className={s.amount}>{amount}</p>
        <button className={s.plus} onClick={increaseAmount}>
          +
        </button>
      </div>
      {selectedOptionID === undefined ? (
        <button className={s.disabledButton} onClick={showModal}>
          Add to Portfolio!
        </button>
      ) : (
        <button className={s.addCart} onClick={showModal}>
          Add to Portfolio!
        </button>
      )}
    </div>
  );
}

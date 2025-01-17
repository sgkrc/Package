import { useEffect, useState } from "react";
import s from "./Option.module.scss";
import { OptionData } from "@/mock/pageData";
import AddCartSection from "./AddCartSection";
import ToCartModal from "../Modal/ToCartModal";

interface OptionProps {
  options: OptionData[];
}

export default function Option({ options }: OptionProps) {
  const [optionSelect, setOptionSelect] = useState<number | undefined>();
  const [modalState, setModalState] = useState(false);

  const buttonHeight = 60 / options.length;

  useEffect(() => {
    console.log(optionSelect);
    console.log(`modalState: ${modalState}`);
  }, [modalState, optionSelect]);

  function selectOption(idx: number) {
    if (idx == optionSelect) {
      setOptionSelect(undefined);
    } else {
      setOptionSelect(idx);
    }
  }

  const resetOptionSelect = () => {
    setOptionSelect(undefined);
    console.log(optionSelect);
  };

  const showModal = () => {
    if (optionSelect !== undefined) {
      setModalState(true);
    }
  };

  const disableModal = () => {
    setModalState(false);
  };

  return (
    <div className={s.optionSection}>
      {modalState ? <ToCartModal disableModal={disableModal} /> : ""}
      <div className={s.options}>
        {options.map((option, idx) => (
          <div
            className={`${s.option} ${optionSelect === idx ? s.select : ""}`}
            key={idx}
            style={{ height: `${buttonHeight}%` }}
            onClick={() => selectOption(idx)}
          >
            {option.name}
          </div>
        ))}
      </div>
      <AddCartSection
        options={options}
        selectedOptionID={optionSelect}
        resetOptionState={resetOptionSelect}
        showModal={showModal}
      />
    </div>
  );
}

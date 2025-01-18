import { TempEvent } from "@/mock/temporaryPortfolio";
import s from "./PortfolioLists.module.scss";
import { useEffect, useState } from "react";
import BarGraph from "../Graphs/BarGraph";

interface PortfolioListsProps {
  tempEvents: TempEvent[] | undefined;
}

export default function PortfolioLists({ tempEvents }: PortfolioListsProps) {
  const [selectedItem, setSelectedItem] = useState<TempEvent | undefined>();
  const [showItem, setShowItem] = useState(false);

  useEffect(() => {
    if (tempEvents !== undefined) {
      setSelectedItem(tempEvents[0]);
    } else {
      setSelectedItem(undefined);
    }
  }, [tempEvents]);

  const handleShow = () => {
    setShowItem(!showItem);
  };

  const selectEvent = (item: TempEvent) => {
    if (tempEvents !== undefined) {
      setSelectedItem(
        tempEvents?.find((eventdata) => {
          return eventdata === item;
        })
      );
      setShowItem(!showItem);
    }
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Chances of Events in Portfolio</h2>
      <div
        className={`${s.selectedItem} ${showItem ? s.showEvents : ""}`}
        onClick={handleShow}
      >
        {selectedItem?.eventName}
        <div className={s.triangle}></div>
        {showItem ? (
          <div className={s.dropDown}>
            {tempEvents?.map((item, idx) => (
              <li
                className={s.eventName}
                key={idx}
                onClick={() => selectEvent(item)}
              >
                {item.eventName}
              </li>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className={s.graphSection}>
        {selectedItem !== undefined ? (
          <BarGraph totalVolume={100} optionDatas={selectedItem?.options} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

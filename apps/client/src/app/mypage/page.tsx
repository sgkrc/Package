"use client";

import s from "./mypage.module.scss";
import Risk from "@/components/Risk/Risk";
import PortfolioLists from "@/components/PortfolioLists/PortfolioLists";
import { useEffect, useState } from "react";
import {
  tempPortfolioData,
  TempPortfolioData,
} from "@/mock/temporaryPortfolio";
import DoughnutGraph from "@/components/Graphs/DoughnutGraph";

export default function MyPage() {
  const [data, setData] = useState<TempPortfolioData>();
  const [modalState, setModalState] = useState(false);

  const handleModalState = () => {
    setModalState(!modalState);
  };

  useEffect(() => {
    setData(tempPortfolioData);
  }, []);

  return (
    <div className={s.pageContainer}>
      <div className={s.menuSection}>
        <div className={s.titleContainer}>
          <button className={s.detailButton} onClick={handleModalState}>
            Show Portfolio Details
          </button>
        </div>
        <div className={s.connectWallet}>Please Connect Your Wallet First!</div>
      </div>
      <div className={s.content}>
        <div className={s.detailSection}>
          {data === undefined ? "" : <DoughnutGraph data={data} />}
        </div>
        <div className={s.riskSection}>
          <Risk risk={data?.risk} />
          <PortfolioLists tempEvents={data?.tempEvents} />
        </div>
      </div>
    </div>
  );
}

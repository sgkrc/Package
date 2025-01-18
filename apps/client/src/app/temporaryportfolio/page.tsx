"use client";

import TempPortfolioDetails from "@/components/TempPortfolioDetails/TempPortfolioDetails";
import s from "./TemporaryPortfolio.module.scss";
import { useEffect, useState } from "react";
import {
  tempPortfolioData,
  TempPortfolioData,
} from "@/mock/temporaryPortfolio";
import Risk from "@/components/Risk/Risk";
import PortfolioLists from "@/components/PortfolioLists/PortfolioLists";

export default function TemporaryPortfolio() {
  const [data, setData] = useState<TempPortfolioData>();

  useEffect(() => {
    setData(tempPortfolioData);
  }, []);

  return (
    <div className={s.pageContainer}>
      <div className={s.menuSection}>
        <div className={s.titleContainer}></div>
        <div className={s.connectWallet}>Please Connect Your Wallet First!</div>
      </div>
      <div className={s.content}>
        <div className={s.detailSection}>
          <TempPortfolioDetails portfolioDetails={data?.portfolioDetails} />
        </div>
        <div className={s.riskSection}>
          <Risk risk={data?.risk} />
          <PortfolioLists tempEvents={data?.tempEvents} />
        </div>
      </div>
    </div>
  );
}

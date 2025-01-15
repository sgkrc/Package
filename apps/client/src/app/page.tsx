"use client";

import { useState } from "react";
import s from "./page.module.scss";
import Category from "@/components/Category/Category";
import Image from "next/image";

const data = [
  { id: 1, title: "Yoon arrested by January 31?", volume: "21,000,000" },
  {
    id: 2,
    title: "TikTok banned in the US before May 2025?",
    volume: "1,750,000",
  },
  {
    id: 3,
    title: "Israel x Hamas ceasefire by January 31?",
    volume: "495,000,000",
  },
  {
    id: 4,
    title: "What price will Bitcoin hit in January?",
    volume: "9,000,000",
  },
  { id: 5, title: "Elon Musk # of tweets January 10-17?", volume: "12,000" },
  { id: 6, title: "Next President of Greece?", volume: "1,500,000" },
];

export type SortType = "Top" | "Trending" | "New" | "All";

export default function Home() {
  const [selected, setSelected] = useState<SortType>("Top");

  const selectAll = () => {
    setSelected("All");
  };

  const selectTop = () => {
    setSelected("Top");
  };

  const selectNew = () => {
    setSelected("New");
  };

  const selectTrending = () => {
    setSelected("Trending");
  };
  console.log(selected);

  return (
    <div className={s.mainPage}>
      <div className={s.menuSection}>
        <div className={s.menuContainer}>
          <Category category="Top" selected={selected} onClick={selectTop} />
          <Category
            category="Trending"
            selected={selected}
            onClick={selectTrending}
          />
          <Category category="New" selected={selected} onClick={selectNew} />
          <Category category="All" selected={selected} onClick={selectAll} />
        </div>

        <div className={s.connectWallet}>Please Connect Your Wallet First!</div>
      </div>

      <div className={s.contentSection}>
        {data.map((item) => (
          <div className={s.boxContainer} key={item.id}>
            <div className={s.imageSection}>image</div>
            <h3 className={s.title}>{item.title}</h3>
            <div className={s.boxTail}>
              <div className={s.activePart}>
                <Image src={"/heart.svg"} width={24} height={24} alt="" />
                <div className={s.betButton}>Go Bet</div>
              </div>
              <div className={s.volume}>
                <p className={s.volumeTitle}>volume</p>
                <p className={s.volumeTitle}>{item.volume}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

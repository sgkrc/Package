"use client";

// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import s from "./layout.module.scss";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  console.log(pathName.includes("mypage"));
  return (
    <nav className={s.topBar}>
      <Link href={"/"} className={s.logo}>
        <Image
          src={"/groovybetLogo.png"}
          height={66}
          width={48}
          alt="logo"
          priority
        />
      </Link>
      <div className={s.searchSection}>
        <input className={s.search} placeholder="Search Events" />
        <Image
          className={s.searchIcon}
          src={"/search.svg"}
          height={32}
          width={32}
          alt="search"
        />
      </div>
      <div className={s.buttonSection}>
        <Link
          className={`${s.navContent} ${
            pathName.includes("temporaryportfolio") ? s.active : ""
          }`}
          href={"/temporaryportfolio"}
        >
          {" "}
          {pathName.includes("temporaryportfolio") ? (
            <Image
              src={"/portfolioInProgressSelected.svg"}
              height={28}
              width={28}
              alt="icon"
            />
          ) : (
            <Image
              src={"/portfolioInProgress.svg"}
              height={28}
              width={28}
              alt="icon"
            />
          )}
          <p
            className={`${s.portfolioInProgressDescription} ${
              pathName.includes("temporaryportfolio") ? s.active : ""
            }`}
          >
            Temporary Portfolio
          </p>
        </Link>
        <Link
          className={`${s.navContent} ${
            pathName.includes("mypage") ? s.active : ""
          }`}
          href={"/mypage"}
        >
          {pathName.includes("mypage") ? (
            <Image
              src={"/myStatisticsSelected.svg"}
              height={28}
              width={28}
              alt="icon"
            />
          ) : (
            <Image
              src={"/myStatistics.svg"}
              height={28}
              width={28}
              alt="icon"
            />
          )}
          <p
            className={`${s.myPageDescription} ${
              pathName.includes("mypage") ? s.active : ""
            }`}
          >
            My Page
          </p>
        </Link>
      </div>

      <button className={s.connectWallet}>Connect Wallet</button>
    </nav>
  );
}

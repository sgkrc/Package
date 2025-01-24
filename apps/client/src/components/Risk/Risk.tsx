import { useEffect, useState } from "react";
import s from "./Risk.module.scss";
import { ethers } from "ethers";

import { Web3Auth, Web3AuthOptions } from "@web3auth/modal";
import { IProvider, CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { useWallet } from "@/app/walletcontext";
// import RPC from "../ethersRPC";
import RewardModal from "../Modal/RewardModal";

import CONTRACT_ABI from "../abi/EventPurchase.json";

const clientId = "BORLcg7MniYpQ8QT4cJdMHYfJAvmi_TbaAZbP4WYvCW_cnG9MhUs5SSPXnjiX1MAQvTZT4jVUkzToPCIsTFK-L8";
const CONTRACT_ADDRESS = "0xc95b9e344E01c048C82Fa76C13a9019beade615a";

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x1", // Ethereum Mainnet
  rpcTarget: "https://rpc.ankr.com/eth", // Ethereum RPC
  displayName: "Ethereum Mainnet",
  blockExplorerUrl: "https://etherscan.io",
  ticker: "ETH",
  tickerName: "Ethereum",
  logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig },
});

const web3AuthOptions: Web3AuthOptions = {
  clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  privateKeyProvider,
};

const web3auth = new Web3Auth(web3AuthOptions);

function getEventCaseByRisk(risk: number) {
  switch (true) {
    case risk <= 25:
      return {
        eventNames: ["Low Risk Event 1", "Low Risk Event 2", "Low Risk Event 3"],
        eventDecisions: ["Option A", "Option B", "Option C"],
        prices: [100, 200, 300],
        quantities: [2, 3, 4],
      };
    case risk <= 50:
      return {
        eventNames: ["Medium Risk Event 1", "Medium Risk Event 2", "Medium Risk Event 2"],
        eventDecisions: ["Option D", "Option E", "Option F"],
        prices: [100, 200, 300],
        quantities: [2, 3, 4],
      };
    case risk <= 75:
      return {
        eventNames: ["High Risk Event 1", "High Risk Event 2", "High Risk Event 3"],
        eventDecisions: ["Option G", "Option H", "Optipn I"],
        prices: [100, 200, 300],
        quantities: [2, 3, 4],
      };
    case risk <= 100:
      return {
        eventNames: ["Extreme Risk Event 1", "Extreme Risk Event 2", "Extreme Risk Event 3"],
        eventDecisions: ["Option J", "Option K", "Option L"],
        prices: [100, 200, 300],
        quantities: [2, 3, 4],
      };
    default:
      throw new Error("Invalid risk value");
  }
}

export default function Risk({ risk }: { risk: number | undefined }) {
  const { provider, walletAddress } = useWallet();
  const [riskValue, setRiskValue] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [finalReward, setFinalReward] = useState<string>("");

  useEffect(() => {
    if (risk !== undefined) {
      setRiskValue(risk);
    } else {
      setRiskValue(0);
    }
  }, [risk]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRiskValue(Number(e.target.value));
  };

  async function handlePurchase(riskValue: number) {
    try {
      if (!provider) {
        alert("Please connect your wallet first.");
        return;
      }

      const ethersProvider = new ethers.BrowserProvider(provider);
      const signer = await ethersProvider.getSigner();

      const contractInterface = new ethers.Interface(CONTRACT_ABI.abi);

      const contract = new ethers.Contract(CONTRACT_ADDRESS, contractInterface, signer);

      const { prices, quantities } = getEventCaseByRisk(riskValue);

      const result = await contract.calculateFinalReward(riskValue);

      const finaleResult = result / BigInt(100);

      setFinalReward(finaleResult.toString());
      setModalVisible(true);
    } catch (error) {
      console.error("Error during purchase:", error);
      alert("An error occurred during the purchase. Please try again.");
    }
  }
  const disableModal = () => {
    setModalVisible(false);
  };

  return (
    <div className={s.container}>
      {modalVisible && (
        <RewardModal
          message={finalReward}
          disableModal={disableModal}
        />
      )}
      <h2 className={s.title}>Set Your Risk</h2>
      {risk === undefined ? (
        <div className={s.barSection}>Network Error</div>
      ) : (
        <div className={s.barSection}>
          <p className={s.percent}>0%</p>
          <input
            className={s.bar}
            type="range"
            min={0}
            max={100}
            value={riskValue}
            onChange={handleChange}
            style={{ $riskVal: `${riskValue}%` } as React.CSSProperties}
          />
          <p className={s.percent}>100%</p>
        </div>
      )}
      <div className={s.indicatorSection}>
        <div className={s.indicator}>{riskValue} %</div>
        {riskValue == risk ? (
          <button className={s.disabledButton}>Change Risk</button>
        ) : (
          <button className={s.acceptButton} onClick={() => handlePurchase(riskValue)}>Bet with Risk!</button>
        )}
      </div>
    </div>
  );
}

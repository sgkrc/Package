"use client"

import React, { createContext, useState, useContext } from "react";

interface WalletContextType {
  walletAddress: string | null;
  provider: any | null; 
  setWalletAddress: (address: string | null) => void;
  setProvider: (provider: any | null) => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [provider, setProvider] = useState<any | null>(null); 

  return (
    <WalletContext.Provider value={{ walletAddress, provider, setWalletAddress, setProvider }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};

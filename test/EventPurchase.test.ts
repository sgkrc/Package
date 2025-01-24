import { Contract } from "ethers";

const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EventPurchase Contract", function () {
  let EventPurchase: Contract;
  let eventPurchase: Contract;
  let owner;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();

    EventPurchase = await ethers.getContractFactory("EventPurchase");
    eventPurchase = await EventPurchase.deploy();
  });

  it("should return the correct total bet", async () => {
    const prices = [100, 200, 300];
    const quantities = [2, 3, 4];
    const risk = 23;

    const [realFinalReward, totalBet, newRisk] = await eventPurchase.calculateFinalReward(prices, quantities, risk);

    // Check that returned values are correct
    expect(totalBet).to.equal(2000);
    expect(newRisk).to.equal(123);
    expect(realFinalReward).to.equal(2460);
  });
});

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract EventPurchase {

    // 미리 설정된 가격과 수량
    uint256[] public prices = [100, 200, 300];
    uint256[] public quantities = [2, 3, 4];

    function getPrices() public view returns (uint256[] memory) {
        return prices;
    }

    function getQuantities() public view returns (uint256[] memory) {
        return quantities;
    }

    function calculateFinalReward(uint256 risk) public returns (uint256 finalReward) {
        uint256 totalBet = 0;
        for (uint256 i = 0; i < prices.length; i++) {
            totalBet += prices[i] * quantities[i];
        }

        uint256 newRisk = 100 + risk;

        uint256[] memory adjustedRewards = new uint256[](prices.length);

        for (uint256 i = 0; i < prices.length; i++) {
            adjustedRewards[i] = prices[i] * newRisk;
        }

        finalReward = 0;
        for (uint256 i = 0; i < quantities.length; i++) {
            finalReward += quantities[i] * adjustedRewards[i];
        }
    }
}

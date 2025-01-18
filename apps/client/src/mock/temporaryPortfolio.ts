import { OptionData } from "./pageData";

export interface PortfolioDetail {
  eventName: string;
  decision: string;
  price: number;
  amount: number;
}

export type PortfolioDetails = PortfolioDetail[];

export const portfolioDetails: PortfolioDetails = [
  { eventName: "Event1", decision: "option2", price: 1, amount: 20 },
  { eventName: "Event2", decision: "option3", price: 0.2, amount: 30 },
  { eventName: "Event3", decision: "option1", price: 0.4, amount: 80 },
  { eventName: "Event4", decision: "option2", price: 0.8, amount: 120 },
];

export interface TempEvent {
  eventName: string;
  options: OptionData[];
}

type TempEvents = TempEvent[];

export const tempEvents: TempEvents = [
  {
    eventName: "Event1",
    options: [
      { name: "op1", volume: 80 },
      { name: "op2", volume: 20 },
    ],
  },
  {
    eventName: "Event2",
    options: [
      { name: "op1", volume: 20 },
      { name: "op2", volume: 30 },
      { name: "op3", volume: 50 },
    ],
  },
  {
    eventName: "Event3",
    options: [
      { name: "op1", volume: 10 },
      { name: "op2", volume: 32 },
      { name: "op1", volume: 10 },
      { name: "op2", volume: 48 },
    ],
  },
  {
    eventName: "Event4",
    options: [
      { name: "op1", volume: 19 },
      { name: "op2", volume: 81 },
    ],
  },
];

export interface TempPortfolioData {
  portfolioDetails: PortfolioDetails;
  tempEvents: TempEvents;
  risk: number;
}

export const tempPortfolioData = {
  portfolioDetails: portfolioDetails,
  tempEvents: tempEvents,
  risk: 80,
};

export interface MyPageData {
  portfolioDetails: PortfolioDetails;
  Events: TempEvents;
  risk: number;
}

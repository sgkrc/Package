export interface EventData {
  name: string;
  volume: number;
}

export type EventDatas = EventData[];

export const eventDatas: EventDatas = [
  { name: "Event1", volume: 25 },
  { name: "Event2", volume: 25 },
  { name: "Event3", volume: 50 },
];

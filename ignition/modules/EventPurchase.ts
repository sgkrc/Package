import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const EventPurchaseModule = buildModule("EventPurchaseModule", (m) => {
  // EventPurchase 컨트랙트를 배포 (생성자에 전달할 매개변수가 없음)
  const eventPurchase = m.contract("EventPurchase");

  return { eventPurchase };
});

export default EventPurchaseModule;

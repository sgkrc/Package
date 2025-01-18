import { useEffect, useState } from "react";
import s from "./Risk.module.scss";

interface RiskProps {
  risk: number | undefined;
}

export default function Risk({ risk }: RiskProps) {
  const [riskValue, setRiskValue] = useState(0);

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

  return (
    <div className={s.container}>
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
          <button className={s.acceptButton}>Change Risk</button>
        )}
      </div>
    </div>
  );
}

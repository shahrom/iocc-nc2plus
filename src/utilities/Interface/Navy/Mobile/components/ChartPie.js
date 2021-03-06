import React, { useState, useEffect } from "react";
import { PieChart, PieArcSeries } from "reaviz";

export function ChartPie1() {
  const [data, setData] = useState([
    { key: "PATROL", data: 22 },
    { key: "SUPPORT", data: 45 },
    { key: "TRAINING", data: 26 },
    { key: "STRIKE", data: 8 },
  ]);

  return (
    <div>
      <p
        style={{
          color: "gray",
          textAlign: "center",
        }}
      >
        TOTAL VESSEL READINESS
      </p>
      <PieChart
        height={200}
        width={window.innerWidth - 100}
        data={data}
        displayAllLabels={false}
        series={
          <PieArcSeries
            cornerRadius={204}
            padAngle={0.52}
            padRadius={15}
            doughnut={true}
            colorScheme={["#0088FE", "#1BA716", "orange", "red"]}
          />
        }
      />
    </div>
  );
}

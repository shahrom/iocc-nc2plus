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
      <PieChart
        height={250}
        width={300}
        data={data}
        series={
          <PieArcSeries
            cornerRadius={4}
            padAngle={0.02}
            padRadius={200}
            doughnut={true}
            colorScheme={["#0088FE", "#1BA716", "orange", "red"]}
          />
        }
      />
    </div>
  );
}

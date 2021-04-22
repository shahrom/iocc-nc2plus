/*
 * --------------------------------------------------------------------
 * Project:
 * Version: 0.1.1
 * File: LeftDrawer.js
 * Created: Wednesday, 4th November 2020 2:08:25 pm
 * Modified: Thursday, 5th November 2020 1:32:22 am
 * Author: Shahrom Azmi Nazeer (shahrom@scs.my)
 *
 * Copyright (C) 2020 - System Consultancy Services Sdn. Bhd.
 * --------------------------------------------------------------------
 */

import React from "react";

// component
import ACCBarChart from "./ACCBarChart";
import CircularStatic from "./CircularStatic";

export default function VesselStatus(props) {
  const childrenSideBySideStyle = {
    display: "flex",
    flexDirection: "row",
  };

  return (
    <div style={{ marginLeft: 100 }}>
      <div style={childrenSideBySideStyle}>
        <div style={{ width: 110 }} />
        <CircularStatic value={5} max={5} color={"orange"} label={"TOTAL RADAR"} />
        <div style={{ width: 20 }} />
        <CircularStatic value={1} max={5} color={"#1BA716"} label={"TOTAL SERVICEABLE"} />
        <div style={{ width: 20 }} />
        <CircularStatic value={20} max={100} color={"red"} label={"% OVERALL"} />
      </div>

      <hr
        style={{
          backgroundColor: "gray",
          margin: 30,
          opacity: 0.2,
          marginLeft: -140,
        }}
      />

      <p style={{ color: "white", textAlign: "center", marginLeft: -30 }}>
        RADAR LOCATION
      </p>
      <p style={{ color: "green", textAlign: "left", marginLeft: 0 }}>Operational</p>
      <p style={{ color: "red", textAlign: "left", marginLeft: 0 }}>Non-Operational</p>

      <div>
        <ACCBarChart />
      </div>
      <br />
    </div>
  );
}

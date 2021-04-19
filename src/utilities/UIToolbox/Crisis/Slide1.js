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
import Content1 from "./components/Content1";

export default function Slide1(props) {
  return (
    <div
      style={{
        backgroundColor: "rgba(17,21,30,0.7)",
      }}
    >
      <div>
        <p
          style={{
            textAlign: "center",
            padding: 10,
            fontSize: 28,
            color: "white",
            backgroundColor: "#0B3B84",
          }}
        >
          SLIDE 1
        </p>
        <Content1 />
      </div>
    </div>
  );
}
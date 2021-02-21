import React from "react";
import ReactDom from "react-dom";

import { Input } from "components/input";

import "./reset.scss";

ReactDom.render(
  <div style={{ margin: "24px" }}>
    <Input label={"test"} value={""} onChange={() => null} />
  </div>,
  document.getElementById("root")
);

import React from "react";
import ReactDom from "react-dom";

import { Input } from "components/input";

ReactDom.render(
  <Input label={"test"} value={""} onChange={() => null} />,
  document.getElementById("root")
);

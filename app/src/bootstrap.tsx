import React from "react";
import ReactDom from "react-dom";

import { Calculator } from "pages/calculator";

import "./scss/global.scss";
import "./scss/reset.scss";

ReactDom.render(<Calculator />, document.getElementById("root"));

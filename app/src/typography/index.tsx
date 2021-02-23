import React, { ReactText } from "react";

import "./styles.scss";

type TText = {
  children: ReactText;
};

const Heading1 = ({ children }: TText) => (
  <h1 className="heading-1">{children}</h1>
);

const Caption1 = ({ children }: TText) => (
  <p className="caption-1">{children}</p>
);

export { Heading1, Caption1 };

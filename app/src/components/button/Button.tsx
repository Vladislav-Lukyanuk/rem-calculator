import React, { ReactElement } from "react";

import "./button.styles.scss";

type TButton = {
  children: ReactElement;
  onClick: () => void;
};

export const Button = ({ children, onClick }: TButton) => (
  <div className="button" onClick={onClick}>
    {children}
  </div>
);

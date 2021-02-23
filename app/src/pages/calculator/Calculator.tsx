import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Exchange } from "assets/images/exchange";
import { ESize } from "assets/images/types";
import { Input } from "components/input";
import { Button } from "components/button";
import { Heading1 } from "typography";
import { calculator as calculatorService } from "services/calculator";

import "./calculator.styles.scss";

const TITLE = "REM/PX Calculator";

const INITIAL_STATE = {
  fontSize: 16,
  isPxMeasure: false,
  px: 16,
  rem: 1,
};

const LABEL = {
  fontSize: "Font size",
  px: "PX",
  rem: "REM",
};

const calculator = calculatorService();

export const Calculator = () => {
  const [fontSize, setFontSize] = useState(INITIAL_STATE.fontSize);
  const [isPxMeasure, setMeasure] = useState(INITIAL_STATE.isPxMeasure);
  const [px, setPx] = useState(INITIAL_STATE.px);
  const [rem, setRem] = useState(INITIAL_STATE.rem);

  useEffect(() => {
    calculator.convert(isPxMeasure, fontSize, rem, px).then(({ px, rem }) => {
      if (px) {
        setPx(px);
      }
      if (rem) {
        setRem(rem);
      }
    });
  }, [isPxMeasure, fontSize, rem, px, setPx, setRem]);

  const measures = useMemo(() => {
    const fields = [
      <div className="calculator-input">
        <Input label={LABEL.px} value={px} onChange={setPx} />
      </div>,
      <div className="calculator-input">
        <Input label={LABEL.rem} value={rem} onChange={setRem} />
      </div>,
    ];

    return isPxMeasure ? fields : fields.reverse();
  }, [px, rem, setPx, setRem, isPxMeasure]);

  const toggle = useCallback(() => {
    setMeasure((isPxMeasure) => !isPxMeasure);
  }, [setMeasure]);

  return (
    <div className="calculator">
      <div className="calculator-logo">
        <Heading1>{TITLE}</Heading1>
      </div>
      <div className="calculator-font-size">
        <div className="calculator-input">
          <Input
            label={LABEL.fontSize}
            value={fontSize}
            onChange={setFontSize}
          />
        </div>
      </div>
      <div className="calculator-toggler">
        <Button onClick={toggle}>
          <Exchange size={ESize.micro} />
        </Button>
      </div>
      {measures}
    </div>
  );
};

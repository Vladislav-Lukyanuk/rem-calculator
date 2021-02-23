import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Exchange } from "assets/images/exchange";
import { ESize } from "assets/images/types";
import { NumberInput } from "components/input";
import { Button } from "components/button";
import { Heading1 } from "typography";
import { Calculator as CalculatorService } from "services/calculator";

import "pages/page.styles.scss";
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

const calculator = new CalculatorService();

export const Calculator = () => {
  const [fontSize, setFontSize] = useState(INITIAL_STATE.fontSize);
  const [isPxMeasure, setMeasure] = useState(INITIAL_STATE.isPxMeasure);
  const [px, setPx] = useState(INITIAL_STATE.px);
  const [rem, setRem] = useState(INITIAL_STATE.rem);

  useEffect(() => {
    calculator.convert(isPxMeasure, fontSize, rem, px).then(({ px, rem }) => {
      setPx(px);
      setRem(rem);
    });
  }, [isPxMeasure, fontSize, rem, px, setPx, setRem]);

  const measures = useMemo(() => {
    const fields = [
      <div className="calculator-input" key="px">
        <NumberInput label={LABEL.px} value={px} onChange={setPx} />
      </div>,
      <div className="calculator-input" key="rem">
        <NumberInput label={LABEL.rem} value={rem} onChange={setRem} />
      </div>,
    ];

    return isPxMeasure ? fields : fields.reverse();
  }, [px, rem, setPx, setRem, isPxMeasure]);

  const toggle = useCallback(() => {
    setMeasure((isPxMeasure) => !isPxMeasure);
  }, [setMeasure]);

  return (
    <div className="page">
      <div className="calculator">
        <div className="calculator-logo">
          <Heading1>{TITLE}</Heading1>
        </div>
        <div className="calculator-font-size">
          <div className="calculator-input">
            <NumberInput
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
    </div>
  );
};

import React, { useCallback, useEffect, useState } from "react";

import { Input } from "./Input";
import { TInput } from "./types";

const MASK = "^([1-9]{1}[0-9]{0,5}(.\\d{0,3})?)?$";
const EMPTY_STATE = "";

export const NumberInput = ({ label, value, onChange }: TInput<number>) => {
  const [outputState, setOutputState] = useState("");
  const [savedState, setSavedState] = useState("");

  useEffect(() => {
    setOutputState(value.toString());
  }, [value]);

  const onFocus = useCallback(() => {
    if (outputState === EMPTY_STATE) {
      return;
    }

    setSavedState(value.toString());
    setOutputState(EMPTY_STATE);
  }, [outputState, value, setSavedState, setOutputState]);

  const onBlur = useCallback(() => {
    if (outputState !== EMPTY_STATE) {
      return;
    }

    setOutputState(savedState);
    onChange(Number(savedState));
  }, [outputState, savedState, setOutputState]);

  const handleInputChange = useCallback(
    (stringValue: string) => {
      if (!RegExp(MASK).test(stringValue)) {
        return;
      }
      setOutputState(stringValue);

      const numberValue = Number(stringValue);
      if (numberValue) {
        onChange(numberValue);
      }
    },
    [onChange]
  );

  return (
    <div onFocus={onFocus} onBlur={onBlur}>
      <Input label={label} value={outputState} onChange={handleInputChange} />
    </div>
  );
};

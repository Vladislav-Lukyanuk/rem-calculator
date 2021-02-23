import React, { FormEvent, useMemo } from "react";
import { v4 } from "uuid";

import { Caption1 } from "typography";

import { TInput } from "./types";
import "./input.scss";

export const Input = ({
  label,
  value,
  onChange,
}: TInput<string>): JSX.Element => {
  const id = v4();

  const handleChange = useMemo(
    () => (event: FormEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value;

      onChange(value);
    },
    [onChange]
  );

  return (
    <div className="input">
      {label && (
        <div className="input-label">
          <Caption1>{label}</Caption1>
        </div>
      )}
      <label htmlFor={id} className="input-container">
        <input
          id={id}
          className="input-native"
          value={value}
          onChange={handleChange}
        />
        <div className="input-underline" />
      </label>
    </div>
  );
};

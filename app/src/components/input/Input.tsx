import React, { FormEvent, useMemo } from "react";
import { cn } from "@bem-react/classname";
import { v4 } from "uuid";

import "./input.scss";

const input = cn("input");

type TInput = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
};

export const Input = ({ label, value, onChange }: TInput): JSX.Element => {
  const id = v4();
  const inputClass = input();
  const labelClass = input("label");
  const containerClass = input("container");
  const nativeInputClass = input("native");
  const underlineClass = input("underline");

  const handleChange = useMemo(
    () => (event: FormEvent<HTMLInputElement>) => {
      onChange(event.currentTarget.value);
    },
    [onChange]
  );

  return (
    <div className={inputClass}>
      {label && (
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
      )}
      <div className={containerClass}>
        <input
          id={id}
          className={nativeInputClass}
          value={value}
          onChange={handleChange}
        />
        <div className={underlineClass} />
      </div>
    </div>
  );
};

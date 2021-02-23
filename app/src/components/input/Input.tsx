import React, { FormEvent, useMemo } from "react";
import { cn } from "@bem-react/classname";
import { v4 } from "uuid";

import { Caption1 } from "typography";

import "./input.scss";

const input = cn("input");

type TInput<T> = {
  label?: string;
  value: T;
  onChange: (value: T) => void;
};

export const Input = ({
  label,
  value,
  onChange,
}: TInput<number>): JSX.Element => {
  const id = v4();
  const inputClass = input();
  const labelClass = input("label");
  const containerClass = input("container");
  const nativeInputClass = input("native");
  const underlineClass = input("underline");

  const handleChange = useMemo(
    () => (event: FormEvent<HTMLInputElement>) => {
      const value = Number(event.currentTarget.value);

      onChange(value);
    },
    [onChange]
  );

  return (
    <div className={inputClass}>
      {label && (
        <div className={labelClass}>
          <Caption1>{label}</Caption1>
        </div>
      )}
      <label htmlFor={id} className={containerClass}>
        <input
          id={id}
          className={nativeInputClass}
          value={value}
          onChange={handleChange}
        />
        <div className={underlineClass} />
      </label>
    </div>
  );
};

export type TInput<T> = {
  label?: string;
  value: T;
  onChange: (value: T) => void;
};

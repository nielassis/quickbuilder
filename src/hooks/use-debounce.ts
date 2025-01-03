import { useEffect, useState } from "react";

export const UseDebounce = <T>(value: T, dalay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), dalay || 500);

    return () => clearTimeout(timer);
  }, [dalay, value]);

  return debouncedValue;
};

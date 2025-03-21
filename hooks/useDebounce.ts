import { useState, useEffect, useRef } from "react";

const useDebounce = <T>(
  value: T,
  delay: number = 500,
  callback?: (debouncedValue: T) => void
): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setDebouncedValue(value);
      if (callback) callback(value);
    }, delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [value, delay, callback]);

  return debouncedValue;
};

export default useDebounce;

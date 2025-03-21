import { useState, useEffect, useRef } from "react";

/**
 * useDebounce - A custom React hook to debounce input values.
 * 
 * @param value The value to be debounced.
 * @param delay The debounce delay in milliseconds (default: 500ms).
 * @param callback Optional callback function that runs when the debounced value updates.
 * @returns The debounced value.
 */
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

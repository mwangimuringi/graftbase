type DebounceFunction<T extends (...args: any[]) => void> = {
  (this: ThisParameterType<T>, ...args: Parameters<T>): void;
  cancel: () => void;
};

/**
 * Creates a debounce function that delays invoking the provided function until after
 * a specified wait time has elapsed since the last invocation.
 *
 * @param func - The function to debounce.
 * @param wait - The number of milliseconds to delay.
 * @param immediate - If true, trigger on the leading edge instead of the trailing.
 * @returns A debounced function with a cancel method.
 */
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number,
  immediate = false
): DebounceFunction<T> {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const debouncedFunction: DebounceFunction<T> = function (
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ) {
    const context = this;

    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };

  debouncedFunction.cancel = () => {
    if (timeout) clearTimeout(timeout);
    timeout = null;
  };

  return debouncedFunction;
}

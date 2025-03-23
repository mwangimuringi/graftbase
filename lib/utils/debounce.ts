type DebounceFunction<T extends (...args: any[]) => void> = {
    (this: ThisParameterType<T>, ...args: Parameters<T>): void;
    cancel: () => void;
  };

  export function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number,
    immediate = false
  ) {
    let timer: NodeJS.Timeout | null = null;
  
    return function (...args: Parameters<T>) {
      const callNow = immediate && !timer;
      clearTimeout(timer as NodeJS.Timeout);
      timer = setTimeout(() => {
        timer = null;
        if (!immediate) func(...args);
      }, delay);
  
      if (callNow) func(...args);
    };
  }  
  
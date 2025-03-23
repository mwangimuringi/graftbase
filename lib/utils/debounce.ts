type DebounceFunction<T extends (...args: any[]) => void> = {
    (this: ThisParameterType<T>, ...args: Parameters<T>): void;
    cancel: () => void;
  };

export function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ) {
    let timer: NodeJS.Timeout;
  
    return function (...args: Parameters<T>) {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  }
  
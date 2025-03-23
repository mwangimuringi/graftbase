export const Storage = {
    setItem<T>(key: string, value: T, useSession = false) {
      const storage = useSession ? sessionStorage : localStorage;
      storage.setItem(key, JSON.stringify(value));
    },
    getItem<T>(key: string, useSession = false): T | null {
      const storage = useSession ? sessionStorage : localStorage;
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : null;
    },
    removeItem(key: string, useSession = false) {
      const storage = useSession ? sessionStorage : localStorage;
      storage.removeItem(key);
    },
  };
  
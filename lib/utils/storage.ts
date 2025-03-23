export const Storage = {
    setItem(key: string, value: string) {
      localStorage.setItem(key, value);
    },
    getItem(key: string): string | null {
      return localStorage.getItem(key);
    },
    removeItem(key: string) {
      localStorage.removeItem(key);
    },
  };
  
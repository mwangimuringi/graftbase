export const Storage = {
    setItem<T>(key: string, value: T, useSession = false) {
      try {
        const storage = useSession ? sessionStorage : localStorage;
        storage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error setting ${key} in storage:`, error);
      }
    },
    getItem<T>(key: string, useSession = false): T | null {
      try {
        const storage = useSession ? sessionStorage : localStorage;
        const item = storage.getItem(key);
        return item ? JSON.parse(item) : null;
      } catch (error) {
        console.error(`Error getting ${key} from storage:`, error);
        return null;
      }
    },
    removeItem(key: string, useSession = false) {
      try {
        const storage = useSession ? sessionStorage : localStorage;
        storage.removeItem(key);
      } catch (error) {
        console.error(`Error removing ${key} from storage:`, error);
      }
    },
    clear(useSession = false) {
      try {
        const storage = useSession ? sessionStorage : localStorage;
        storage.clear();
      } catch (error) {
        console.error(`Error clearing storage:`, error);
      }
    },
  };
  
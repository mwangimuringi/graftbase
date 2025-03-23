const ENV = process.env.NODE_ENV || "development";

export const API_URLS = {
  BASE_URL:
    ENV === "production"
      ? "https://api.example.com"
      : "https://dev.api.example.com",
};

export const DEFAULT_SETTINGS = {
  THEME: "light",
  LANGUAGE: "en",
};

export const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
  GUEST: "guest",
};

export const PERMISSIONS = {
  READ: "read",
  WRITE: "write",
  DELETE: "delete",
};

export const CACHE_DURATION = {
  SHORT: 5 * 60 * 1000, // 5 minutes
  MEDIUM: 30 * 60 * 1000, // 30 minutes
  LONG: 60 * 60 * 1000, // 1 hour
};

export const API_TIMEOUT = 10000; // 10 seconds

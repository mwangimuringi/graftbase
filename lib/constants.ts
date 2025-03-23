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

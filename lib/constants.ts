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

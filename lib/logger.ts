import fs from "fs";
const getTimestamp = () => new Date().toISOString();
const LOG_FILE = "logs/app.json";

const logToFile = (level: string, message: string) => {
  const logEntry = { timestamp: getTimestamp(), level, message };
  fs.appendFileSync(LOG_FILE, JSON.stringify(logEntry) + "\n");
};

export const logger = {
  info: (message: string) => {
    const logEntry = `[${getTimestamp()}] [INFO] ${message}`;
    console.info(logEntry);
    logToFile("INFO", message);
  },
  warn: (message: string) => {
    const logEntry = `[${getTimestamp()}] [WARN] ${message}`;
    console.warn(logEntry);
    logToFile("WARN", message);
  },
  error: (message: string) => {
    const logEntry = `[${getTimestamp()}] [ERROR] ${message}`;
    console.error(logEntry);
    logToFile("ERROR", message);
  },
};

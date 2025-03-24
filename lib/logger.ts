import fs from "fs";
const getTimestamp = () => new Date().toISOString();
const LOG_FILE = "logs/app.log";

const logToFile = (level: string, message: string) => {
  fs.appendFileSync(LOG_FILE, `[${getTimestamp()}] [${level}] ${message}\n`);
};

export const log = (message: string) => {
  console.log(`[LOG] ${message}`);
};

const levels = { error: 0, warn: 1, info: 2 };
export const logger = {
  info: (message: string) => {
    if (levels[LOG_LEVEL] >= 2)
      console.info(`[${getTimestamp()}] [INFO] ${message}`);
  },
  warn: (message: string) => {
    if (levels[LOG_LEVEL] >= 1)
      console.warn(`[${getTimestamp()}] [WARN] ${message}`);
  },
  error: (message: string) =>
    console.error(`[${getTimestamp()}] [ERROR] ${message}`),
};

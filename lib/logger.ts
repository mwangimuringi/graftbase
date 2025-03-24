export const log = (message: string) => {
  console.log(`[LOG] ${message}`);
};

const getTimestamp = () => new Date().toISOString();

export const logger = {
  info: (message: string) =>
    console.info(`[${getTimestamp()}] [INFO] ${message}`),
  warn: (message: string) =>
    console.warn(`[${getTimestamp()}] [WARN] ${message}`),
  error: (message: string) =>
    console.error(`[${getTimestamp()}] [ERROR] ${message}`),
};

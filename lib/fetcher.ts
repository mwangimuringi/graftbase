const fetchWithTimeout = (
  url: string,
  options: RequestInit = {},
  timeout = 10000
) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const timer = setTimeout(() => controller.abort(), timeout);

  return fetch(url, { ...options, signal }).finally(() => clearTimeout(timer));
};

export const fetcher = async (
  url: string,
  options: RequestInit = {},
  retries = 3
) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetchWithTimeout(url, {
        ...options,
        headers: { ...defaultHeaders, ...(options.headers || {}) },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          `Error ${response.status}: ${
            errorData.message || response.statusText
          }`
        );
      }

      return response.json();
    } catch (error) {
      if (attempt === retries - 1) throw error;
    }
  }
};

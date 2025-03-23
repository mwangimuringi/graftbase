export const fetcher = async (url: string, options: RequestInit = {}) => {
    const defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  
    const response = await fetch(url, {
      ...options,
      headers: { ...defaultHeaders, ...(options.headers || {}) },
    });
  
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Error ${response.status}: ${errorData.message || response.statusText}`);
    }
  
    return response.json();
  };
  
import toast from 'react-hot-toast';

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
const DEFAULT_CONFIG = {
    headers: {
        "Content-Type": "application/json",
    }
};

export const apiFetch = async <T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  try {
    const config = { ...DEFAULT_CONFIG, ...options };
    const response = await fetch(NEXT_PUBLIC_API_URL+endpoint, config);

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      const message = JSON.parse(errorText);
      toast.error(message?.message || "An error occurred");
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    try {
      const data = await response.json();
      return data as T;
    } catch (err: any) {
      throw new Error("Error parsing JSON response: " + err.message);
    }
 
  } catch (err: any) {
    console.error("Fetch error:", err);
    throw err;
  }
};

export const apiGet = <T = any>(endpoint: string, options: RequestInit = {}) => {
  return apiFetch<T>(endpoint, { ...options, method: "GET" });
};

export const apiPost = <T = any>(endpoint: string, body: any, options: RequestInit = {}) => {
  return apiFetch<T>(endpoint, { ...options, method: "POST", body: JSON.stringify(body) });
};

export const apiPut = <T = any>(endpoint: string, body: any, options: RequestInit = {}) => {
  return apiFetch<T>(endpoint, { ...options, method: "PUT", body: JSON.stringify(body) });
};

export const apiDelete = <T = any>(endpoint: string, options: RequestInit = {}) => {
  return apiFetch<T>(endpoint, { ...options, method: "DELETE" });
};

export const apiPatch = <T = any>(endpoint: string, body: any, options: RequestInit = {}) => {
  return apiFetch<T>(endpoint, { ...options, method: "PATCH", body: JSON.stringify(body) });
};

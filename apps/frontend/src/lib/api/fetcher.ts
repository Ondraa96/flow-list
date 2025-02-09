import { getToken } from "../auth";

export async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`,
      ...options?.headers,
    },
    ...options,
  });
  
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Something went wrong");
  }

  return res.json();
}
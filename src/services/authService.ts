// src/services/authService.ts
import type { AuthResponse, LoginRequest } from "../types/auth";

const API_BASE = "https://localhost:8080";

const TOKEN_KEY = "jwt_token";

/** Login user */
export async function login(payload: LoginRequest): Promise<AuthResponse> {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  const data: AuthResponse = await res.json();
  setToken(data.token);
  return data;
}

/** Save token to localStorage */
export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

/** Get token */
export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

/** Remove token */
export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

/** Example: fetch with auth header */
export async function fetchWithAuth(input: RequestInfo, init?: RequestInit) {
  const token = getToken();
  return fetch(input, {
    ...init,
    headers: {
      ...(init?.headers || {}),
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
}
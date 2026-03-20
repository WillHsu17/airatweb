export interface SignupRequest {
  username: string;
  password: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
}

export interface AuthResponse {
  user: User;
  token?: string; // if using JWT
}
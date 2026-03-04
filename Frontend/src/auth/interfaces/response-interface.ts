import { User } from "./user.interface";

export interface AuthResponse {
  status:     string;
  statusCode: number;
  message:    string;
  data:       Data;
}

export interface Data {
  user:  User;
  token: string;
}


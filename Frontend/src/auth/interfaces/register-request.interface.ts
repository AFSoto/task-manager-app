export interface RegisterRequest {
  username: string;
  name: string;
  document: string;
  email: string;
  password: string;
  role: { id: number };
}

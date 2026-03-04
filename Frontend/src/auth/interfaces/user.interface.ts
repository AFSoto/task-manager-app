export interface User {
  id:        number;
  username:  string;
  name:      string;
  document:  string;
  email:     string;
  role:      string;
  image:     null;
  state:     boolean;
  createdAt: Date;
  updatedAt: Date;
}

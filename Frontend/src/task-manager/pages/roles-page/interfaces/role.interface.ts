export interface RoleResponse {
  id:          number;
  name:        string;
  description: string;
  systemRole:  boolean;
  active:      boolean;
  createdAt:   Date;
  updatedAt:   Date;
  userCount:   number;
}

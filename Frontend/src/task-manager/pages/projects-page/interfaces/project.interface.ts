import { TasksResponse } from '../../task-list--page/interfaces/tasks.interfaces';

export interface ProjectResponse {
  id:               number;
  name:             string;
  description:      string;
  state:            boolean;
  startDate:        Date;
  endDate:          null;
  deadline:         Date;
  createdAt:        Date;
  updatedAt:        Date;
  stateProjectTask: StateProjectTask;
  tasks:            TasksResponse[];
  users:            ProjectUser[];
}

export interface StateProjectTask {
  id:        number;
  name:      string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectUser {
  id:    number;
  name:  string;
  image: string | null;
}


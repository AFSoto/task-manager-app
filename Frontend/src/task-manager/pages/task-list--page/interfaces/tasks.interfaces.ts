export interface TasksResponse {
  id:               number;
  name:             string;
  description:      string;
  startDate:        Date | null;
  endDate:          Date | null;
  deadline:         Date;
  createdAt:        Date;
  updatedAt:        Date;
  stateProjectTask: StateProjectTask;
  priority:         Priority;
}

export interface StateProjectTask {
  id:        number;
  name:      string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Priority {
  id:        number;
  name:      string;
  createdAt: Date;
  updatedAt: Date;
}


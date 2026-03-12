import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TasksResponse } from '../task-list--page/interfaces/tasks.interfaces';

@Injectable({ providedIn: 'root' })
export class TasksService {

  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.baseUrl;

  getTasksByProject(projectId: number): Observable<TasksResponse[]> {
    return this.http.get<TasksResponse[]>(`${this.baseUrl}/tasks`, {
      params: { projectId: projectId.toString() },
    });
  }

  createTaskForProject(projectId: number, task: any): Observable<any> {
    const payload = { ...task, projectId };
    return this.http.post<any>(`${this.baseUrl}/tasks`, payload);
  }
}


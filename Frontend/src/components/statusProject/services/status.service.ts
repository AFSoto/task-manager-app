
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable, tap } from 'rxjs';

import { StateProjectTask } from '../../../auth/interfaces/state-project-task.interface';

@Injectable({ providedIn: 'root' })
export class StatusProjectService {

  baseUrl = environment.baseUrl;

  private readonly http = inject(HttpClient);


    getStatesProjects(): Observable<StateProjectTask[]> {
      return this.http.get<StateProjectTask[]>(`${this.baseUrl}/state-project-task`)
        .pipe(
          map(resp => resp),
          tap(users => console.log(users))
        );
    }


}

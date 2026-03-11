
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../../auth/services/auth.service';
import { Observable, tap } from 'rxjs';
import { ProjectResponse } from '../projects-page/interfaces/project.interface';

@Injectable({ providedIn: 'root' })
export class RolService {

  authservice = inject(AuthService);
  baseUrl = environment.baseUrl;

  private readonly http = inject(HttpClient);


    getRoles(): Observable<ProjectResponse[]> {
      return this.http.get<ProjectResponse[]>(`${this.baseUrl}/rol`)
        .pipe(
          tap(resp => console.log(resp))
        );
    }


  createRol(rol: any) {
    return this.http.post(`${this.baseUrl}/rol`, rol);
  }

}

import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { StatusProjectService } from './services/status.service';

@Component({
  selector: 'status-project',
  imports: [],
  templateUrl: './statusProject.html',
})
export class StatusProject {

  statusProject = inject(StatusProjectService);


  status = rxResource({
    params: () => ({}),
    stream: () => {
      return this.statusProject.getStatesProjects();
    }
  });



}

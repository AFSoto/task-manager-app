import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { ModalService } from '../../modal.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectsService } from '../../../../task-manager/pages/services/projects.service';
import { StatusProject } from "../../../../components/statusProject/statusProject";

@Component({
  selector: 'app-create-project',
  imports: [ReactiveFormsModule, StatusProject],
  templateUrl: './create-project.html',
})
export class CreateProject {

   modalService = inject(ModalService);
  fb = inject(FormBuilder);
  projectsService = inject(ProjectsService);

  hasError = signal(false);
  isPosting = signal(false);

  projectForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    description: ['', [Validators.required]],
    startDate: ['', [Validators.required]],
    deadline: ['', [Validators.required]],
    stateProjectTaskId: [1, [Validators.required]],
  });

  onSubmit() {

    if (this.projectForm.invalid) {
      this.hasError.set(true);

      setTimeout(() => {
        this.hasError.set(false);
      }, 2000);

      return;
    }

    this.isPosting.set(true);

    const formValue = this.projectForm.value;

    const project = {
      ...formValue,
      startDate: new Date(formValue.startDate!),
      deadline: new Date(formValue.deadline!)
    };

    this.projectsService.createProject(project).subscribe({

      next: () => {

        this.modalService.notifyProjectCreated();
        this.modalService.close();
        this.projectForm.reset({
          stateProjectTaskId: 1
        });

        this.isPosting.set(false);
      },

      error: (err) => {

        console.error(err);

        this.hasError.set(true);
        this.isPosting.set(false);

        setTimeout(() => {
          this.hasError.set(false);
        }, 2000);

      }

    });

  }
}

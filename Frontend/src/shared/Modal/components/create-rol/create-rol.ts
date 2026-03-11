import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalService } from '../../modal.service';
import { RolService } from '../../../../task-manager/pages/services/rol.service';

@Component({
  selector: 'create-rol',
  imports: [],
  templateUrl: './create-rol.html',
})
export class CreateRol {


  modalService = inject(ModalService);
  @Output()
  rolCreated = new EventEmitter<void>();

  fb = inject(FormBuilder);
  rolService = inject(RolService);

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

    const rol = {
      ...formValue,
      startDate: new Date(formValue.startDate!),
      deadline: new Date(formValue.deadline!)
    };

    this.rolService.createRol(rol).subscribe({

      next: () => {

        // recargar proyectos en el padre
        this.rolCreated.emit();

        // cerrar modal
        this.modalService.close();

        // reset formulario
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

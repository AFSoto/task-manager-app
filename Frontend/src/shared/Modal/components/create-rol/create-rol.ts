import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalService } from '../../modal.service';
import { RolService } from '../../../../task-manager/pages/services/rol.service';

@Component({
  selector: 'create-rol',
  imports: [ReactiveFormsModule],
  templateUrl: './create-rol.html',
})
export class CreateRol {
  modalService = inject(ModalService);


  fb = inject(FormBuilder);
  rolService = inject(RolService);

  hasError = signal(false);
  isPosting = signal(false);

  rolForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    description: ['', [Validators.required]],
  });

  onSubmit() {

    if (this.rolForm.invalid) {
      this.hasError.set(true);
      setTimeout(() => this.hasError.set(false), 2000);
      return;
    }

    this.isPosting.set(true);

    const { name, description } = this.rolForm.value;

    const rol = {
      name: name!,
      description: description!,
      active: true
    };

    this.rolService.createRol(rol).subscribe({

      next: () => {

        this.modalService.notifyRoleCreated();
        this.modalService.close();
        this.rolForm.reset();
        this.isPosting.set(false);
      },

      error: (err) => {
        console.error(err);
        this.hasError.set(true);
        this.isPosting.set(false);
        setTimeout(() => this.hasError.set(false), 2000);
      }

    });

  }

}

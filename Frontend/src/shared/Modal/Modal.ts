import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ModalService } from './modal.service';
import { CreateProject } from "./components/create-project/create-project";
import { CreateRol } from "./components/create-rol/create-rol";

@Component({
  selector: 'app-modal',
  imports: [CreateProject, CreateRol],
  templateUrl: './Modal.html',
})
export class Modal {

  modalService = inject(ModalService);

  @Output()
  rolCreated = new EventEmitter<void>();
  projectCreated = new EventEmitter<void>();

  onRolCreated() {
    this.rolCreated.emit();
  }

  onProjectCreated() {
    this.projectCreated.emit();
  }




}

import { Component, inject } from '@angular/core';
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



 }

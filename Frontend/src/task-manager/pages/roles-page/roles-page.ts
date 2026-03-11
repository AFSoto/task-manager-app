import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../shared/Modal/modal.service';
import { RolService } from '../services/rol.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'roles-page',
  standalone: true,  // Asegúrate de que sea standalone
  imports: [CommonModule],  // Importa CommonModule para usar @for, @if, etc.
  templateUrl: './roles-page.html',
})
export class RolesPage {
  modalService = inject(ModalService);
  roleService = inject(RolService);

  rolResource = rxResource({
    params: () => this.modalService.refreshRoles(),
    stream: () => {
      return this.roleService.getRoles();
    },
  });

  openCreateRol() {
    this.modalService.open('createRol');
  }

  closeModal() {
    this.modalService.close();
  }
}

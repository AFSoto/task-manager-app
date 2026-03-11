import { Component, inject } from '@angular/core';
import { ModalService } from '../../../shared/Modal/modal.service';
import { RolService } from '../services/rol.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'roles-page',
  imports: [],
  templateUrl: './roles-page.html',
})
export class RolesPage {


  modalService = inject(ModalService);
  roleService = inject(RolService);

    rolResource = rxResource({
    params: () => ({}),
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

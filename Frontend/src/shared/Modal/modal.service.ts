import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private _isOpen = signal(false);
  private _modalType = signal<string | null>(null);
  private _refreshRoles = signal(0);
  private _refreshProjects = signal(0);

  isOpen = this._isOpen.asReadonly();
  modalType = this._modalType.asReadonly();
  refreshRoles = this._refreshRoles.asReadonly();
  refreshProjects = this._refreshProjects.asReadonly();

  open(type: string) {
    this._modalType.set(type);
    this._isOpen.set(true);
  }

  close() {
    this._isOpen.set(false);
    this._modalType.set(null);
  }

  notifyProjectCreated() {
  this._refreshProjects.update(v => v + 1);
}

  notifyRoleCreated() {
    this._refreshRoles.update(v => v + 1);
  }



}

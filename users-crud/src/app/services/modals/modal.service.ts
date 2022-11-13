import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from 'src/app/modals/add-user-dialog/add-user-dialog.component';
import { ConfirmationComponent } from 'src/app/modals/confirmation/confirmation.component';
import { EditUserDialogComponent } from 'src/app/modals/edit-user-dialog/edit-user-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) {}


  editUser(entity:any) {
    return this.dialog
      .open<EditUserDialogComponent>(EditUserDialogComponent, {
        width: '800px',
        data: { entity: entity },
        disableClose: true,
      })
      .afterClosed()
      .pipe();
  }
  addUser() {
    return this.dialog
      .open<AddUserDialogComponent>(AddUserDialogComponent, {
        width: '800px',
        disableClose: true,
      })
      .afterClosed()
      .pipe();
  }
  deleteUserConfirmaton(){
        return this.dialog
      .open<ConfirmationComponent>(ConfirmationComponent, {
        width: '800px',
        data: {  },
        disableClose: true,
      })
      .afterClosed()
      .pipe();

  }
}

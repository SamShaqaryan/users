import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { take } from 'rxjs/operators'
import { ModalService } from 'src/app/services/modals/modal.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  public users: any
  selectedUser = null;
  constructor(private usersService: UsersService, private modaService: ModalService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.selectedUser = null;
    this.usersService.getAllUsers().pipe(take(1)).subscribe(users => {
      this.users = users
    })
  }
  addUser() {
    this.modaService.addUser().pipe().subscribe(res => {
      if (res) {
        this.getAll();
      }
    })
  }
  deleteUser() {
    this.modaService.deleteUserConfirmaton().pipe().subscribe(res => {
      if (res) {
        this.getAll();
      }
    })
  }
  editUser() {
    this.modaService.editUser(this.selectedUser).pipe().subscribe(res => {
      if (res) {
        this.getAll();
      }
    })
  }






}

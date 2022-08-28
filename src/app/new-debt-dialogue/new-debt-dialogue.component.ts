import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-new-debt-dialogue',
  templateUrl: './new-debt-dialogue.component.html',
  styleUrls: ['./new-debt-dialogue.component.css']
})
export class NewDebtDialogueComponent implements OnInit {

  payingUser !: IUser;
  users !: IUser[];
  pricePaid = new FormControl('', Validators.required);
  description = new FormControl('');
  allComplete = false;
  constructor(private userService: UserService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<NewDebtDialogueComponent>) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  updateAllComplete() {
    this.allComplete = this.users.every( u => u.participatesInCurrentExpense);
  }

  setAll (completed: boolean) {
    this.allComplete = completed;
    this.users.forEach(user => user.participatesInCurrentExpense = completed)
  }

  confirm() {
    this.dialogRef.close(
      {data: this.users,
       amount: this.pricePaid.value,
       payingUser: this.payingUser,
       description: this.description
      });
  }

}

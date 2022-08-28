import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { IUser } from '../../models/user.model';
import {MatDialog} from '@angular/material/dialog';
import { NewDebtDialogueComponent } from '../new-debt-dialogue/new-debt-dialogue.component';
import { IExpense } from 'src/models/expense.model';
import { ExpenseService } from '../services/expense.service';

@Pipe({name: 'absolute'})
export class AbsolutePipe implements PipeTransform {
  transform(num: number, args?: any): any {
    return Math.abs(num);
  }
}


@Component({
  selector: 'app-event-component',
  templateUrl: './event-component.component.html',
  styleUrls: ['./event-component.component.css']
})
export class EventComponentComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private expenseService: ExpenseService,
              private dialog: MatDialog) { }
  
  eventName = '';
  formCompleted = false;
  users: IUser[] = [];
  includedUsers !: IUser[];
  expenses!: IExpense[];

  ngOnInit(): void {
    // this.eventName = this.route.snapshot.params['eventname']
    this.users = this.userService.getUsers();
    this.expenses = this.expenseService.getExpenses();
  }

  openDialog () {
    let dialogRef = this.dialog.open(NewDebtDialogueComponent, {
      height: '80%',
      width: '40%'
  });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {      
      this.includedUsers = res.data.filter((user: IUser) => user.participatesInCurrentExpense === true)

      let totalAmount = +res.amount;
      let amountPerUser = totalAmount / this.includedUsers.length ;

      this.users.forEach(user => {
        if (user.participatesInCurrentExpense) {
          user.ows += amountPerUser
          if (user === res.payingUser) {
            user.ows -= totalAmount;
          }
        };
      })

      let newExpense = {payingUser: res.payingUser, 
                        payedFor: this.includedUsers, 
                        amount: totalAmount,
                        description: res.description.value} as IExpense;
      
      this.expenseService.addExpense(newExpense);
      this.userService.initUsers(this.users);}
    });

  }

}

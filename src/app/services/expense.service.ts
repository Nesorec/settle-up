import { Injectable } from '@angular/core';
import { IExpense } from 'src/models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expenses: IExpense[] = [];

  constructor() { }

  getExpenses() {
    return this.expenses;
  }

  addExpense(expense: IExpense) {
    this.expenses.push(expense);
  }
}

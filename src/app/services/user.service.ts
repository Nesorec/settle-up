import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[] = [];

  constructor() { }

  initUsers(users: IUser[]): void {
    this.users = users;
  }

  addUser(user: IUser): void {
    this.users.push(user);
  }

  getUsers(): IUser[] {
    return this.users
  }

}

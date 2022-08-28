import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-manage-users-form',
  templateUrl: './manage-users-form.component.html',
  styleUrls: ['./manage-users-form.component.css']
})
export class ManageUsersFormComponent implements OnInit {

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private router: Router) { }

  users: IUser[] = [];
  usersArray: IUser[] = [];

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.addCurrentUsers()
  }

  manageUsersForm = this.fb.group({
    currentUsers: this.fb.array([

    ]),
    newUsers: this.fb.array([

    ])
  })

  
  get currentUsers(): FormArray{
    return this.manageUsersForm.get('currentUsers') as FormArray
  }

  addCurrentUsers(): void {
    if (this.users){
    this.users.forEach(user => {
      this.currentUsers.push(this.fb.control(user.name, Validators.required))
    })  
  }
  }

  get newUsers(): FormArray{
    return this.manageUsersForm.get('newUsers') as FormArray
  }

  addNewUser(): void {
    this.newUsers.push(this.fb.control('', Validators.required))
  }

  onSubmit(): void{
    let y = this.manageUsersForm.get('currentUsers')?.value

    for (let i=0; i< y.length; i++) {
      this.usersArray.push({name: y[i], ows: 0, participatesInCurrentExpense: false})
    }


    let x = this.manageUsersForm.get('newUsers')?.value

    for (let i=0; i< x.length; i++) {
      this.usersArray.push({name: x[i], ows: 0, participatesInCurrentExpense: false})
    }
    this.userService.initUsers(this.usersArray)
  
  this.router.navigate(['/event'])
  }

}

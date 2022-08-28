import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  ngOnInit(): void {
  }

  showForm = true;
  eventName = new FormControl('');

  constructor(private router: Router) {}

  onSubmit(): void {

   this.showForm = false;
    this.router.navigate(['event'])
  }

}

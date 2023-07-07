import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  showProfile :Boolean = false;
  token:any;
  fname:any;
  lname:any;
  role:any;

  constructor() { }

  ngOnInit(): void {
    
    this.token = localStorage.getItem('role_id');
    this.fname = localStorage.getItem('fname');
    this.lname = localStorage.getItem('lname');
    this.role = localStorage.getItem('role');
    if (this.token == 2) {
      this.showProfile = true;
    }
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  role : any;
  token : any;
  fname : any;
  lname : any;
  address : any;
  phone : any;

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.getRole();
  }

  getRole() {
    this.token = localStorage.getItem('role_id');
    if(this.token == 1) 
    {
      this.role =  localStorage.getItem('role');
      this.address = localStorage.getItem('address');
      this.fname =  localStorage.getItem('fname');
      this.lname = localStorage.getItem('lname');
      this.phone = localStorage.getItem('phone');
    }
    else if(this.token == 2) 
    {
      this.role =  localStorage.getItem('role');
      this.address = localStorage.getItem('address');
      this.fname =  localStorage.getItem('fname');
      this.lname = localStorage.getItem('lname');
      this.phone = localStorage.getItem('phone');
    }
    else (this.token == 3) 
    {
      this.role =  localStorage.getItem('role');
      this.address = localStorage.getItem('address');
      this.fname =  localStorage.getItem('fname');
      this.lname = localStorage.getItem('lname');
      this.phone = localStorage.getItem('phone');
    }
    
    
  }

  logout() {
    localStorage.removeItem('role_id');
    localStorage.removeItem('role');
    localStorage.removeItem('fname');
    localStorage.removeItem('lname');
    localStorage.removeItem('address');
    localStorage.removeItem('phone');
    this.route.navigate(['home']);
  }

}

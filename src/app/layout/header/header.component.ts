import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showHead:any;
  token:any;


  constructor(private route: Router) { }

  ngOnInit(): void {
    this.showHead = localStorage.getItem('role_id');
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

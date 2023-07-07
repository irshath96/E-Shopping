import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showHead : any;
token: any;

  constructor() { }

  ngOnInit(): void {
    this.showHead = localStorage.getItem('role_id');
  }

}
